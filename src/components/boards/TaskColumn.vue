<template>

  <div class="board-column" :id="column.id" @dragover.prevent @drop.prevent="drop" @dragenter.prevent>
    <div class="board-column_title" >
      <p :draggable="false">{{ column.title }}</p>
      <button :draggable="false" aria-current="page">
        <i class="fas fa-ellipsis-h"></i>
      </button>
    </div>

    <div  class="column-width">
      <TaskInColumn
          v-for="task in column.tasks"
          :key="task.id"
          :setOrder="setOrder"
          :task="task"
          draggable="true"
      />

      <div class="board-column_addTask">
        <a :draggable="false" class="#">
          <i  :draggable="false" class="fas fa-plus-square"></i>
          Добавить задачу
        </a>
      </div>


    </div>


  </div>
</template>

<script>
import TaskInColumn from "./TaskInColumn";

export default {
  name: "TaskColumn",

  components: {TaskInColumn},
  props: ["column"],
  data: () => {
    return {
      order: 1,
    }
  },
  methods: {

    setOrder(data) {
      this.order = data;

    },
    drop(e) {
      this.$store.dispatch("moveTask", {e, id: this.column.id, order: this.order});
    }
  },
};
</script>

<style scoped></style>
