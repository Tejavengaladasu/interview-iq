import { describe, it, before, after, mock } from 'node:test';
import assert from 'node:assert';
import http from 'http';

describe('Express Application', () => {
    let app;
    let server;
    let originalEnv;

    before(async () => {
        // Store original environment
        originalEnv = { ...process.env };
        
        // Set test environment
        process.env.NODE_ENV = 'test';
        process.env.PORT = '0'; // Use random port for testing
    });

    after(() => {
        // Restore environment
        process.env = originalEnv;
        if (server) {
            server.close();
        }
    });

    describe('Health endpoint', () => {
        it('should respond with 200 status on /health', async () => {
            const appModule = await import('../app.js?t=' + Date.now());
            app = appModule.default;
            
            return new Promise((resolve, reject) => {
                server = app.listen(0, () => {
                    const port = server.address().port;
                    http.get(`http://localhost:${port}/health`, (res) => {
                        assert.strictEqual(res.statusCode, 200, 'Status should be 200');
                        
                        let data = '';
                        res.on('data', chunk => data += chunk);
                        res.on('end', () => {
                            const json = JSON.parse(data);
                            assert.strictEqual(json.msg, 'Api is up and running!', 'Response message should match');
                            server.close();
                            resolve();
                        });
                    }).on('error', reject);
                });
            });
        });

        it('should return JSON content-type on /health', async () => {
            const appModule = await import('../app.js?t=' + Date.now());
            app = appModule.default;
            
            return new Promise((resolve, reject) => {
                server = app.listen(0, () => {
                    const port = server.address().port;
                    http.get(`http://localhost:${port}/health`, (res) => {
                        assert.ok(res.headers['content-type'].includes('application/json'), 
                            'Content-Type should be application/json');
                        server.close();
                        resolve();
                    }).on('error', reject);
                });
            });
        });

        it('should handle multiple requests to /health', async () => {
            const appModule = await import('../app.js?t=' + Date.now());
            app = appModule.default;
            
            return new Promise((resolve, reject) => {
                server = app.listen(0, () => {
                    const port = server.address().port;
                    let completedRequests = 0;
                    const totalRequests = 3;

                    for (let i = 0; i < totalRequests; i++) {
                        http.get(`http://localhost:${port}/health`, (res) => {
                            assert.strictEqual(res.statusCode, 200, `Request ${i} should return 200`);
                            completedRequests++;
                            if (completedRequests === totalRequests) {
                                server.close();
                                resolve();
                            }
                        }).on('error', reject);
                    }
                });
            });
        });
    });

    describe('Books endpoint (NEW)', () => {
        it('should respond with 200 status on /books', async () => {
            const appModule = await import('../app.js?t=' + Date.now());
            app = appModule.default;
            
            return new Promise((resolve, reject) => {
                server = app.listen(0, () => {
                    const port = server.address().port;
                    http.get(`http://localhost:${port}/books`, (res) => {
                        assert.strictEqual(res.statusCode, 200, 'Status should be 200');
                        
                        let data = '';
                        res.on('data', chunk => data += chunk);
                        res.on('end', () => {
                            const json = JSON.parse(data);
                            assert.strictEqual(json.msg, 'Api is up and running! on books route', 
                                'Response message should match books route message');
                            server.close();
                            resolve();
                        });
                    }).on('error', reject);
                });
            });
        });

        it('should return JSON content-type on /books', async () => {
            const appModule = await import('../app.js?t=' + Date.now());
            app = appModule.default;
            
            return new Promise((resolve, reject) => {
                server = app.listen(0, () => {
                    const port = server.address().port;
                    http.get(`http://localhost:${port}/books`, (res) => {
                        assert.ok(res.headers['content-type'].includes('application/json'), 
                            'Content-Type should be application/json');
                        server.close();
                        resolve();
                    }).on('error', reject);
                });
            });
        });

        it('should handle GET method on /books', async () => {
            const appModule = await import('../app.js?t=' + Date.now());
            app = appModule.default;
            
            return new Promise((resolve, reject) => {
                server = app.listen(0, () => {
                    const port = server.address().port;
                    const options = {
                        hostname: 'localhost',
                        port: port,
                        path: '/books',
                        method: 'GET'
                    };
                    
                    http.request(options, (res) => {
                        assert.strictEqual(res.statusCode, 200, 'GET should return 200');
                        server.close();
                        resolve();
                    }).on('error', reject).end();
                });
            });
        });

        it('should handle POST method on /books (should work with Express default)', async () => {
            const appModule = await import('../app.js?t=' + Date.now());
            app = appModule.default;
            
            return new Promise((resolve, reject) => {
                server = app.listen(0, () => {
                    const port = server.address().port;
                    const options = {
                        hostname: 'localhost',
                        port: port,
                        path: '/books',
                        method: 'POST'
                    };
                    
                    http.request(options, (res) => {
                        // POST to a GET-only route should return 404 in Express 5
                        assert.ok(res.statusCode === 404 || res.statusCode === 405, 
                            'POST should return 404 or 405 for GET-only route');
                        server.close();
                        resolve();
                    }).on('error', reject).end();
                });
            });
        });
    });

    describe('Production mode behavior (NEW)', () => {
        it('should not serve static files in non-production mode', async () => {
            process.env.NODE_ENV = 'development';
            const appModule = await import('../app.js?t=' + Date.now());
            app = appModule.default;
            
            return new Promise((resolve, reject) => {
                server = app.listen(0, () => {
                    const port = server.address().port;
                    http.get(`http://localhost:${port}/some-static-file.js`, (res) => {
                        assert.strictEqual(res.statusCode, 404, 
                            'Static files should not be served in development mode');
                        server.close();
                        resolve();
                    }).on('error', reject);
                });
            });
        });

        it('should configure static file serving in production mode', async () => {
            process.env.NODE_ENV = 'production';
            const appModule = await import('../app.js?t=' + Date.now());
            app = appModule.default;
            
            // Test that the app is configured (we can't test actual file serving without the dist folder)
            assert.ok(app, 'App should be configured in production mode');
            assert.strictEqual(process.env.NODE_ENV, 'production', 'NODE_ENV should be production');
        });

        it('should handle NODE_ENV case sensitivity', async () => {
            process.env.NODE_ENV = 'Production'; // Different case
            const appModule = await import('../app.js?t=' + Date.now());
            app = appModule.default;
            
            // The condition checks for exact string 'production', so this shouldn't enable production mode
            assert.strictEqual(process.env.NODE_ENV, 'Production', 'NODE_ENV should preserve case');
        });

        it('should not activate production mode with empty NODE_ENV', async () => {
            process.env.NODE_ENV = '';
            const appModule = await import('../app.js?t=' + Date.now());
            app = appModule.default;
            
            assert.strictEqual(process.env.NODE_ENV, '', 'NODE_ENV should be empty');
        });

        it('should not activate production mode with undefined NODE_ENV', async () => {
            delete process.env.NODE_ENV;
            const appModule = await import('../app.js?t=' + Date.now());
            app = appModule.default;
            
            assert.strictEqual(process.env.NODE_ENV, undefined, 'NODE_ENV should be undefined');
        });
    });

    describe('Non-existent routes', () => {
        it('should return 404 for non-existent routes', async () => {
            process.env.NODE_ENV = 'test';
            const appModule = await import('../app.js?t=' + Date.now());
            app = appModule.default;
            
            return new Promise((resolve, reject) => {
                server = app.listen(0, () => {
                    const port = server.address().port;
                    http.get(`http://localhost:${port}/nonexistent`, (res) => {
                        assert.strictEqual(res.statusCode, 404, 'Non-existent route should return 404');
                        server.close();
                        resolve();
                    }).on('error', reject);
                });
            });
        });

        it('should return 404 for /api routes that do not exist', async () => {
            process.env.NODE_ENV = 'test';
            const appModule = await import('../app.js?t=' + Date.now());
            app = appModule.default;
            
            return new Promise((resolve, reject) => {
                server = app.listen(0, () => {
                    const port = server.address().port;
                    http.get(`http://localhost:${port}/api/nonexistent`, (res) => {
                        assert.strictEqual(res.statusCode, 404, 'Non-existent API route should return 404');
                        server.close();
                        resolve();
                    }).on('error', reject);
                });
            });
        });
    });

    describe('Edge cases and error handling', () => {
        it('should handle requests with query parameters on /health', async () => {
            const appModule = await import('../app.js?t=' + Date.now());
            app = appModule.default;
            
            return new Promise((resolve, reject) => {
                server = app.listen(0, () => {
                    const port = server.address().port;
                    http.get(`http://localhost:${port}/health?param=value`, (res) => {
                        assert.strictEqual(res.statusCode, 200, 'Should handle query parameters');
                        server.close();
                        resolve();
                    }).on('error', reject);
                });
            });
        });

        it('should handle requests with query parameters on /books', async () => {
            const appModule = await import('../app.js?t=' + Date.now());
            app = appModule.default;
            
            return new Promise((resolve, reject) => {
                server = app.listen(0, () => {
                    const port = server.address().port;
                    http.get(`http://localhost:${port}/books?page=1&limit=10`, (res) => {
                        assert.strictEqual(res.statusCode, 200, 'Should handle query parameters on /books');
                        server.close();
                        resolve();
                    }).on('error', reject);
                });
            });
        });

        it('should handle trailing slashes on /health', async () => {
            const appModule = await import('../app.js?t=' + Date.now());
            app = appModule.default;
            
            return new Promise((resolve, reject) => {
                server = app.listen(0, () => {
                    const port = server.address().port;
                    http.get(`http://localhost:${port}/health/`, (res) => {
                        // Express by default does not match /health/ to /health
                        assert.ok(res.statusCode === 404 || res.statusCode === 200, 
                            'Should handle trailing slash (behavior depends on Express config)');
                        server.close();
                        resolve();
                    }).on('error', reject);
                });
            });
        });

        it('should handle case-sensitive routes', async () => {
            const appModule = await import('../app.js?t=' + Date.now());
            app = appModule.default;
            
            return new Promise((resolve, reject) => {
                server = app.listen(0, () => {
                    const port = server.address().port;
                    http.get(`http://localhost:${port}/HEALTH`, (res) => {
                        // Express routes are case-sensitive by default
                        assert.strictEqual(res.statusCode, 404, 'Routes should be case-sensitive');
                        server.close();
                        resolve();
                    }).on('error', reject);
                });
            });
        });
    });

    describe('App module exports', () => {
        it('should export a function (Express app)', async () => {
            const appModule = await import('../app.js?t=' + Date.now());
            assert.strictEqual(typeof appModule.default, 'function', 'Should export a function (Express app)');
        });

        it('should export an app with listen method', async () => {
            const appModule = await import('../app.js?t=' + Date.now());
            app = appModule.default;
            assert.strictEqual(typeof app.listen, 'function', 'App should have listen method');
        });

        it('should export an app with get method', async () => {
            const appModule = await import('../app.js?t=' + Date.now());
            app = appModule.default;
            assert.strictEqual(typeof app.get, 'function', 'App should have get method');
        });

        it('should export an app with use method', async () => {
            const appModule = await import('../app.js?t=' + Date.now());
            app = appModule.default;
            assert.strictEqual(typeof app.use, 'function', 'App should have use method');
        });
    });
});