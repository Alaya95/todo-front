<template>
  <div class="create-task">
    <div class="create-task_blur" @click="closeCreateTaskForm">
    </div>
    <div class="create-task_form">
      <p>Создать новую задачу</p>
      <label :for='("nameTask" + id )'>Название задачи</label>
      <input :id='("nameTask" + id )' ref="nameTask" name="nameTask" type="text">

      <label :for='("descriptionTask" + id )'>Описание задачи</label>
      <textarea :id='("descriptionTask" + id )' ref="descriptionTask" cols="30" name="descriptionTask" rows="8"></textarea>

      <label :for='("deadlineTask" + id )'>Крайний срок сдачи</label>
      <input :id='("deadlineTask" + id )' ref="deadlineTask" name="deadlineTask" type="datetime-local">

      <label :for='("deadlineTask" + id )'>Период</label>
      <input :id='("periodTask" + id )' ref="periodTask" name="periodTask" type="datetime-local">

      <button @click="createTask">
        Добавить задачу
      </button>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "CreateTask",
  props: [
    'closeCreateTaskForm',
    'id'
  ],
  methods: {
    createTask() {
      const data = {
        column_id: this.id,
        name: this.$refs.nameTask.value,
        description: this.$refs.descriptionTask.value,
        deadline: this.$refs.deadlineTask.value,
        period: this.$refs.periodTask.value,
        board_id: 1,
        executor_id: this.getUserData.id,
        initiator_id: this.getUserData.id,
        task_topics_id: 1,
        task_status: 1
      };
      this.$store.dispatch('createTask', data)
      this.closeCreateTaskForm()
    }
  },
  computed: {
    ...mapGetters([
      'getUserData'
    ])
  }
}
</script>

<style lang="scss" scoped>
@import "src/layout/scss/forms/boards/createTask.scss";
</style>