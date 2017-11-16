/**
 * Created by Z7 on 2017/11/14.
 */
const path = require('path');
const entry = require('./entry');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: entry,
    output: {
        path: path.resolve(process.cwd(), './dist'),
        filename: '[name].js',
        publicPath: '/dist'
    },
    context: path.resolve(process.cwd(), 'src/app'),
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader"]
                })
            },
            {
                test: /\.styl/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "stylus-loader"]
                })
            },
            {
                test: /\.(png|jpg|gif|woff|woff2|ttf|eot|svg|swf)$/,
                loader: "file-loader",
                options: {
                    name: 'img/[name]_[sha512:hash:base64:7].[ext]'
                }
            },

        ]
    },
    plugins: [
        new ExtractTextPlugin('css/style.css'),
        new HtmlWebpackPlugin({
            title: 'my architecture',
            filename: 'index.html',
            template: path.resolve(process.cwd(), 'template.html')
        })
    ],
    resolve: {
        alias: {'vue': 'vue/dist/vue.js'}
    }
}