<template>
  <div>
    <!-- стандартная задача -->
    <div :id="task.id" ref="taskId" :draggable="draggable" class="board-column_task" @dragend="dragEnd"
         @dragstart="dragStart" @dragover.prevent="setOrder(task.order)" @dragenter.prevent>

      <!-- заголовок задачи и выпадающее меню для ее редактирования-->
      <div class="task-title">
        <p v-if="editTitleTask" :draggable="false">{{ task.title }}</p>
        <input
            v-else :id='("nameTask" + task.title)'
            ref="titleTask" name="titleTask"
            :value="task.title" type="text"
        >

        <!-- кнопка для выпадающего меню задачи-->
        <button :draggable="false" aria-current="page" @click="openTaskMenu">
          <i class="fas fa-ellipsis-h"></i>
        </button>
      </div>

      <!-- выпадающее меню задачи для ее редактирования и изменения-->
      <div v-show="isOpenTaskMenu" class="task-menu">
        <button v-if="editTitleTask" @click="editTitleTask = !editTitleTask">Редактировать</button>
        <button v-else @click="editTask">Изменить</button>
        <button @click="deleteTaskColumn">Удалить</button>
      </div>

      <!-- описание задачи -->
      <div class="task-description">
        <p v-if="editTitleTask">
          {{ task.text }}
        </p>

        <textarea v-else cols="30" name="taskDescription" ref="textTask" id="('textTask' + task.description)" rows="4" v-text="task.text">

        </textarea>
      </div>

      <!-- Прикрепленная к задаче картинка -->
      <div v-show="false" class="task-image">
        <a>
          <img alt="doc" src="../../assets/13.png"/>
        </a>
      </div>

      <!-- основная информация о задаче -->
      <div class="task-info">

        <!-- ссылка на аватар создателя задачи -->
        <a :draggable="false">
          <img :draggable="false" alt="Photo" class="rounded" height="48" src="https://github.com/mdo.png" width="48"/>
        </a>

        <!-- кол-во комментариев к задаче -->
        <a :draggable="false" aria-current="page" class="">
          <i class="far fa-comments"></i>
          <span class="">{{ task.comments }}</span>
        </a>

        <!-- кол-во приложенных файлов к задаче -->
        <a :draggable="false" aria-current="page" class="">
          <i class="fas fa-paperclip"></i>
          <span class="">{{ task.attachable }}</span>
        </a>

        <!-- статус задачи -->
        <div class="task-info_status">
          <span class="">{{ task.status }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../../store/store";

export default {
  name: "TaskInColumn",
  props: ["task", "draggable", "setOrder"],
  data() {
    return {
      editTitleTask: true,
      showTaskMenu: false,
      isOpenTaskMenu: false,
    };
  },
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
    openTaskMenu() {
      this.isOpenTaskMenu = !this.isOpenTaskMenu;
    },
    closeTaskMenu() {
      this.isOpenTaskMenu = false;
      this.editTitleTask = true;
    },
    editTask() {
      const data = {
        id:  this.$refs.taskId.id,
        name: this.$refs.titleTask.value,
        description:this.$refs.textTask.value,
      };
      console.log(data)
      store.dispatch('editTask', data)
      this.closeTaskMenu();
    },
    deleteTaskColumn() {
      const data = {
        id: this.$refs.taskId.id,
      }
      store.dispatch('deleteTaskColumn', data)

      this.closeTaskMenu();
    }

  },
};
</script>

<style scoped></style>