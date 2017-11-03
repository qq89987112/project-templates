<template>
  <div>
    <ul class="time-bar">
      <li class="time-item">全部记录</li>
      <li class="time-item">最近一个月</li>
      <li class="time-item">最近三个月</li>
      <li class="time-item">三个月前</li>
    </ul>
    <div class="order-box">
      <p><span class="orderNo">SJ8923798237</span><span class="status">交易完成</span></p>
      <ul class="product-list">
        <li class="product-item">
          <img src="" alt="">
          <p class="name">苏泊尔 <span class="price"></span></p>
          <p class="odel">型号：sk8368i3</p>
        </li>
      </ul>
      <p class="order-info">共3件商品,合计:&yen;517.00(含运费&yen;0.00)</p>
      <p class="buttons"><span class="button">删除订单</span><span class="button">查看物流</span></p>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">

</style>
