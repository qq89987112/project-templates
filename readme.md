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
            
          // 可以在simple-componet 中看到源码
          // 生成的cache 可以供mockjs 使用(直接遍历即可)。
          // let apiCache = require("./api-cache.json");
          app.get("/api-cache", function (req, res) {
            res.write(JSON.stringify(apiCache));
            res.end();
          });
          options.onProxyRes = function (proxyRes, req, res) {
            res.on('pipe', (data) => {
              let
                fs = require("fs"),
                concat = require('concat-stream'),
                zlib = require('zlib'),
                gzipStream = zlib.createGunzip(),
                gziped = proxyRes.pipe(gzipStream),
        
                s = concat(function (text) {
                  apiCache[req.url] = JSON.parse(text.toString());
                  fs.writeFileSync(path.join(__dirname, "./api-cache.json"), JSON.stringify(apiCache), 'UTF-8');
                  gziped.unpipe(s);
                  proxyRes.unpipe(gzipStream);
                });
              gziped.pipe(s);
            })
          };
    2.客户端通过mockjs、手动刷新,(热加载会有问题(刚请求了就给我刷新了？)) 读取JSON文件进行MOCK。