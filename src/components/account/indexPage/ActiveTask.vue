<template>
  <div class="card col-xs-6 col-xl-7 m-sm-2 m-xl-3">
    <div class="bigBlock">
      <div class="title">
        <p>Активные задачи</p>
        <i class="fas fa-ellipsis-h"></i>
      </div>
      <div class="tusks" v-bind:tasks="getTasks">
        <!-- здесь откручиваем задачи  -->
        <Tasks
            v-for="task in getTasks" :key="task.item"
            todo_prop.sync="task"
            v-bind:task="task"

            v-on:remove-task="removeTask"
        />
      </div>
    </div>
  </div>

</template>
<script>
import Tasks from "./Tasks";
import {mapGetters} from "vuex";
export default {
  name: "ActiveTask",
  components: {Tasks},
  methods: {
    removeTask(id) {
      this.tasks = this.tasks.filter(t => t.id !== id)
    },
    fetchTasks() {
      this.$store.dispatch('fetchTasks');
    },
  },
  mounted() {
    this.fetchTasks();
  },
  computed: {
    ...mapGetters([
      'getTasks',
    ]),
  },

}

</script>

<style scoped>

</style>