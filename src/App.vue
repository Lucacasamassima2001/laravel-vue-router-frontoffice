<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';


export default {
  components:{
    AppHeader,
    AppFooter,
  }
}

</script>

<template>
  <AppHeader />
  <div class="container-fluid">
    <router-view></router-view>
  </div>
  <AppFooter />
</template>



<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap";

</style>