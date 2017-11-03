const
      wechat  = require('./src/wechat'),
       config = require('./config');//引入配置文件


module.exports = function (app) {


	// 最主要还是sign 接口 和 menu  生成
	//

	var wechatApp = new wechat(config); //实例wechat 模块

	// //用于处理所有进入 3000 端口 get 的连接请求
	// app.get('/',function(req,res){
	//     wechatApp.auth(req,res);
	// });

	// //用于处理所有进入 3000 端口 post 的连接请求
	// app.post('/',function(req,res){
	//     wechatApp.handleMsg(req,res);
	// });

	// //用于请求获取 access_token
	// app.get('/getAccessToken',function(req,res){
	//     wechatApp.getAccessToken().then(function(data){
	//         res.send(data);
	//     });
	// });

  // //用于临时获取签名
  app.get('/sign',function(req,res){
      wechatApp.sign(req.query.url).then(function(data){
          res.send(data);
      });
  });
};
