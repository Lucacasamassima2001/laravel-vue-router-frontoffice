<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppIndex from './components/AppIndex.vue';

export default {
  components:{
    AppHeader,
    AppFooter,
    AppIndex,
  }
}

</script>

<template>
  <AppHeader />
  <router-view></router-view>
  <AppFooter />
</template>



<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap";

</style>