let
    glob = require('glob'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    merge = require('webpack-merge'),
    path = require('path'),
    PAGE_PATH = path.resolve(__dirname, '../src/pages');

    exports.entries = function () {
        var entryFiles = glob.sync(PAGE_PATH + '/*/*.js')
        var map = {}
        entryFiles.forEach((filePath) => {
            var filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
            map[filename] = filePath
        })
        return map
    }

    exports.htmlPlugin = function() {
        let entryHtml = glob.sync(PAGE_PATH + '/*/*.html')
        let arr = []
        entryHtml.forEach((filePath) => {
            let filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
            let conf = {
                // 模板来源
                template: filePath,
                // 文件名称
                filename: filename + '.html',
                // 页面模板需要加对应的js脚本，如果不加这行则每个页面都会引入所有的js脚本
                chunks: [filename],
                inject: true
            }
            if (process.env.NODE_ENV === 'production') {
            conf = merge(conf, {
                minify: {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true
                },
                chunksSortMode: 'dependency'
            })
        }
        arr.push(new HtmlWebpackPlugin(conf))
    })
        return arr
    }
