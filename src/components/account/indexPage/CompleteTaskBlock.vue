<template>
  <div class="card col-xs-6 col-xl-4 m-sm-2 m-xl-3">
    <div class="bigBlock">

      <div class="title">
        <p>Завершенные задачи</p>
        <i class="fas fa-ellipsis-h"></i>
      </div>
      <div class="tusks"  v-bind:tasks="getTasks">
        <CompleteTask
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
import CompleteTask from "./CompleteTask";
import {mapGetters} from "vuex";
import store from "@/store/store";
export default {
  name: "CompleteTaskBlock",
  components: {
    CompleteTask,
  },
  data(){
    return {
      //tasks: [
        //{id: 1, title: 'Вымыть окна', completed: true},
        //{id: 2, title: 'Найти работу', completed: true},
       // {id: 3, title: 'Отвезти собаку на прививку', completed: true},
     // ],
    }
  },
  methods: {
    removeTask(id) {
      const data =  {
        id: id
      }
      //this.getTasks = this.getTasks.filter(t => t.id !== id)
      store.dispatch('deleteTask', data)
    },
    
    fetchTasks() {
      this.$store.dispatch('fetchTasks')
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

};
</script>

<style scoped></style>
