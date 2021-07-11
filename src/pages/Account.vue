<template>
  <div class="account-content">

    <NavbarAccount />

    <IndexAccount v-show="true" />

  </div>
</template>

<script>
import NavbarAccount from "../components/account/NavbarAccount";
import IndexAccount from "../components/account/IndexAccount";
import {mapGetters} from "vuex";
import router from "../router/router";

export default {
  name: "Account",
  components: {
    IndexAccount,
    NavbarAccount,
  },
  computed: {
    ...mapGetters([
      'getAuthStatus',
    ]),
  },
  methods: {
    redirect(){
      !this.getAuthStatus && router.push({name: "main", path: "/"})
    }
  },
  mounted() {
    this.redirect();
  }
};
</script>

<style lang="scss">
@import "../layout/scss/account.scss";
</style>
