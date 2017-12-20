let
    path = require('path'),
    utils = require('../common/utils'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (type) => {
    let
        isDevelopment = type === 'development',
        loaders = ['style-loader','css-loader', 'sass-loader' ],
        loadersUse = isDevelopment ? loaders.map(item=>{return {loader:item}}) : ExtractTextPlugin.extract({
                use:loaders.slice(1).map(item=>{return {loader:item}}),
                fallback: loaders[0]
         });
    return {
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
                    test: /\.scss$/,
                    use: loadersUse
                },
                {
                    test: /\.css$/,
                    use: loadersUse
                }
                ]
        },
        output: {
            path: path.resolve('./dist'),
            filename: 'static/js/[name].js',
            publicPath:'./'
        },
        plugins: [].concat(utils.htmlPlugin())
    };
}
