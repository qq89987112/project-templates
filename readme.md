# 项目模板
    详细代码请查看对应的分支
    
## PC端项目
   - webstorm 热加载
   - webstorm scss编译

# 其他
## 缓存HTTP请求内容并作为MOCK使用 思路
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
                s = concat(function (text) {
                  apiCache[req.url] = JSON.parse(text.toString());
                  fs.writeFileSync(path.join(__dirname, "./api-cache.json"), JSON.stringify(apiCache), 'UTF-8');
                });
              if (~proxyRes.headers['content-encoding'].indexOf('gzip')) {
                let
                  zlib = require('zlib');
                  proxyRes.pipe(zlib.createGunzip()).pipe(s);
              } else {
                  proxyRes.pipe(s);
              }
            })
          };
          
    2.客户端通过mockjs、手动刷新,(热加载会有问题(刚请求了就给我刷新了？)) 读取JSON文件进行MOCK。
    3.需要刷新cache文件只要把mock关了即可。
    
    
### mock文件夹结构
    1. index.js
        import Mock from "mockjs"
        import mockData from "./mockData"
        mockData.forEach((item)=>{
          Mock.mock(item[0], function (options) {
            return item[1];
          });
        });
        
    2.mockData.js
        import Mock from "mockjs"
        export default [
          [/system\/configuration\/systemMessage\/find.+/,Mock.mock({
            "data|10": [
              {
                "content": "@cparagraph",
                "createTime": "@datetime",
                "id": "@id",
                "mainImage": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503734161&di=0596a87bf563b2c7b55fd4e82940675f&imgtype=jpg&er=1&src=http%3A%2F%2Fi.jianbihua.cc%2Fuploads%2Fallimg%2F160620%2F285-160620101R7.jpg",
                "status": "true",
                "subject": "@ctitle",
                "summary": "@cparagraph"
              },
            ]
          }).data],
          ["/api/office/im/load",require("./load")]
        ]
        
        
     3.other 其他json文件
