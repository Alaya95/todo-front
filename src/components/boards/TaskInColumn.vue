<template>
  <div>
    <!-- стандартная задача -->
    <div :id="task.id" :draggable="draggable" class="board-column_task" @dragend="dragEnd"
         @dragstart="dragStart" @dragover.prevent="setOrder(task.order)" @dragenter.prevent>
      <div class="task-title">
        <a :draggable="false"  href="#">{{ task.title }}</a>
        <a aria-current="page" class="" :draggable="false">
          <i class="fas fa-ellipsis-h"></i>
        </a>
      </div>

      <div class="task-description">
        <p>
          {{ task.text }}
        </p>
      </div>

      <div class="task-info">
        <a :draggable="false" href="#">
          <img :draggable="false"
          alt=""
              class="rounded"
              height="48"
              src="https://github.com/mdo.png"
              width="48"
          />
        </a>

        <a :draggable="false" aria-current="page" class="" href="#">
          <i class="far fa-comments"></i>
          <span class="">{{ task.comments }}</span>
        </a>

        <a :draggable="false" aria-current="page" class="" href="#">
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

      /*dataTransfer = используется для хранения данных, перетаскиваемых мышью во время операции drag and drop.
      * dropEffect = Для событий dragenter и dragover, dropEffect будет инициализировано значением, зависящим от того, какое действие запрашивает пользователь.
      * move - перемещение элемента в новое место
      * */
      e.dataTransfer.dropEffect = "move";

      /*
      effectAllowed - Определяет эффекты, которые разрешены для этого перетаскивания.
      move: Элемент может быть перемещён в новое место.
       */
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