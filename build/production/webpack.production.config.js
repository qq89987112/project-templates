let
    path = require('path'),
    utils = require('../common/utils'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    merge = require('webpack-merge'),
    baseConfig = require('../common/webpack.base.config')('production');

module.exports = merge(baseConfig, {
    plugins: [
        new CopyWebpackPlugin([
            {
                from: path.resolve('./static'),
                to: 'static',
                ignore: ['.*']
            }
        ]),
        new ExtractTextPlugin({
            filename: ('static/css/[name].css')
        }),
    ].concat(utils.htmlPlugin())
})

