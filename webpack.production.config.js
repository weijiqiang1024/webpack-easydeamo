var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var extractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    // devtool: 'eval-source-map', //配置生成souce maps,选择合适的选项
    entry: __dirname + '/app/main.js', //入口文件
    output: {
        path: __dirname + '/build', //打包后文件存储的地方
        filename: 'bundle.js' //打包后输出文件的名称
    },
    module: {
        loaders: [
            { test: /\.json$/, loader: 'json-loader' },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader' ////在webpack的module部分的loaders里进行配置即可
                    // query: {
                    //     presets: ['es2015', 'react']
                    // }
            },
            { test: /\.css$/, loader: 'style-loader!css-loader?modules' } //添加对样式的处理
        ]
    },
    plugins: [
        new webpack.BannerPlugin('This file is created by weijq'),
        new htmlWebpackPlugin({
            template:__dirname + "/app/index.html"
        }),
        new extractTextPlugin("style.css"),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ]
}



