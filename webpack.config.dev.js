var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackBrowserPlugin = require('webpack-browser-plugin');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:4000',
        'webpack/hot/only-dev-server',
        './src/index.js',
    ],

    output: {
        path: __dirname + '/dist/',
        filename: 'bundle.js'
    },

    devServer: {
        hot: true,
        inline: true,
        host: '0.0.0.0',
        port: 4000,
        contentBase: __dirname + '/dist/',
    },

    module: {
        loaders: [
            {
                test: /.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'stage-0', 'react'],
                    plugins: ["react-hot-loader/babel"]
                }
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
                loader: 'file',
                query: {
                    name: 'static/media/[name].[hash:8].[ext]'
                }
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new WebpackBrowserPlugin({
            port: 4000,
            url: 'http://localhost'
        })
    ]
};