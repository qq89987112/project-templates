<template>
    <div class="score-detail-page">
      <ul class="tabs">
        <li class="tab">积分收入</li>
        <li class="tab">兑换记录</li>
      </ul>
      <ul class="tab-contents">
        <!--积分收入-->
        <li class="tab-content score-income">
            <div class="income-item">
              <p class="title">安装服务评价</p>
              <p class="time">2017-1018</p>
              <span class="score">+80</span>
            </div>
        </li>
        <!--兑换记录-->
        <li class="tab-content exchange-record">
          <div class="exchange-item">
            <p class="title">[兑换礼品]苏泊尔保温杯</p>
            <p class="time">2017-10-18</p>
            <span class="score">-688</span>
          </div>
        </li>
      </ul>
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

</style>
