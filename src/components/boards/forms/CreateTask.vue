<template>
  <div class="create-task">
    <div class="create-task_blur" @click="closeCreateTaskForm">
    </div>
    <div class="create-task_form">
      <p>Создать новую задачу</p>
      <label for="nameTask">Название задачи</label>
      <input name="nameTask" id="nameTask" type="text">
      <label for="descriptionTask">Описание задачи</label>
      <textarea id="descriptionTask" cols="30" name="descriptionTask" rows="8"></textarea>

      <label for="deadlineTask">Крайний срок сдачи</label>
      <input name="deadlineTask" id="deadlineTask" type="datetime-local">

      <label for="deadlineTask">Период</label>
      <input name="periodTask" id="periodTask" type="datetime-local">

      <label for="executorTask">Исполнитель</label>
      <input name="executorTask" id="executorTask" type="text">

      <label for="initiatorTask">Исполнитель</label>
      <input name="initiatorTask" id="initiatorTask" type="text">

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
  props: ['closeCreateTaskForm'],
  methods: {
    addTask() {
      this.fetchDesk();
      this.closeCreateTaskForm
    },
    createTask() {
      const data = {
        name: document.getElementById("nameTask").value, /* наименование задачи */
        description: document.getElementById("descriptionTask").value, /* описание задачи */
        deadline: document.getElementById("deadlineTask").value, /* дата завершения задачи */
        period: document.getElementById("periodTask").value, /* для повторяемых задач */
        executor_id: 1,
        initiator_id: 1,
        board_id:1,
        task_topics_id: 1,
        task_status: 1
      };
      store.dispatch('createTask', data)
    }
  },
  computed: {

  }

}
</script>

<style lang="scss" scoped>
@import "src/layout/scss/forms/boards/createTask.scss";
</style>