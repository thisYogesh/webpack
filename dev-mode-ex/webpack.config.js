const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        one: path.resolve(__dirname, 'src/index.js'),
        two: path.resolve(__dirname, 'src/main.js')
    },

    devServer: {
        contentBase: path.resolve(__dirname, './dist')
    },

    plugins: [
        new CleanWebpackPlugin,
        new HtmlWebpackPlugin({
            title: 'Index file'
        })
    ],

    output: {
        filename: '[name].build.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    }
}