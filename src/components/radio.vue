<template>
    <label class="radio-component">
      <input type="radio">
      <i class="iconfont" :class="[value===name?'icon-radio2':'icon-singleboxico']"></i>
    </label>
</template>
<script>
    export default {
        name: 'register-page',
        props:{
          value:undefined,
          name:''
        },
        data() {
            return {
                curName:this.value
            }
        },
        methods: {

        },
        created() {

        }
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.radio-component{

}
</style>
