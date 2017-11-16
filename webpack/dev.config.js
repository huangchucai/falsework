/**
 * Created by Z7 on 2017/11/14.
 */
/**
 * Created by Z7 on 2017/11/14.
 */
const merge = require('webpack-merge');
const baseConfig = require('./base.config');
const path = require('path');
module.exports = merge(baseConfig, {
    watch: true,
    devServer: {
        contentBase: path.resolve(process.cwd(), "template"),
        compress: true,
        port: 9000
    }
})