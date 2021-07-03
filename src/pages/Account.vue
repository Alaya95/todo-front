<template>
  <main>
    <h1 class="visually-hidden">Sidebars examples</h1>

    <NavbarAccount/>

    <div class="b-example-divider"></div>

    <IndexAccount v-show="true"/>

  </main>
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