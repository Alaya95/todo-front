<template>

  <div class="board-column" :id="column.id" @dragover.prevent @drop.prevent="drop" @dragenter.prevent>

    <!-- title колонки -->
    <div :draggable="false" class="board-column_title" >

      <p  v-if='editTitleColumn' :draggable="false">{{ column.title }}</p>
      <input v-else type="text" ref="columnName" name="columnName" :value="column.title">

      <!-- кнопка для выпадающего меню для последующего редактирования названия колонки -->
      <button @click="openMenu" :draggable="false" aria-current="page">
        <i class="fas fa-ellipsis-h"></i>
      </button>
    </div>

    <!-- выпадающее меню колонки -->
    <div v-show="isOpenMenu" class="board-column_menu">
      <button v-if="editTitleColumn" @click="editTitleColumn = !editTitleColumn ">Редактировать</button>
      <button v-else @click="editColumn">Изменить</button>
      <button @click="deleteColumn">Удалить</button>
    </div>

    <!-- рендер блоков с задачами -->
    <div  class="column-width">
      <TaskInColumn
          v-for="task in column.tasks"
          :key="task.id"
          :setOrder="setOrder"
          :task="task"
          draggable="true"
      />

      <!-- кнопка для создания задачи колонки -->
      <div  @click="openCreateTaskForm" :draggable="false"  class="board-column_addTask">
        <button :draggable="false" class="#">
          <i  :draggable="false" class="fas fa-plus-square"></i>
          Добавить задачу
        </button>
      </div>

      <CreateTask :id="column.id"  v-show="openCreateTask" :closeCreateTaskForm="closeCreateTaskForm" />

    </div>
  </div>
</template>

<script>
import TaskInColumn from "./TaskInColumn";
import CreateTask from "./forms/CreateTask";
export default {
  name: "TaskColumn",
  components: {
    CreateTask,
    TaskInColumn
  },
  props: ["column"],
  data: () => {
    return {
      order: 1,
      createTask: true,
      openCreateTask: false,

      /*j открытие и закрытие меню колонки */
      isOpenMenu: false,
      editTitleColumn: true,
    }
  },
  methods: {
    openMenu() {
      this.isOpenMenu = !this.isOpenMenu;
    },
    closeMenu() {
      this.isOpenMenu = false;
      this.editTitleColumn = true;
    },
    openCreateTaskForm() {
      this.openCreateTask = !this.openCreateTask;
    },
    closeCreateTaskForm() {
      this.openCreateTask = false;
    },
    setOrder(data) {
      this.order = data;
    },
    drop(e) {
      this.$store.dispatch("moveTask", {e, id: this.column.id, order: this.order});
    },
    editColumn() {
      const data = {
        board_id: 1,
        id: this.column.id,
        title: this.$refs.columnName.value
      };

      this.$store.dispatch('editColumn', data);

      this.closeMenu()
    },
    deleteColumn() {
      const data = {
        board_id: 1,
        id: this.column.id
      }
      this.$store.dispatch('deleteColumn', data)
      this.closeMenu()
    }
  },
};
</script>

<style scoped></style>
