const path = require('path')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const { HotModuleReplacementPlugin } = require('webpack')

module.exports = merge(baseConfig, {
    devtool: 'inline-source-map',
    plugins: [
        new HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, '..', 'dist'),
        hot: true,
        compress: true,
        writeToDisk: true,
        disableHostCheck: true,
        historyApiFallback: true,
        port: process.env.PORT,
    }
})
