<template>
      <div class="row">
        <TaskColumn/>
        <TaskColumn/>
        <TaskColumn/>
        <TaskColumn/>
        <TaskColumn/>
      </div>
</template>

<script>
import TaskColumn from "../components/account/boards/TaskColumn";

export default {
  name: "Board",
  components: {
    TaskColumn,
  }
}
</script>

<style lang="scss">
@import "../layout/scss/board.scss";
</style>