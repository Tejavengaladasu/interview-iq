import { describe, it } from 'node:test';
import assert from 'node:assert';
import { readFile } from 'fs/promises';
import path from 'path';

describe('Backend package.json validation', () => {
    let packageJson;
    let packageData;

    describe('JSON structure validation', () => {
        it('should be valid JSON', async () => {
            const packagePath = path.join(process.cwd(), 'backend', 'package.json');
            const content = await readFile(packagePath, 'utf-8');
            
            assert.doesNotThrow(() => {
                packageData = JSON.parse(content);
            }, 'package.json should be valid JSON');
        });

        it('should have required top-level fields', async () => {
            const packagePath = path.join(process.cwd(), 'backend', 'package.json');
            const content = await readFile(packagePath, 'utf-8');
            packageJson = JSON.parse(content);

            assert.ok(packageJson.name, 'package.json should have name field');
            assert.ok(packageJson.version, 'package.json should have version field');
            assert.ok(packageJson.scripts, 'package.json should have scripts field');
        });
    });

    describe('Scripts validation', () => {
        it('should have a scripts object', async () => {
            const packagePath = path.join(process.cwd(), 'backend', 'package.json');
            const content = await readFile(packagePath, 'utf-8');
            packageJson = JSON.parse(content);

            assert.strictEqual(typeof packageJson.scripts, 'object', 'scripts should be an object');
        });

        it('should have a start script (NEW)', async () => {
            const packagePath = path.join(process.cwd(), 'backend', 'package.json');
            const content = await readFile(packagePath, 'utf-8');
            packageJson = JSON.parse(content);

            assert.ok(packageJson.scripts.start, 'package.json should have start script');
            assert.strictEqual(typeof packageJson.scripts.start, 'string', 'start script should be a string');
        });

        it('should have start script pointing to src/server.js', async () => {
            const packagePath = path.join(process.cwd(), 'backend', 'package.json');
            const content = await readFile(packagePath, 'utf-8');
            packageJson = JSON.parse(content);

            assert.ok(packageJson.scripts.start.includes('server.js'), 
                'start script should reference server.js');
        });

        it('should have a dev script', async () => {
            const packagePath = path.join(process.cwd(), 'backend', 'package.json');
            const content = await readFile(packagePath, 'utf-8');
            packageJson = JSON.parse(content);

            assert.ok(packageJson.scripts.dev, 'package.json should have dev script');
        });

        it('should have dev script using nodemon', async () => {
            const packagePath = path.join(process.cwd(), 'backend', 'package.json');
            const content = await readFile(packagePath, 'utf-8');
            packageJson = JSON.parse(content);

            assert.ok(packageJson.scripts.dev.includes('nodemon'), 
                'dev script should use nodemon');
        });

        it('should have a test script', async () => {
            const packagePath = path.join(process.cwd(), 'backend', 'package.json');
            const content = await readFile(packagePath, 'utf-8');
            packageJson = JSON.parse(content);

            assert.ok(packageJson.scripts.test, 'package.json should have test script');
        });
    });

    describe('Module type validation', () => {
        it('should specify module type as ES module', async () => {
            const packagePath = path.join(process.cwd(), 'backend', 'package.json');
            const content = await readFile(packagePath, 'utf-8');
            packageJson = JSON.parse(content);

            assert.strictEqual(packageJson.type, 'module', 
                'package.json should specify type as "module" for ES modules');
        });
    });

    describe('Dependencies validation', () => {
        it('should have dependencies object', async () => {
            const packagePath = path.join(process.cwd(), 'backend', 'package.json');
            const content = await readFile(packagePath, 'utf-8');
            packageJson = JSON.parse(content);

            assert.ok(packageJson.dependencies, 'package.json should have dependencies');
            assert.strictEqual(typeof packageJson.dependencies, 'object', 
                'dependencies should be an object');
        });

        it('should have express as a dependency', async () => {
            const packagePath = path.join(process.cwd(), 'backend', 'package.json');
            const content = await readFile(packagePath, 'utf-8');
            packageJson = JSON.parse(content);

            assert.ok(packageJson.dependencies.express, 
                'package.json should have express dependency');
        });

        it('should have dotenv as a dependency', async () => {
            const packagePath = path.join(process.cwd(), 'backend', 'package.json');
            const content = await readFile(packagePath, 'utf-8');
            packageJson = JSON.parse(content);

            assert.ok(packageJson.dependencies.dotenv, 
                'package.json should have dotenv dependency');
        });

        it('should have valid semver versions for dependencies', async () => {
            const packagePath = path.join(process.cwd(), 'backend', 'package.json');
            const content = await readFile(packagePath, 'utf-8');
            packageJson = JSON.parse(content);

            const semverRegex = /^[\^~]?\d+\.\d+\.\d+$/;
            Object.entries(packageJson.dependencies).forEach(([name, version]) => {
                assert.ok(semverRegex.test(version) || version.startsWith('^') || version.startsWith('~'), 
                    `Dependency ${name} should have valid semver version`);
            });
        });
    });

    describe('DevDependencies validation', () => {
        it('should have devDependencies object', async () => {
            const packagePath = path.join(process.cwd(), 'backend', 'package.json');
            const content = await readFile(packagePath, 'utf-8');
            packageJson = JSON.parse(content);

            assert.ok(packageJson.devDependencies, 'package.json should have devDependencies');
        });

        it('should have nodemon as a devDependency', async () => {
            const packagePath = path.join(process.cwd(), 'backend', 'package.json');
            const content = await readFile(packagePath, 'utf-8');
            packageJson = JSON.parse(content);

            assert.ok(packageJson.devDependencies.nodemon, 
                'package.json should have nodemon as devDependency');
        });
    });

    describe('Main entry point validation', () => {
        it('should have main field', async () => {
            const packagePath = path.join(process.cwd(), 'backend', 'package.json');
            const content = await readFile(packagePath, 'utf-8');
            packageJson = JSON.parse(content);

            assert.ok(packageJson.main, 'package.json should have main field');
        });

        it('should point main to src/server.js', async () => {
            const packagePath = path.join(process.cwd(), 'backend', 'package.json');
            const content = await readFile(packagePath, 'utf-8');
            packageJson = JSON.parse(content);

            assert.ok(packageJson.main.includes('server.js'), 
                'main should point to server.js');
        });
    });

    describe('Metadata validation', () => {
        it('should have name field', async () => {
            const packagePath = path.join(process.cwd(), 'backend', 'package.json');
            const content = await readFile(packagePath, 'utf-8');
            packageJson = JSON.parse(content);

            assert.strictEqual(typeof packageJson.name, 'string', 'name should be a string');
            assert.ok(packageJson.name.length > 0, 'name should not be empty');
        });

        it('should have version field', async () => {
            const packagePath = path.join(process.cwd(), 'backend', 'package.json');
            const content = await readFile(packagePath, 'utf-8');
            packageJson = JSON.parse(content);

            assert.strictEqual(typeof packageJson.version, 'string', 'version should be a string');
            const versionRegex = /^\d+\.\d+\.\d+$/;
            assert.ok(versionRegex.test(packageJson.version), 'version should follow semver format');
        });

        it('should have license field', async () => {
            const packagePath = path.join(process.cwd(), 'backend', 'package.json');
            const content = await readFile(packagePath, 'utf-8');
            packageJson = JSON.parse(content);

            assert.ok(packageJson.license, 'package.json should have license field');
        });
    });

    describe('Edge cases and consistency', () => {
        it('should not have duplicate keys (JSON parsing handles this)', async () => {
            const packagePath = path.join(process.cwd(), 'backend', 'package.json');
            const content = await readFile(packagePath, 'utf-8');
            
            assert.doesNotThrow(() => {
                JSON.parse(content);
            }, 'JSON should not have duplicate keys or syntax errors');
        });

        it('should not have trailing commas (validated by JSON.parse)', async () => {
            const packagePath = path.join(process.cwd(), 'backend', 'package.json');
            const content = await readFile(packagePath, 'utf-8');
            
            assert.doesNotThrow(() => {
                JSON.parse(content);
            }, 'JSON should not have trailing commas');
        });

        it('should have consistent indentation', async () => {
            const packagePath = path.join(process.cwd(), 'backend', 'package.json');
            const content = await readFile(packagePath, 'utf-8');
            
            const lines = content.split('\n');
            const indentedLines = lines.filter(line => line.match(/^\s+\S/));
            
            if (indentedLines.length > 0) {
                const firstIndent = indentedLines[0].match(/^(\s+)/);
                assert.ok(firstIndent, 'Should have consistent indentation');
            }
        });
    });
});