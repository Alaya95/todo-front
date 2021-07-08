<template>
  <div class="create-task">
    <div class="create-task_blur" @click="closeCreateTaskForm">
    </div>
    <div class="create-task_form">
      <p>Создать новую задачу</p>
      <input type="text">
      <textarea id="descriptionTask" cols="30" name="description" rows="8"></textarea>
      <button @click="closeCreateTaskForm">
        Добавить задачу
      </button>
    </div>


  </div>
</template>

<script>
export default {
  name: "CreateTask",
  props: ['closeCreateTaskForm']

}
</script>

<style lang="scss" scoped>
@import "src/layout/scss/forms/boards/createTask.scss";
</style>