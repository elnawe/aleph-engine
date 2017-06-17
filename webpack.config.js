'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { CheckerPlugin } = require('awesome-typescript-loader');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const CANVAS_DIR = path.resolve(__dirname, 'canvas');
const CORE_DIR = path.resolve(__dirname, 'core');
const DEBUGGER_DIR = path.resolve(__dirname, 'debugger');
const EXCLUDE_FOLDERS = [/node_modules/, /dist/];
const SANDBOX_DIR = path.resolve(__dirname, 'sandbox');

module.exports = {
    entry: {
        main: [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/dev-server',
            path.join(SANDBOX_DIR, 'main.ts')
        ]
    },
    output: {
        path: BUILD_DIR,
        filename: '[name].js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(SANDBOX_DIR, 'index.html'),
            inject: 'body',
            filename: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_PATH': './'
        }),
        new CheckerPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.ts$/,
                exclude: EXCLUDE_FOLDERS,
                include: [
                    CANVAS_DIR,
                    CORE_DIR,
                    DEBUGGER_DIR,
                    SANDBOX_DIR
                ],
                loader: ['awesome-typescript-loader']
            },
            {
                // TODO: Run plugin to extract this CSS.
                test: /\.scss$/,
                exclude: EXCLUDE_FOLDERS,
                loader: 'style-loader!css-loader?module&localIdentName=[name]---[local]---[hash:base64:5]!sass-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts'],
        modules: [
            path.resolve('./'),
            path.resolve(__dirname, 'node_modules')
        ]
    }
};
