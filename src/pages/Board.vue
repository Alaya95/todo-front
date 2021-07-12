<template>
  <div class="account-content">
    <NavbarAccount />

    <div class="board">
      <TaskColumn v-for="column in getDesk" :key="column.id" :column="column" />
    </div>
  </div>
</template>

<script>
import TaskColumn from "../components/boards/TaskColumn";
import NavbarAccount from "../components/account/NavbarAccount";
import { mapGetters } from "vuex";

export default {
  name: "Board",
  components: {
    NavbarAccount,
    TaskColumn,
  },
  computed: {
    ...mapGetters(["getDesk"]),
  },
};
</script>

<style lang="scss">
@import "../layout/scss/board.scss";</style>
