let
    path = require('path'),
    utils = require('./utils'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: utils.entries(),
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: ('static/img/[name].[ext]')
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: "css-loader"
                    }],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    fallback: "style-loader"
                })
            }]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'static/js/[name].js'
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../static'),
                to: 'static',
                ignore: ['.*']
            }
        ]),
        new ExtractTextPlugin({
            filename: ('static/css/[name].css')
        }),
    ].concat(utils.htmlPlugin())
};