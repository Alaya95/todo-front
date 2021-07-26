<template>
  <div class="content">

    <Navbar />

    <IndexAccount v-show="true" />

  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import IndexAccount from "../components/account/IndexAccount";


export default {
  name: "Account",
  components: {
    IndexAccount,
    Navbar,
  },
}
</script>

<style lang="scss">
  @import "../layout/scss/account.scss";
</style>
