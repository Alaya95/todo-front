<template>
  <div class="create-task">
    <div class="create-task_blur" @click="closeCreateTaskForm">
    </div>
    <div class="create-task_form">
      <p>Создать новую задачу</p>
      <label v-bind:for='("nameTask" + id )'>Название задачи</label>
      <input  v-bind:id='("nameTask" + id )' ref="nameTask" name="nameTask" type="text">

      <label v-bind:for='("descriptionTask" + id )'>Описание задачи</label>
      <textarea v-bind:id='("descriptionTask" + id )' ref="descriptionTask" cols="30" name="descriptionTask" rows="8"></textarea>

      <label v-bind:for='("deadlineTask" + id )'>Крайний срок сдачи</label>
      <input v-bind:id='("deadlineTask" + id )' ref="deadlineTask" name="deadlineTask" type="datetime-local">

      <label v-bind:for='("deadlineTask" + id )'>Период</label>
      <input v-bind:id='("periodTask" + id )' ref="periodTask" name="periodTask" type="datetime-local">

      <button @click="createTask">
        Добавить задачу
      </button>
    </div>
  </div>
</template>

<script>
import store from "../../../store/store";

export default {
  name: "CreateTask",
  props: [
    'closeCreateTaskForm',
    'id'
  ],
  methods: {
    //addTask() {
    //  this.fetchDesk();
    //  this.closeCreateTaskForm
    //},
    createTask() {
      const data = {
        name: document.getElementById( this.$refs.nameTask.id ).value,
        description: document.getElementById( this.$refs.descriptionTask.id ).value,
        deadline: document.getElementById( this.$refs.deadlineTask.id ).value,
        period: document.getElementById( this.$refs.periodTask.id ).value,
        executor_id: 1,
        initiator_id: 1,
        board_id: 1,
        task_topics_id: 1,
        task_status: 1
      };
      store.dispatch('createTask', data)
    }
  },
}
</script>

<style lang="scss" scoped>
@import "src/layout/scss/forms/boards/createTask.scss";
</style>