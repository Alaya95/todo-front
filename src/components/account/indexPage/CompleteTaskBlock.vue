<template>
  <div class="card col-xs-6 col-xl-4 m-sm-2 m-xl-3">
    <div class="bigBlock">

      <div class="title">
        <p>Завершенные задачи</p>
        <i class="fas fa-ellipsis-h"></i>
      </div>
     <!-- <div class="tusks"  v-bind:tasks="getTasksAll" v-if="getTasksAll.length"> -->
      <div class="tusks"  v-bind:tasks="completeTaskFunc()" v-if="completeTaskFunc().length">
        <CompleteTask
            v-for="task in completeTaskFunc().slice(0,4)" :key="task.item"
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
  data() {
    return {
      //completeTask: [],

    }
  },
  methods: {

    completeTaskFunc(){
      //this.completeTask = this.getTasksAll.filter(function(item){
      let completeTask = this.getTasksAll.filter(function(item){
        return item.task_status === '2';
      })
      return completeTask;
    },


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
