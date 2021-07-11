<template>
  <div class="create-task">
    <div class="create-task_blur" @click="closeCreateColumnForm">
    </div>
    <div class="create-task_form">
      <p>Создать новую колонку</p>
      <p>введите название колонки</p>

      <input name="columnName" id="columnName" type="text">

      <button>
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

}
</script>

<style lang="scss" scoped>
@import "src/layout/scss/forms/boards/createTask.scss";
</style>