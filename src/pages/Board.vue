<template>
  <div class="account-content">
    <NavbarAccount />
    <div class="board">
      <TaskColumn v-for="column in getDesk" :key="column.id" :column="column" />
    </div>
  </div>
</template>

<script>
import NavbarAccount from "../components/account/NavbarAccount";
import TaskColumn from "../components/boards/TaskColumn";
import {mapGetters} from "vuex";


export default {
  name: "Board",
  components: {
    //CreateColumn,
    NavbarAccount,
    TaskColumn,
  },
  methods: {
    fetchDesk() {
      this.$store.dispatch('fetchDesk')
    },
  },
  mounted() {
    this.fetchDesk()
  },
  computed: {
    ...mapGetters(['getAuthStatus', "getDesk"]),
  },
};
</script>

<style lang="scss">
  @import "../layout/scss/board.scss";
</style>