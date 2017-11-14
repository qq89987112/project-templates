# 项目模板
    详细代码请查看对应的分支
    
## vue-mobile-template
    
## vue-wechat-template
- 创建测试号菜单
- 返回临时的 js-sdk 配置信息

    
    依旧使用vue-mobile-template,在build文件夹内添加wechat文件夹即可。

## 其他
### 缓存HTTP请求内容并作为MOCK使用 思路
    1.node服务器端利用onProxyRes事件缓存HTTP内容(无需使用filter过滤,客户端使用的是MOCK技术)
    2.客户端通过mockjs、热加载 读取JSON文件进行MOCK。