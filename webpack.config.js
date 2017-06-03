'use strict';

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

var BUILD_DIR = path.join(__dirname, '/dist/');
var EXCLUDE_FOLDERS = [
    /node_modules/,
    /dist/
];
var UI_DIR = path.join(__dirname, '/ui/');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        path.join(__dirname, 'main.js')
    ],
    output: {
        path: BUILD_DIR,
        filename: '[name].js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(UI_DIR, 'index.html'),
            inject: 'body',
            filename: 'index.html'
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: EXCLUDE_FOLDERS,
                loader: 'babel-loader'
            },
            {
                // TODO: Run plugin to extract this CSS.
                test: /\.scss$/,
                exclude: EXCLUDE_FOLDERS,
                loader: 'style-loader!css-loader?module&localIdentName=[name]---[local]---[hash:base64:5]!sass-loader'
            }
        ]
    }
};
