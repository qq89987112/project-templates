<template>
  <div class="address-set-page">
    <p class="concat"><span>联系人</span><input v-model="concat" type="text" placeholder="姓名"></p>
    <p class="phone"><span>手机号码</span><input v-model="phone" type="text" placeholder="11位手机号"></p>
    <p class="area"><span>选择地区</span><input v-model="area" type="text" placeholder="地区信息"></p>
    <p class="details"><span>详细地址</span><input v-model="details" type="text" placeholder="街道门牌信息"></p>
    <p class="complete" @click="complete">完成</p>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        concat: '',
        phone: '',
        area: '',
        details: ''
      }
    },
    methods: {
      fromCheck(){
        let error = '';
        switch (true){
          case /d/.test(this.concat):
           error = '';
            break;
          case /d/.test(this.phone):
            error = '';
            break;
          case /d/.test(this.area):
            error = '';
            break;
          case /d/.test(this.details):
            error = '';
            break;
        }
        if(error){
//          this.$toast(error);
          return false;
        }
        return true;
      },
      complete () {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
  .address-set-page {
    .concat {

    }
    .phone {

    }
    .area {

    }
    .details {

    }
    .complete{

    }
  }

</style>
