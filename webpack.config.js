var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry:[
        './src/index.js',
    ],
    output: {
        path: __dirname + '/dist/',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel?' + JSON.stringify({
                    cacheDirectory: true,
                    presets: ['es2015', 'stage-0', 'react']
                })],
                exclude: /node_modules/,
            }, {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            }, {
                test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
                loader: 'file',
                query: {
                    name: 'images/[name].[hash:8].[ext]'
                }
            }

        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new ExtractTextPlugin('style.css')
    ]
};