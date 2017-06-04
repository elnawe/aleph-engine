'use strict';

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var EXCLUDE_FOLDERS = [
    /node_modules/,
    /dist/
];
var UI_DIR = path.resolve(__dirname, 'ui');
var CORE_DIR = path.resolve(__dirname, 'core');

module.exports = {
    entry: {
        main: [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/dev-server',
            path.join(UI_DIR, 'main.js')
        ]
    },
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
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_PATH': './'
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: EXCLUDE_FOLDERS,
                include: [
                    CORE_DIR,
                    UI_DIR
                ],
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
