<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header";
import router from "./router/router";

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
    redirect(name = "main"){
      this.$route.name!==name && router.push({name});  
    }
  },
  computed: {
    ...mapGetters([
      'getAuthStatus',
    ]),
  },
  watch: {
    getAuthStatus: function (newVal){
      console.log(123);
      newVal ? this.redirect(localStorage.getItem("route")) : this.redirect();
    },
    "$route.name": function(newVal){
      console.log(123);
      this.getAuthStatus ? localStorage.setItem("route", newVal) : this.redirect();
    }
  }
};
</script>
