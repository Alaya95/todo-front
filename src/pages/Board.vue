<template>
  <div class="account-content">



    <NavbarAccount />

    <div class="board">
      <TaskColumn/>
      <TaskColumn/>
      <TaskColumn/>
      <TaskColumn/>
      <TaskColumn/>
      <TaskColumn/>
      <TaskColumn/>
      <TaskColumn/>
      <TaskColumn/>
      <TaskColumn/>
    </div>

  </div>


</template>

<script>
import TaskColumn from "../components/boards/TaskColumn";
import NavbarAccount from "../components/account/NavbarAccount";
import {mapGetters} from "vuex";
import router from "../router/router";

export default {
  name: "Board",
  components: {
    NavbarAccount,
    TaskColumn,
  },
  computed: {
    ...mapGetters([
      'getAuthStatus',
    ]),
  },
  methods: {
    redirect(){
      console.log(!this.getAuthStatus);
      !this.getAuthStatus && router.push({name: "main", path: "/"})
    }
  },
  mounted() {
    this.redirect();
  }
};
</script>

<style lang="scss">
@import "../layout/scss/board.scss";

</style>