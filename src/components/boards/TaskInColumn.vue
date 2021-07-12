<template>
  <div >
    <!-- стандартная задача -->
    <div :id="task.id" :draggable="draggable" @dragend="dragEnd" @dragstart="dragStart" @dragover.prevent="setOrder(task.order)" @dragenter.prevent class="board-column_task">
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
            src="https://githut.com/mdo.png"
            width="48"
          />
        </a>

        <a href="#" aria-current="page" class="">
          <i class="far fa-comments"></i>
          <span class="">{{ task.comments }}</span>
        </a>

        <a href="#" aria-current="page" class="">
          <i class="fas fa-paperclip"></i>
          <span class="">{{ task.attachable }}</span>
        </a>

        <div class="task-info_status">
          <span class="">{{ task.status }}</span>
        </div>
      </div>
    </div>

    <!-- стандартная задача с картинкой -->
    <!--<div class="board-column_task">
       <div class="task-title">
        <a href="#">Название подзадачи</a>
        <a aria-current="page" class="" href="#">
          <i class="fas fa-ellipsis-h"></i>
        </a>
      </div>

      <div class="task-description">
        <p>
          Тут допустим будет написано описание задачи или вывод фото. можно
          просто вывести здесь статусы. нужно основательно подумать что мы хотим
          тут увидеть
        </p>
      </div>

      <div class="task-image">
        <a href="#">
          <img src="../../../assets/13.png" alt="doc" />
        </a>
      </div>

      <div class="task-info">
        <a href="#">
          <img
            alt=""
            class="rounded"
            height="48"
            src="https://githut.com/mdo.png"
            width="48"
          />
        </a>

        <a href="#" aria-current="page" class="">
          <i class="far fa-comments"></i>
          <span class="">99+</span>
        </a>

        <a href="#" aria-current="page" class="">
          <i class="fas fa-paperclip"></i>
          <span class="">5+</span>
        </a>

        <div class="task-info_status">
          <span class="">Статус</span>
        </div>
      </div>
    </div>-->

    <!--


--></div>
</template>

<script>
export default {
  name: "TaskInColumn",
  props: ["task", "draggable", "setOrder"],
  methods: {
    dragStart(e){
      e.dataTransfer.dropEffect="move";
      e.dataTransfer.effectAllowed="move";
      const target = e.target;
      e.dataTransfer.setData("card_id", target.id);
      setTimeout(()=>{
        target.style.opacity="0.3";
      }, 0)
    },
    dragEnd(e){
      e.target.style.opacity = "1";
    },
  },
};
</script>

<style scoped></style>
