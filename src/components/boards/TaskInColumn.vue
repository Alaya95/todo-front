<template>
  <div>
    <!-- стандартная задача -->
    <div class="board-column_task">
      <!-- вывод названия задачи -->
      <div class="task-title">
        <p v-if="editTitleTask">Название подзадачи</p>
        <input v-else type="text" value="Название подзадачи">

        <!-- кнопка для выпадающего меню задачи-->
        <button @click="showTaskMenu = !showTaskMenu">
          <i class="fas fa-ellipsis-h"></i>
        </button>
      </div>

      <!-- выпадающее меню задачи для ее редактирования и изменения-->
      <div v-show="showTaskMenu" class="task-menu">
        <button v-if="editTitleTask" @click="editTitleTask = !editTitleTask ">Редактировать</button>
        <button v-else @click="editTitleTask = !editTitleTask ">Изменить</button>
        <button>Удалить</button>
      </div>

      <!-- Описание задачи -->
      <div class="task-description">
        <p v-if="editTitleTask">
          Тут допустим будет написано описание задачи или вывод фото.
          можно просто вывести здесь статусы.
          нужно основательно подумать что мы хотим тут увидеть
        </p>
        <textarea v-else id="" cols="30" name="taskDescription" rows="8">Тут допустим будет написано описание задачи или вывод фото.можно просто вывести здесь статусы.нужно основательно подумать что мы хотим тут увидеть
        </textarea>
      </div>

      <!-- Прикрепленная к задаче картинка -->
      <div class="task-image">
        <a href="#">
          <img alt="doc" src="../../assets/13.png"/>
        </a>
      </div>


      <!-- Информация о количестве комментариев, статусе задачи и прикрепленных файлах -->
      <div class="task-info">

        <a href="#">
          <img alt="" class="rounded" height="48" src="https://githut.com/mdo.png" width="48">
        </a>

        <!-- количество комментариев, если ничего нет. то пусто -->
        <a aria-current="page" class="" href="#">
          <i class="far fa-comments"></i>
          <span class="">99+</span>
        </a>

        <!-- количество прикрепленных файлов -->
        <a aria-current="page" class="" href="#">
          <i class="fas fa-paperclip"></i>
          <span class="">5+</span>
        </a>

        <!-- статус задачи -->
        <div class="task-info_status">
          Статус
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskInColumn",
  data() {
    return {
      editTitleTask: true,
      showTaskMenu: false,
    };
  },
}
</script>

<style scoped>
</style>