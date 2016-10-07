var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: [

        './src/app/main',
        './src/app/controllers/ctrl',
        './src/app/directives/drtv',
        './src/app/services/svs'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new HtmlWebpackPlugin({
            template: './src/template/main.html'
        }),
        new ExtractTextPlugin("style.css")
    ],
    module: {
        loaders: [{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('css!sass')
        }]
    }
};