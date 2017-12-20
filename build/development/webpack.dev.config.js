let
    utils = require('../common/utils'),
    merge = require('webpack-merge'),
    webpack = require('webpack'),
    baseConfig = require('../common/webpack.base.config')('development');

    Object.keys(baseConfig.entry).forEach(function (name) {
        baseConfig.entry[name] = ['./build/development/dev-client'].concat(baseConfig.entry[name])
    })

    module.exports = merge(baseConfig, {
        plugins: [
            new webpack.DefinePlugin({
                'process.env': 'development'
            }),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin(),
        ].concat(utils.htmlPlugin())
    })

