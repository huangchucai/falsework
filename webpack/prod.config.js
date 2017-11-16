/**
 * Created by Z7 on 2017/11/14.
 */
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./base.config');

module.exports = merge(baseConfig, {
    plugins: [
            new UglifyJsPlugin()
    ]
})