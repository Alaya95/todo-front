<template>
  <div>
    <!-- стандартная задача -->
    <div :id="task.id" :draggable="draggable" class="board-column_task" @dragend="dragEnd"
         @dragstart="dragStart" @dragover.prevent="setOrder(task.order)" @dragenter.prevent>
      <div class="task-title">
        <a href="#">{{ task.title }}</a>
        <a aria-current="page" class="" href="#">
          <i class="fas fa-ellipsis-h"></i>
        </a>
      </div>

      <div class="task-description">
        <p>
          {{ task.text }}
        </p>
      </div>

      <div class="task-info">
        <a href="#">
          <img
              alt=""
              class="rounded"
              height="48"
              src="https://github.com/mdo.png"
              width="48"
          />
        </a>

        <a aria-current="page" class="" href="#">
          <i class="far fa-comments"></i>
          <span class="">{{ task.comments }}</span>
        </a>

        <a aria-current="page" class="" href="#">
          <i class="fas fa-paperclip"></i>
          <span class="">{{ task.attachable }}</span>
        </a>

        <div class="task-info_status">
          <span class="">{{ task.status }}</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>


export default {
  name: "TaskInColumn",
  props: ["task", "draggable", "setOrder"],
  methods: {
    dragStart(e) {
      e.dataTransfer.dropEffect = "move";
      e.dataTransfer.effectAllowed = "move";
      const target = e.target;
      e.dataTransfer.setData("card_id", target.id);
      setTimeout(() => {
        target.style.opacity = "0.3";
      }, 0)
    },
    dragEnd(e) {
      e.target.style.opacity = "1";
    },
  },
};


</script>

<style scoped></style>
