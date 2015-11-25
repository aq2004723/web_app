'use strict';

var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    path = require('path'),
    srcPath = path.join(__dirname, 'src');

module.exports = {
    target: 'web',
    cache: true,
    entry: {
        p1:path.join(srcPath, 'js/app.jsx'),
        p2:path.join(srcPath, 'js/login.jsx')
    },
    resolve: {
        root: srcPath,
        extensions: ['', '.js','.jsx'],
        modulesDirectories: ['node_modules', 'src']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        library: ['Example', '[name]'],
        pathInfo: true
    },

    module: {
        loaders: [
            {test: /\.js?$/, exclude: /node_modules/, loader: 'babel?cacheDirectory'},
            {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel?cacheDirectory'},
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
        new HtmlWebpackPlugin({
            inject:true,
            template: 'src/index.html'
        }),
        new HtmlWebpackPlugin({
            inject:true,
            filename:'login.html',
            template: 'src/login.html'
        }),
        new webpack.NoErrorsPlugin()
    ]
};