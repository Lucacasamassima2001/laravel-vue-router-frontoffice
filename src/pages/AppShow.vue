<script>
import axios from "axios";
export default {
  created() {
    // richiesta axios per i dati del post
    // axios
    //   .get(this.store.baseUrl + "api/portfolios/" + this.$route.params.id)
    //   .then((response) => {
    //     if (response.data.success) {
    //       this.portfolio = response.data.results;
    //     } else {
    //       // this.$router.push({ name: "page404" });
    //       this.is404 = true;
    //     }
    //   });
  },
};
</script>

<template>
  <h1>sono show</h1>
</template>

<style lang="scss" scoped></style>
