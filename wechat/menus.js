const BASE_URL = "http://192.168.1.240:8080";


// 先根据 https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5dec4882587fb612&redirect_uri=http://192.168.1.240:8080/ ....... 的格式跳转到后台,然后后台重定向到我的开发电脑上
//

module.exports ={
  "button":[
    {
      "name":"在线服务",
      "sub_button":[
        {
          "type": "view",
          "name": "申报安装",
          "url":`https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5dec4882587fb612&redirect_uri=${BASE_URL}/wechatRedirect/declareInstall&response_type=code&scope=snsapi_base&state=bind001#wechat_redirect`
          // "url":`https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5dec4882587fb612&redirect_uri=http://192.168.1.240:8080/wechatRedirect/declareInstall&response_type=code&scope=snsapi_base&state=bind001#wechat_redirect`
        },{
          "type": "view",
          "name": "申报维修",
          "url":`https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5dec4882587fb612&redirect_uri=${BASE_URL}/wechatRedirect/declareRepair&response_type=code&scope=snsapi_base&state=bind001#wechat_redirect`
          // "url":`https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5dec4882587fb612&redirect_uri=http://192.168.1.240:8080/wechatRedirect/declareRepair&response_type=code&scope=snsapi_base&state=bind001#wechat_redirect`
        },{
          "type": "view",
          "name": "服务记录",
          "url":`https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5dec4882587fb612&redirect_uri=${BASE_URL}/wechatRedirect/serviceRecord&response_type=code&scope=snsapi_base&state=bind001#wechat_redirect`
          // "url":`https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5dec4882587fb612&redirect_uri=http://192.168.1.240:8080/wechatRedirect/serviceRecord&response_type=code&scope=snsapi_base&state=bind001#wechat_redirect`
        }
      ]
    },
    {
      "name":"会员中心",
      "sub_button":[
        {
          "type": "view",
          "name": "会员注册",
          "url":`https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5dec4882587fb612&redirect_uri=${BASE_URL}/wechatRedirect/memberRegister&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect`
          // "url":`https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5dec4882587fb612&redirect_uri=http://192.168.1.240:8080/wechatRedirect/memberRegister&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect`
        },{
          "type": "view",
          "name": "个人中心",
          "url":`https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5dec4882587fb612&redirect_uri=${BASE_URL}/wechatRedirect/personalCenter&response_type=code&scope=snsapi_base&state=bind001#wechat_redirect`
          // "url":`https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5dec4882587fb612&redirect_uri=http://192.168.1.240:8080/wechatRedirect/personalCenter&response_type=code&scope=snsapi_base&state=bind001#wechat_redirect`
        },{
          "type": "view",
          "name": "消费记录",
          "url":`${BASE_URL}/service-record.html`
        },{
          "type": "view",
          "name": "积分商城",
          "url":`${BASE_URL}/service-record.html`
        }
      ]
    }
  ]
}
