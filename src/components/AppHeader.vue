<script>
  import AppNav from './AppNav.vue';
  export default {
    components:{
      AppNav,
    }
  }
</script>

<template>
  <header class="bg-dark fixed-top">
    <h1 class="text-center text-light py-1">MixTales</h1>
    <AppNav />
  </header>
</template>

<style lang="scss" scoped>
  header {
    height: 5rem;
  }
</style>