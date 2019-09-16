const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'dist')
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Loader'
        })
    ],

    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader']
        },{
            test: /\.js$/,
            use: [{
                loader: path.resolve(path.resolve(__dirname), 'loader.js')
            }]
        }]
    }
}