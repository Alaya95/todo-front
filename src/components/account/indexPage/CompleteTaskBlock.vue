<template>
  <div class="bigBlock">
    <div class="title">
      <p>Завершенные задачи</p>
      <i class="fas fa-ellipsis-h"></i>
    </div>
    <!-- <div class="tusks"  v-bind:tasks="getTasksAll" v-if="getTasksAll.length"> -->
    <div v-if="completeTaskFunc().length" class="tusks" v-bind:tasks="completeTaskFunc()">
      <CompleteTask
          v-for="task in completeTaskFunc().slice(0,4)" :key="task.item"
          todo_prop.sync="task"
          v-bind:task="task"
          v-on:remove-task="removeTask"
      />
    </div>
    <div class="tusks" v-else>
    <p>Завершенных задач нет</p>
    </div>
  </div>
</template>

<script>
import CompleteTask from "./CompleteTask";
import {mapGetters} from "vuex";

export default {
  name: "CompleteTaskBlock",
  components: {
    CompleteTask,
  },
  methods: {
    completeTaskFunc() {
      let completeTask = this.getTasksAll.filter(function (item) {
        return item.task_status === '2';
      })
      return completeTask;
    },
    removeTask(id) {
      const data = {
        id: id
      }
      this.$store.dispatch('deleteTaskAll', data)
    },
    fetchTasks() {
      this.$store.dispatch('fetchTasksAll')
    },
  },
  mounted() {
    this.fetchTasks();
  },
  computed: {
    ...mapGetters([
      'getTasksAll',
    ]),
  },
};
</script>

<style scoped></style>
