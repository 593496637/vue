<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'app'
  }
</script>
<style lang="scss" type="text/scss" rel="stylesheet/scss">
  @import 'assets/scss/main';

  .fade-enter-active,
  .fade-leave-active {
    transition: all .2s ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
</style>
