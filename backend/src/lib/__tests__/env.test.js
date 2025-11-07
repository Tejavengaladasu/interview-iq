import { describe, it, before, after } from 'node:test';
import assert from 'node:assert';

describe('ENV Configuration', () => {
    let originalEnv;

    before(() => {
        // Store original environment variables
        originalEnv = { ...process.env };
    });

    after(() => {
        // Restore original environment variables
        process.env = originalEnv;
    });

    describe('ENV object structure', () => {
        it('should export an ENV object', async () => {
            const { ENV } = await import('../env.js');
            assert.ok(ENV, 'ENV object should be defined');
            assert.strictEqual(typeof ENV, 'object', 'ENV should be an object');
        });

        it('should have PORT property', async () => {
            const { ENV } = await import('../env.js');
            assert.ok(Object.prototype.hasOwnProperty.call(ENV, 'PORT'), 'ENV should have PORT property');
        });

        it('should have DB_URL property', async () => {
            const { ENV } = await import('../env.js');
            assert.ok(Object.prototype.hasOwnProperty.call(ENV, 'DB_URL'), 'ENV should have DB_URL property');
        });

        it('should have NODE_ENV property', async () => {
            const { ENV } = await import('../env.js');
            assert.ok(Object.prototype.hasOwnProperty.call(ENV, 'NODE_ENV'), 'ENV should have NODE_ENV property');
        });
    });

    describe('Environment variable loading', () => {
        it('should load PORT from process.env', async () => {
            process.env.PORT = '3000';
            // Clear module cache to reload with new env
            delete require.cache[require.resolve('../env.js')];
            const { ENV } = await import('../env.js?t=' + Date.now());
            assert.strictEqual(ENV.PORT, '3000', 'PORT should match process.env.PORT');
        });

        it('should load DB_URL from process.env', async () => {
            process.env.DB_URL = 'mongodb://localhost:27017/testdb';
            const { ENV } = await import('../env.js?t=' + Date.now());
            assert.strictEqual(ENV.DB_URL, 'mongodb://localhost:27017/testdb', 'DB_URL should match process.env.DB_URL');
        });

        it('should load NODE_ENV from process.env', async () => {
            process.env.NODE_ENV = 'production';
            const { ENV } = await import('../env.js?t=' + Date.now());
            assert.strictEqual(ENV.NODE_ENV, 'production', 'NODE_ENV should match process.env.NODE_ENV');
        });

        it('should handle undefined NODE_ENV', async () => {
            delete process.env.NODE_ENV;
            const { ENV } = await import('../env.js?t=' + Date.now());
            assert.strictEqual(ENV.NODE_ENV, undefined, 'NODE_ENV should be undefined when not set');
        });

        it('should handle development NODE_ENV', async () => {
            process.env.NODE_ENV = 'development';
            const { ENV } = await import('../env.js?t=' + Date.now());
            assert.strictEqual(ENV.NODE_ENV, 'development', 'NODE_ENV should be development');
        });

        it('should handle test NODE_ENV', async () => {
            process.env.NODE_ENV = 'test';
            const { ENV } = await import('../env.js?t=' + Date.now());
            assert.strictEqual(ENV.NODE_ENV, 'test', 'NODE_ENV should be test');
        });
    });

    describe('Edge cases and error handling', () => {
        it('should handle missing PORT gracefully', async () => {
            delete process.env.PORT;
            const { ENV } = await import('../env.js?t=' + Date.now());
            assert.strictEqual(ENV.PORT, undefined, 'PORT should be undefined when not set');
        });

        it('should handle missing DB_URL gracefully', async () => {
            delete process.env.DB_URL;
            const { ENV } = await import('../env.js?t=' + Date.now());
            assert.strictEqual(ENV.DB_URL, undefined, 'DB_URL should be undefined when not set');
        });

        it('should handle empty string environment variables', async () => {
            process.env.PORT = '';
            process.env.DB_URL = '';
            process.env.NODE_ENV = '';
            const { ENV } = await import('../env.js?t=' + Date.now());
            assert.strictEqual(ENV.PORT, '', 'PORT should be empty string');
            assert.strictEqual(ENV.DB_URL, '', 'DB_URL should be empty string');
            assert.strictEqual(ENV.NODE_ENV, '', 'NODE_ENV should be empty string');
        });

        it('should handle whitespace in environment variables', async () => {
            process.env.NODE_ENV = '  production  ';
            const { ENV } = await import('../env.js?t=' + Date.now());
            assert.strictEqual(ENV.NODE_ENV, '  production  ', 'NODE_ENV should preserve whitespace');
        });

        it('should handle numeric PORT values', async () => {
            process.env.PORT = '8080';
            const { ENV } = await import('../env.js?t=' + Date.now());
            assert.strictEqual(ENV.PORT, '8080', 'PORT should be string "8080"');
        });

        it('should handle special characters in DB_URL', async () => {
            process.env.DB_URL = 'mongodb://user:p@ss!word@localhost:27017/db';
            const { ENV } = await import('../env.js?t=' + Date.now());
            assert.strictEqual(ENV.DB_URL, 'mongodb://user:p@ss!word@localhost:27017/db', 'DB_URL should handle special characters');
        });
    });

    describe('ENV object immutability concerns', () => {
        it('should allow reading all properties', async () => {
            process.env.PORT = '3000';
            process.env.DB_URL = 'mongodb://localhost:27017/testdb';
            process.env.NODE_ENV = 'production';
            const { ENV } = await import('../env.js?t=' + Date.now());
            
            assert.doesNotThrow(() => {
                const port = ENV.PORT;
                const dbUrl = ENV.DB_URL;
                const nodeEnv = ENV.NODE_ENV;
            }, 'Should be able to read all ENV properties');
        });

        it('should have exactly three properties', async () => {
            const { ENV } = await import('../env.js?t=' + Date.now());
            const keys = Object.keys(ENV);
            assert.strictEqual(keys.length, 3, 'ENV should have exactly 3 properties');
            assert.ok(keys.includes('PORT'), 'ENV should include PORT');
            assert.ok(keys.includes('DB_URL'), 'ENV should include DB_URL');
            assert.ok(keys.includes('NODE_ENV'), 'ENV should include NODE_ENV');
        });
    });
});