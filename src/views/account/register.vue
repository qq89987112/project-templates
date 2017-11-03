<template>
  <div class="register-page">
    <h1>快易销管理平台</h1>
    <p class="phone">手机号<input type="text" v-model="phone" placeholder="请输入正确的手机号码"><span @click="fetchCode">获取验证码</span></p>
    <p class="verify-code"><input type="text" v-model="code" placeholder="请输入短信验证码"></p>
    <p class="register" @click="register">注册会员</p>
  </div>
</template>

<script>
  export default {
    name: 'register-page',
    data () {
      return {
        code:'',
        phone:''
      }
    },
    methods:{
      formCheck(){
        let error = '';
        switch (true){
          case /d/.test(this.code):
            break;
          case /d/.test(this.phone):
            break;
        }
        if(error){

          return false;
        }
        return true;
      },
      fetchCode(){

      },
      register(){
        if(this.formCheck()){

        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
  .register-page{

    .phone{
      height:R(20);
    }
    .verify-code{

    }
    .register{

    }
  }
</style>
