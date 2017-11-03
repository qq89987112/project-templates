import './qrcode'
import eruda from 'eruda'
import './mockjs'
var _ = require('./eustia')._
if (_.isMobile()) {
  require('./qrcode/hide.scss')
  eruda.init()
}

//  修改 dev.conf.js
//  //使用二维码
//    var ip = require('quick-local-ip').getLocalIP4()
//    new webpack.DefinePlugin({
//      'process.localip': `"${ip}"`
//    })
//
//  //编辑入口
//    entry:{dev:"./src/js/config/dev.js"},
//
//

// 解决开发时，移动端浏览器跨域问题
// proxyTable 代理
// config/index.js
// module.exports = {
//   // ...
//   dev: {
//     proxyTable: {
//       // proxy all requests starting with /api to jsonplaceholder
//       '/api': {
//         target: 'http://jsonplaceholder.typicode.com',
//         changeOrigin: true,
//         pathRewrite: {
//           '^/api': ''
//         }
//       }
//     }
//   }
// }
// The above example will proxy the request /api/posts/1 to http://jsonplaceholder.typicode.com/posts/1.

// 使用正则匹配
// proxyTable: {
//   '**': {
//     target: 'http://jsonplaceholder.typicode.com',
//       filter: function (pathname, req) {
//       return pathname.match('^/api') && req.method === 'GET'
//     }
//   }
// }

// 需要代理的api没有前缀的解决方法
//
// axios.defaults.baseURL = _user.url;
//
//
//
