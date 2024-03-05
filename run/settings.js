import fs from 'fs';
import path from 'path';

const packageJson = fs.readFileSync(path.join(process.cwd(), './package.json'), 'utf-8');
let version = '1.0.0';

try {
    const parsed = JSON.parse(packageJson);
    version = parsed.version;
} catch (ex) {}

export const settings = {
    entryPoints: ['./src/index.ts'],
    bundle: true,
    sourcemap: 'linked', // external
    minify: true,
    target: ['es6'],
    outfile: './dist/mz-ml.min.js',
    banner: {
        js: `/* 
mzMl v${ version }
A collection of TypeScript-based ML helpers.
https://github.com/mzusin/mz-ml
Copyright (c) 2023-present, Miriam Zusin          
*/`,
    },
};