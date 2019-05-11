const typescript = require('rollup-plugin-typescript2')

module.exports = [{
    input: 'src/ipreact.tsx',
    plugins: [
        typescript(),
    ],
    external: ["react"],
    output: {
        name: 'IPreact',
        globals: {
            react: 'React'
        },
        sourcemap: true,
        file: 'ipreact.js',
        exports: 'named',
        format: 'umd'
    }
}, {
    input: 'test/index.tsx',
    plugins: [
        typescript(),
    ],
    external: ["react", "react-dom"],
    output: {
        name: 'App',
        globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
        },
        sourcemap: true,
        file: 'test/index.js',
        format: 'iife'
    }
}]