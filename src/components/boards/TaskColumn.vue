<template>

    <div class="board-column">

      <!-- здесь выводиться заголовок колонки и его мень, при нажатии на кнопку
       редактировать заголовок сменяет input где далее будет проводиться
       редактирование заголовка -->
      <div class="board-column_title">
        <p v-if='editTitleColumn'>Backlog</p>

        <input v-else type="text" name="columnName" value="Backlog">

        <button aria-current="page" href="#" @click="showColumnMenu = !showColumnMenu">
          <i class="fas fa-ellipsis-h"></i>
        </button>
      </div>

      <div v-show="showColumnMenu" class="board-column_menu">
        <button @click="editTitleColumn = !editTitleColumn ">Редактировать</button>
        <button>Удалить</button>
      </div>

      <TaskInColumn />
      <TaskInColumn />

      <div class="board-column_addTask">
        <button @click="openCreateTaskForm">
          <i class="fas fa-plus-square"></i>
          Добавить задачу
        </button>
      </div>

      <CreateTask v-show="openCreateTask" v-bind:closeCreateTaskForm="closeCreateTaskForm" />
    </div>

</template>

<script>
import TaskInColumn from "./TaskInColumn";
import CreateTask from "./forms/CreateTask";

export default {
  name: "TaskColumn",
  components: {CreateTask, TaskInColumn},
  data(){
    return {
      showColumnMenu: false,
      editTitleColumn: true,
      createTask: true,
      openCreateTask: false
    };
  },
  methods: {
    openCreateTaskForm() {
      console.log(123);
      this.openCreateTask = true;
    },
    closeCreateTaskForm() {
      this.openCreateTask = false;
    },
  }

}
</script>

<style scoped></style>