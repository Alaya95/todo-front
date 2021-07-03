<template>
  <div class="account-content">



    <NavbarAccount/>

    <div class="b-example-divider"></div>

    <IndexAccount v-show="true"/>

  </div>
</template>

<script>
import NavbarAccount from "../components/account/NavbarAccount";
import IndexAccount from "../components/account/IndexAccount";

export default {
  name: 'Account',
  components: {
    IndexAccount,
    NavbarAccount
  }
}
</script>

<style lang="scss">

@import "../layout/scss/account.scss";

</style>