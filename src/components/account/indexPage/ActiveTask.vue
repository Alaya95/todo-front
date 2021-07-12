<template>
  <div class="card col-xs-6 col-xl-7 m-sm-2 m-xl-3">
    <div class="bigBlock">
      <div class="title">
        <p>Активные задачи</p>
        <i class="fas fa-ellipsis-h"></i>
      </div>
      <div class="tusks" v-bind:tasks="tasks">
        <!-- здесь откручиваем задачи  -->
        <Tasks
            v-for="task in tasks" :key="task.item"
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

export default {
  name: "ActiveTask",
  components: {Tasks},

  data(){
    return {
      tasks: [
        //{id: 1, title: 'Купить хлеб', completed: false},
        //{id: 2, title: 'Купить молоко', completed: false},
        //{id: 3, title: 'Купить дом', completed: false},
      ],
    }
  },
  methods: {
    removeTask(id){
      this.tasks = this.tasks.filter(t => t.id !== id)
    }

  },
  mounted() {
    fetch('http://127.0.0.1:8000/api/tasks')
    //fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(json =>
          console.log(json))
     // {
      //  this.tasks = json
      //})
    //console.log(this.tasks);
        .catch(error => console.log(error));
  },

}

</script>

<style scoped>

</style>