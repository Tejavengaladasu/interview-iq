import { describe, it } from 'node:test';
import assert from 'node:assert';
import { readFile } from 'fs/promises';
import path from 'path';

describe('Root package.json validation (NEW)', () => {
    let packageJson;

    describe('File existence and JSON validity', () => {
        it('should exist', async () => {
            const packagePath = path.join(process.cwd(), 'package.json');
            await assert.doesNotReject(
                async () => await readFile(packagePath, 'utf-8'),
                'package.json should exist in root directory'
            );
        });

        it('should be valid JSON', async () => {
            const packagePath = path.join(process.cwd(), 'package.json');
            const content = await readFile(packagePath, 'utf-8');
            
            assert.doesNotThrow(() => {
                JSON.parse(content);
            }, 'package.json should be valid JSON');
        });
    });

    describe('Required fields validation', () => {
        it('should have name field', async () => {
            const packagePath = path.join(process.cwd(), 'package.json');
            const content = await readFile(packagePath, 'utf-8');
            packageJson = JSON.parse(content);

            assert.ok(packageJson.name, 'package.json should have name field');
            assert.strictEqual(typeof packageJson.name, 'string', 'name should be a string');
        });

        it('should have version field', async () => {
            const packagePath = path.join(process.cwd(), 'package.json');
            const content = await readFile(packagePath, 'utf-8');
            packageJson = JSON.parse(content);

            assert.ok(packageJson.version, 'package.json should have version field');
            const versionRegex = /^\d+\.\d+\.\d+$/;
            assert.ok(versionRegex.test(packageJson.version), 'version should follow semver format');
        });

        it('should have scripts object', async () => {
            const packagePath = path.join(process.cwd(), 'package.json');
            const content = await readFile(packagePath, 'utf-8');
            packageJson = JSON.parse(content);

            assert.ok(packageJson.scripts, 'package.json should have scripts field');
            assert.strictEqual(typeof packageJson.scripts, 'object', 'scripts should be an object');
        });
    });

    describe('Build script validation (NEW)', () => {
        it('should have a build script', async () => {
            const packagePath = path.join(process.cwd(), 'package.json');
            const content = await readFile(packagePath, 'utf-8');
            packageJson = JSON.parse(content);

            assert.ok(packageJson.scripts.build, 'package.json should have build script');
            assert.strictEqual(typeof packageJson.scripts.build, 'string', 'build script should be a string');
        });

        it('should install backend dependencies in build script', async () => {
            const packagePath = path.join(process.cwd(), 'package.json');
            const content = await readFile(packagePath, 'utf-8');
            packageJson = JSON.parse(content);

            assert.ok(packageJson.scripts.build.includes('backend'), 
                'build script should reference backend');
            assert.ok(packageJson.scripts.build.includes('npm install'), 
                'build script should install dependencies');
        });

        it('should install frontend dependencies in build script', async () => {
            const packagePath = path.join(process.cwd(), 'package.json');
            const content = await readFile(packagePath, 'utf-8');
            packageJson = JSON.parse(content);

            assert.ok(packageJson.scripts.build.includes('frontend'), 
                'build script should reference frontend');
        });

        it('should build frontend in build script', async () => {
            const packagePath = path.join(process.cwd(), 'package.json');
            const content = await readFile(packagePath, 'utf-8');
            packageJson = JSON.parse(content);

            assert.ok(packageJson.scripts.build.includes('npm run build'), 
                'build script should build frontend');
        });

        it('should use --prefix flag for workspace commands', async () => {
            const packagePath = path.join(process.cwd(), 'package.json');
            const content = await readFile(packagePath, 'utf-8');
            packageJson = JSON.parse(content);

            assert.ok(packageJson.scripts.build.includes('--prefix'), 
                'build script should use --prefix flag for monorepo structure');
        });
    });

    describe('Start script validation (NEW)', () => {
        it('should have a start script', async () => {
            const packagePath = path.join(process.cwd(), 'package.json');
            const content = await readFile(packagePath, 'utf-8');
            packageJson = JSON.parse(content);

            assert.ok(packageJson.scripts.start, 'package.json should have start script');
            assert.strictEqual(typeof packageJson.scripts.start, 'string', 'start script should be a string');
        });

        it('should start backend in start script', async () => {
            const packagePath = path.join(process.cwd(), 'package.json');
            const content = await readFile(packagePath, 'utf-8');
            packageJson = JSON.parse(content);

            assert.ok(packageJson.scripts.start.includes('backend'), 
                'start script should reference backend');
            assert.ok(packageJson.scripts.start.includes('npm run start') || 
                      packageJson.scripts.start.includes('npm start'), 
                'start script should start the backend');
        });

        it('should use --prefix flag in start script', async () => {
            const packagePath = path.join(process.cwd(), 'package.json');
            const content = await readFile(packagePath, 'utf-8');
            packageJson = JSON.parse(content);

            assert.ok(packageJson.scripts.start.includes('--prefix'), 
                'start script should use --prefix flag');
        });
    });

    describe('Metadata validation', () => {
        it('should have main field', async () => {
            const packagePath = path.join(process.cwd(), 'package.json');
            const content = await readFile(packagePath, 'utf-8');
            packageJson = JSON.parse(content);

            assert.ok(packageJson.main, 'package.json should have main field');
        });

        it('should have license field', async () => {
            const packagePath = path.join(process.cwd(), 'package.json');
            const content = await readFile(packagePath, 'utf-8');
            packageJson = JSON.parse(content);

            assert.ok(packageJson.license, 'package.json should have license field');
        });

        it('should have author field', async () => {
            const packagePath = path.join(process.cwd(), 'package.json');
            const content = await readFile(packagePath, 'utf-8');
            packageJson = JSON.parse(content);

            assert.ok(Object.prototype.hasOwnProperty.call(packageJson, 'author'), 
                'package.json should have author field');
        });

        it('should have description field', async () => {
            const packagePath = path.join(process.cwd(), 'package.json');
            const content = await readFile(packagePath, 'utf-8');
            packageJson = JSON.parse(content);

            assert.ok(Object.prototype.hasOwnProperty.call(packageJson, 'description'), 
                'package.json should have description field');
        });

        it('should have keywords field', async () => {
            const packagePath = path.join(process.cwd(), 'package.json');
            const content = await readFile(packagePath, 'utf-8');
            packageJson = JSON.parse(content);

            assert.ok(Object.prototype.hasOwnProperty.call(packageJson, 'keywords'), 
                'package.json should have keywords field');
        });
    });

    describe('Monorepo structure validation', () => {
        it('should define scripts that work with monorepo structure', async () => {
            const packagePath = path.join(process.cwd(), 'package.json');
            const content = await readFile(packagePath, 'utf-8');
            packageJson = JSON.parse(content);

            const hasMonorepoScripts = Object.values(packageJson.scripts).some(script => 
                script.includes('--prefix') || script.includes('backend') || script.includes('frontend')
            );

            assert.ok(hasMonorepoScripts, 
                'Scripts should reference backend/frontend with --prefix for monorepo structure');
        });

        it('should have build script execute in correct order', async () => {
            const packagePath = path.join(process.cwd(), 'package.json');
            const content = await readFile(packagePath, 'utf-8');
            packageJson = JSON.parse(content);

            const buildScript = packageJson.scripts.build;
            const backendIndex = buildScript.indexOf('backend');
            const frontendInstallIndex = buildScript.indexOf('frontend');
            const frontendBuildIndex = buildScript.lastIndexOf('frontend');

            assert.ok(backendIndex < frontendInstallIndex, 
                'Backend install should come before frontend install');
            assert.ok(frontendInstallIndex <= frontendBuildIndex, 
                'Frontend install should come before or at frontend build');
        });
    });

    describe('Edge cases and formatting', () => {
        it('should not have syntax errors', async () => {
            const packagePath = path.join(process.cwd(), 'package.json');
            const content = await readFile(packagePath, 'utf-8');
            
            assert.doesNotThrow(() => {
                JSON.parse(content);
            }, 'JSON should not have syntax errors');
        });

        it('should not have trailing commas', async () => {
            const packagePath = path.join(process.cwd(), 'package.json');
            const content = await readFile(packagePath, 'utf-8');
            
            assert.doesNotThrow(() => {
                JSON.parse(content);
            }, 'JSON should not have trailing commas (validated by JSON.parse)');
        });

        it('should use proper string escaping in scripts', async () => {
            const packagePath = path.join(process.cwd(), 'package.json');
            const content = await readFile(packagePath, 'utf-8');
            packageJson = JSON.parse(content);

            Object.entries(packageJson.scripts).forEach(([name, script]) => {
                assert.strictEqual(typeof script, 'string', 
                    `Script ${name} should be a properly escaped string`);
            });
        });

        it('should have valid npm script syntax', async () => {
            const packagePath = path.join(process.cwd(), 'package.json');
            const content = await readFile(packagePath, 'utf-8');
            packageJson = JSON.parse(content);

            Object.entries(packageJson.scripts).forEach(([name, script]) => {
                assert.ok(script.length > 0, `Script ${name} should not be empty`);
                assert.ok(!script.match(/&&\s*$/), `Script ${name} should not end with &&`);
            });
        });
    });

    describe('Script integration validation', () => {
        it('should have scripts that reference valid npm commands', async () => {
            const packagePath = path.join(process.cwd(), 'package.json');
            const content = await readFile(packagePath, 'utf-8');
            packageJson = JSON.parse(content);

            Object.entries(packageJson.scripts).forEach(([name, script]) => {
                const usesNpm = script.includes('npm');
                if (usesNpm) {
                    assert.ok(
                        script.includes('npm install') || 
                        script.includes('npm run') || 
                        script.includes('npm start') ||
                        script.includes('npm build'),
                        `Script ${name} should use valid npm commands`
                    );
                }
            });
        });

        it('should coordinate build and start scripts properly', async () => {
            const packagePath = path.join(process.cwd(), 'package.json');
            const content = await readFile(packagePath, 'utf-8');
            packageJson = JSON.parse(content);

            assert.ok(packageJson.scripts.build, 'Should have build script');
            assert.ok(packageJson.scripts.start, 'Should have start script');
            assert.ok(packageJson.scripts.build.includes('build'), 
                'Build script should build the project');
            assert.ok(packageJson.scripts.start.includes('start'), 
                'Start script should start the server');
        });
    });
});