var path = require('path')

module.exports = {
    mode: 'none',

    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'dist'),
    },

    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    }
}