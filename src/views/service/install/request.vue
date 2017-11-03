<template>
  <div class="request-install-page">
    <div class="page-item brand">
      <p class="title">产品品牌<span>(必填)</span><i class="iconfont icon-right"></i></p>
      <input type="text" placeholder="可 扫描产品型号 以自动补充 ↓">
    </div>

    <div class="page-item classify">
      <p class="title">产品分类<span class="request">(必填)</span><i class="iconfont icon-right"></i></p>
      <input type="text" placeholder="可 扫描产品型号 以自动补充 ↓">
    </div>

    <div class="page-item model">
      <p class="title">产品型号<i class="iconfont icon-right"></i></p>
      <p class="input-wrapper"><input type="text" placeholder="可 手动输入型号"><i class="iconfont icon-erweima"></i></p>
    </div>

    <div class="page-item comment">
      <p class="title">备注</p>
      <textarea placeholder="可填写对安装服务的要求">

        </textarea>
    </div>

    <div class="page-item time">
      <p class="title">预约服务时间<span class="request">必填</span><i class="iconfont icon-right"></i></p>
      <input type="text" placeholder="请选择日期">
    </div>

    <div class="page-item address">
      <p class="title">服务地址<span class="request">必填</span><i class="iconfont icon-right"></i></p>
      <input type="text" placeholder="请选择服务地址">
    </div>

    <div class="page-item env">
      <p class="title">{{maintain === undefined ? '安装环境' : '维修环境'}}<span class="placeholder">最多上传3张照片</span></p>
      <ul class="pic-select-box">
        <li class="pic">
          <img :src="" alt="">
        </li>
        <li class="add"></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: ["maintain"],
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
  .request-install-page {

  }
</style>
