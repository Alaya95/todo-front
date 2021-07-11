<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
// import Index from "./pages/Index";
// import Account from "./pages/Account";
// import Board from "./pages/Board";
import Header from "./components/Header";
import router from "./router/router"

import {mapGetters} from "vuex";
export default {
  name: "App",
  components: {
    Header,
  },
  mounted() {
    this.loginByToken();
  },
  methods: {
    loginByToken() {
      this.$store.dispatch("loginByToken");
    },
  },
  computed: {
    ...mapGetters([
      'getAuthStatus',
    ]),
  },
  watch: {
    getAuthStatus: function ( newVal){
        newVal && router.push("account");
    }
  }
};
</script>
