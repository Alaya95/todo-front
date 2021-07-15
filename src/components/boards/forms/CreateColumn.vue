<template>
  <div class="create-task">
    <div class="create-task_blur" @click="closeCreateColumnForm">
    </div>
    <div class="create-task_form">
      <p>Создать новую колонку</p>
      <p>введите название колонки</p>

      <input id="columnName" ref="columnName" name="columnName" type="text">

      <button @click="createColumn">
        создать колонку
      </button>

    </div>
  </div>
</template>

<script>
//import store from "../../../store/store";

export default {
  name: "CreateColumn",
  props: ['closeCreateColumnForm'],
  methods: {
    createColumn() {
      const data = {
        board_id: 1,
        title: this.$refs.columnName.value
      };

      this.$store.dispatch('createColumn', data)

      this.closeCreateColumnForm()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/layout/scss/forms/boards/createTask.scss";
</style>