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
        filename: 'index.js'
    },
    watch: true,
    context: path.resolve(process.cwd(), 'src/app'),
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loader: "sass-loader"
            },
            {
                test: /\.css$/,
                loader: "css-loader"
            },
            {
                test: /\.styl/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader","stylus-loader"]
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
            template: path.resolve(process.cwd(), './test.html')
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }
}