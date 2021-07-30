<template>
  <div class="bigBlock card">
    <div class="title">
      <p>Срок для завершения задачи истекает</p>
      <i class="fas fa-ellipsis-h"></i>
    </div>
    <div v-if="getTasksAll.length" class="tusks" v-bind:tasks="getTasksAll">
      <!-- здесь откручиваем задачи  сделать скрол -->
      <Tasks
          v-for="task in getTasksAll.slice(0,4)"
          :key="task.item"
          todo_prop.sync="task"
          v-bind:task="task"
          v-on:remove-task="removeTask"
      />
    </div>
    <p v-else>Активных задач нет</p>
  </div>
</template>

<script>
import Tasks from "./Tasks";
import {mapGetters} from "vuex";
import store from "../../../store/store";

export default {
  name: "ActiveTask",
  components: {Tasks},
  methods: {
    removeTask(id) {
      const data = {id: id}
      store.dispatch('deleteTaskOne', data)
    },
    fetchTasksAll() {
      this.$store.dispatch('fetchTasksAll');
    },
  },
  mounted() {
    this.fetchTasksAll();
  },
  computed: {
    ...mapGetters(['getTasksAll',]),
  }
}

</script>
<style scoped></style>