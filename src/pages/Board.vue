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
import TaskColumn from "../components/account/boards/TaskColumn";
import NavbarAccount from "../components/account/NavbarAccount";

export default {
  name: "Board",
  components: {
    NavbarAccount,
    TaskColumn,
  }
}
</script>

<style lang="scss">
@import "../layout/scss/board.scss";
@import "../layout/scss/board.scss";
</style>