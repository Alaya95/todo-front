<template>
  <div class="board-column">
    <div class="board-column_title">
      <p class="">{{ column.title }}</p>
      <a aria-current="page" class="" href="#">
        <i class="fas fa-ellipsis-h"></i>
      </a>
    </div>

    <div :id="column.id" @dragover.prevent @drop.prevent="drop" @dragenter.prevent>
        <TaskInColumn
          :setOrder="setOrder"
          draggable="true"
          v-for="task in column.tasks"
          :task="task"
          :key="task.id"
        />

    </div>    
    <div class="board-column_addTask">
      <a class="#">
        <i class="fas fa-plus-square"></i>
        Добавить задачу
      </a>
    </div>
  </div>
</template>

<script>
import TaskInColumn from "./TaskInColumn";

export default {
  name: "TaskColumn",
  components: { TaskInColumn },
  props: ["column"],
  mounted() {
    console.log(this.column);
  },
  data:()=>{
    return{
      order: 1,
    }
  },
  methods: {
    setOrder (data){
      this.order=data;
    },
    drop(e){
      console.log(this.column.id)
      this.$store.dispatch("moveTask", {e, id: this.column.id, order: this.order});
    }
  },
};
</script>

<style scoped></style>
