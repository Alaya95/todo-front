<template>
  <div class="card col-xs-6 col-xl-4 m-sm-2 m-xl-3">
    <div class="bigBlock">

      <div class="title">
        <p>Завершенные задачи</p>
        <i class="fas fa-ellipsis-h"></i>
      </div>
      <div class="tusks"  v-bind:tasks="tasks">
        <CompleteTask
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
import CompleteTask from "./CompleteTask";
export default {
  name: "CompleteTaskBlock",
  components: {
    CompleteTask,
  },
  data(){
    return {
      tasks: [
        {id: 1, title: 'Вымыть окна', completed: true},
        {id: 2, title: 'Найти работу', completed: true},
        {id: 3, title: 'Отвезти собаку на прививку', completed: true},
      ],
    }
  },
  methods: {
    removeTask(id){
      this.tasks = this.tasks.filter(t => t.id !== id)
      //console.log(this.tasks);
    }
  },
  mounted() {
    //fetch('http://127.0.0.1:8000/api/tasks?_limit=5')
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=4')
        .then(response => response.json())
        .then(json =>
            //  console.log(json))
        {
          this.tasks = json
        })
   // console.log(this.tasks);
  },
};
</script>

<style scoped></style>
