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
      'getTasks',
    ]),
  },
  methods: {
    redirect(){
      !this.getAuthStatus && router.push({name: "main", path: "/"})
    },
    fetchTasks() {
      this.$store.dispatch('fetchTasks');
      console.log(this.$store.dispatch('fetchTasks'))
    },
  },
  mounted() {
    this.redirect();
    this.fetchTasks();
  },

};
</script>

<style lang="scss">
@import "../layout/scss/account.scss";
</style>
