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

export default {
  name: "Account",
  components: {
    IndexAccount,
    NavbarAccount,
  },
  computed: {
    ...mapGetters([
      'getTasks',
    ]),
  },
  methods: {
    fetchTasks() {
      this.$store.dispatch('fetchTasks');
      console.log(this.$store.dispatch('fetchTasks'))
    },
  },
  mounted() {
    this.fetchTasks();
  }
}
</script>

<style lang="scss">
@import "../layout/scss/account.scss";
</style>
