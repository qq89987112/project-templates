let
    webpack = require("webpack"),
    webpackConfig = require('./webpack.production.config'),
    fse = require('fs-extra'),
    path = require('path');


    fse.removeSync(path.join(__dirname,'./dist'));
    webpack(webpackConfig,(err,stats)=>{
    });


