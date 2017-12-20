const
    express = require('express'),
    webpack = require('webpack'),
    webpackConfig = require('../webpack.dev.config'),
    compiler = webpack(webpackConfig),
    app = express(),
    opn = require('express'),
    devMiddleware = require('webpack-dev-middleware')(compiler, {
        publicPath: "/",
        quiet: true
    }),
    hotMiddleware = require('webpack-hot-middleware')(compiler, {
        log: false,
        heartbeat: 2000
    })

app.use(hotMiddleware)
// serve webpack bundle output
app.use(devMiddleware)
app.use('/static', express.static('./static'))

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(()=>{
    require('portfinder').getPort((err,port)=>{
        let uri = 'http://localhost:' + port
        console.log('> Listening at ' + uri + '\n')
        opn(uri);
        app.listen(port)
    })
})