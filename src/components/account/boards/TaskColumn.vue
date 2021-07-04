<template>

    <div class="board-column">

      <div class="board-column_title">
        <p class="">Backlog</p>
        <a aria-current="page" class="" href="#">
          <i class="fas fa-ellipsis-h"></i>
        </a>
      </div>



      <!-- стандартная задача-->
      <div class="board-column_task">
        <div class="task-title">
          <a href="#">Название подзадачи</a>
          <a aria-current="page" class="" href="#">
            <i class="fas fa-ellipsis-h"></i>
          </a>
        </div>
        <div class="task-info">
          <a href="#">
            <img alt="" class="rounded" height="48" src="https://githut.com/mdo.png" width="48">
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
      </div>

      <!-- стандартная задача с описанием-->
      <div class="board-column_task">
        <div class="task-title">
          <a href="#">Название подзадачи</a>
          <a aria-current="page" class="" href="#">
            <i class="fas fa-ellipsis-h"></i>
          </a>
        </div>

        <div class="task-description">
          <p>
            Тут допустим будет написано описание задачи или вывод фото.
            можно просто вывести здесь статусы.
            нужно основательно подумать что мы хотим тут увидеть
          </p>
        </div>

        <div class="task-info">
          <a href="#">
            <img alt="" class="rounded" height="48" src="https://githut.com/mdo.png" width="48">
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
      </div>

      <!-- стандартная задача с картинкой -->
      <div class="board-column_task">
        <div class="task-title">
          <a href="#">Название подзадачи</a>
          <a aria-current="page" class="" href="#">
            <i class="fas fa-ellipsis-h"></i>
          </a>
        </div>

        <div class="task-description">
          <p>
            Тут допустим будет написано описание задачи или вывод фото.
            можно просто вывести здесь статусы.
            нужно основательно подумать что мы хотим тут увидеть
          </p>
        </div>

        <div class="task-image">
          <a href="#">
            <img src="../../../assets/13.png" alt="doc" />
          </a>
        </div>


        <div class="task-info">
          <a href="#">
            <img alt="" class="rounded" height="48" src="https://githut.com/mdo.png" width="48">
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
      </div>

      <TaskInColumn />



      <TaskInColumn />


      <TaskInColumn />
      <TaskInColumn />


      <TaskInColumn />



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
  components: {TaskInColumn}
}
</script>

<style scoped>

</style>