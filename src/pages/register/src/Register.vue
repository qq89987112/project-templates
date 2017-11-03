<template>
  <div class="register-page">
    <h1>快易销平台</h1>
    <div class="page-item">
      <p class="phone">手机号<input type="text" v-model="phone" placeholder="请正确填写手机号"><span @click="fetchCode">获取验证码</span></p>
      <p class="verify-code">验证码<input type="text" v-model="code" placeholder="请输入短信验证码"></p>
      <p class="sex">
        <span>性别</span>
        <label class="radio"><input  type="radio" v-model="sex" name="sex" value="男"><i>男</i></label>
        <label class="radio"><input type="radio" v-model="sex" name="sex" value="女"><i>女</i></label>
      </p>
    </div>
    <p class="register" @click="register">注册会员</p>
  </div>
</template>

<script>
  const phoneReg = /^13[\d]{9}$|^14[5,6,7,8,9]{1}\d{8}$|^15[^4]{1}\d{8}$|^16[6]{1}\d{8}$|^17[0,1,2,3,4,5,6,7,8]{1}\d{8}$|^18[\d]{9}$|^19[8,9]{1}\d{8}$/;
  import account from "../../../js/api/account";
  export default {
    name: 'register-page',
    components:{
    },
    data () {
      return {
        code:'',
        phone:'',
        sex:'男'
      }
    },
    methods:{
      formCheck(){
        let error = '';
        switch (true){
          case /d/.test(this.code):
            break;
          case !phoneReg.test(this.phone):
            error = '手机格式错误,请重新填写';
            break;
        }
        if(error){
          this.$toastError(error);
          return false;
        }
        return true;
      },
      fetchCode(){

      },
      register(){
        if(this.formCheck()){
            account.register({
              mobilePhone:this.phone,
              nickname:this.phone,
              "sex":this.sex==='男'?1:2,
              "openId":window.user.openId
            }).then((data)=>{
              console.log(data);
            }).catch(this.$toastErrorEx());
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
  .register-page{





    padding: R(26) R(20);
    h1{
      font-size:R(18);
      font-weight:bold;
      color:#444;
      padding-bottom:R(18);
    }
    .page-item{
      background-color: #fff;
      margin: 0 R(-20);
      padding:0 R(20);

      p+p{
        border-top:R(1) solid #f9f9f9;
      }
      p{
        line-height:R(60);
        font-size:R(15);
      }

      input{
        border: none;
        position: relative;
        top:-2px;
        margin-left:R(20);
        display: inline-block;
        width: R(180);

        &::placeholder{
          color: #ccc;
        }
      }

      .phone{

        span{
          display: inline-block;
          padding: R(5) R(10);
          line-height:R(18);
          border:R(1) solid #999;
          border-radius: R(5);
          font-size:R(12);

        }
      }
      .verify-code{

      }

      .sex{
        span{
          display: inline-block;
          width: 3em;
          text-align: right;
        }
        .radio{
          display: inline-block;
          input{
            visibility: hidden!important;
            width: 0!important;
            height: 0!important;
            &:checked{
              & ~ i{
                border: R(1) solid #a7b0b9;
              }
            }
          }
          i{
            padding: 0 R(8);
          }


        }
      }
    }
    .register{
      font-size:R(15);
      margin:0 R(-15);
      margin-top:R(30);
      text-align: center;
      background-color: #a7b0b9;
      color: white;
      line-height:36px;
    }
  }
</style>
