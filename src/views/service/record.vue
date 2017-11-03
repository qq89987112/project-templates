<template>
    <div class="service-record-page">
      <ul class="tabs">
        <li class="tab">未完成服务</li>
        <li class="tab">已完成服务</li>
      </ul>

      <div class="tab-contents">
        <div class="tab-content uncompleted">
          <p class="title">安装服务<span class="small">2017.10.17</span><span class="status">受理中</span><i class="iconfont icon-right"></i>
          <p class="time">预约<span>2017年 9月13日</span></p>
          <p class="address">地址<span>广东省深圳市普盛事业有限公司</span></p>
        </div>
        <div class="tab-content completed">
          <p class="title">安装服务<span class="small">2017.10.17</span><span class="status">受理中</span><i class="iconfont icon-right"></i>
          <p class="time">预约<span>2017年 9月13日</span></p>
          <p class="address">地址<span>广东省深圳市普盛事业有限公司</span></p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
.service-record-page{

}
</style>
