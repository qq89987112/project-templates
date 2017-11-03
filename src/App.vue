<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss" rel="stylesheet/scss">
#app{
  font-size: R(15);
  user-select: none;
  input{
    border:none;
    position: relative;
    top: R(-2);

    &::placeholder{
      color: #d5d5d5;
      font-size:R(14);
    }
  }
}
</style>
