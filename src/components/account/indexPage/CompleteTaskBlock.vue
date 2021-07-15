<template>
  <div class="card col-xs-6 col-xl-4 m-sm-2 m-xl-3">
    <div class="bigBlock">

      <div class="title">
        <p>Завершенные задачи</p>
        <i class="fas fa-ellipsis-h"></i>
      </div>
      <div class="tusks"  v-bind:tasks="getTasksAll" v-if="getTasksAll.length">
        <CompleteTask
            v-for="task in getTasksAll.slice(0,4)" :key="task.item"
            todo_prop.sync="task"
            v-bind:task="task"
            v-on:remove-task="removeTask"
        />
      </div>
      <p v-else>Завершенных задач нет</p>
    </div>
  </div>
</template>

<script>
import CompleteTask from "./CompleteTask";
import {mapGetters} from "vuex";
import store from "@/store/store";
export default {
  name: "CompleteTaskBlock",
  components: {
    CompleteTask,
  },
  methods: {
    removeTask(id) {
      const data =  {
        id: id
      }
      //this.getTasks = this.getTasks.filter(t => t.id !== id)
      store.dispatch('deleteTaskAll', data)
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
