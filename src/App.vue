<script>
import AppHeader from './components/AppHeader.vue';
import AppIndex from './components/AppIndex.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components:{
    AppHeader,
    AppIndex,
    AppFooter,
  }
}
</script>



<template>
  <AppHeader></AppHeader>
  <AppIndex></AppIndex>
  <AppFooter></AppFooter>

</template>



<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap";

</style>