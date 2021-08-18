<template>
  <div>
    <!-- стандартная задача -->
    <div :id="task.id" ref="taskId" :draggable="draggable" class="board-column_task" @dragend="dragEnd"
         @dragstart="dragStart" @dragover.prevent="setOrder(task.order)" @dragenter.prevent>

      <!-- заголовок задачи и выпадающее меню для ее редактирования-->
      <div class="task-title">
        <router-link v-if="editTitleTask" :draggable="false" :to="'task/' + task.id">{{ task.title }}</router-link>
        <input
            v-else :id='("nameTask" + task.title)'
            ref="titleTask" :value="task.title"
            name="titleTask" type="text"
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

        <textarea v-else id="('textTask' + task.description)" ref="textTask" cols="30" name="taskDescription" rows="4"
                  v-text="task.text">

        </textarea>
      </div>

      <!-- Прикрепленная к задаче картинка -->
      <div v-show="false" class="task-image">
        <a>
          <img alt="doc" src="../../assets/13.png"/>
        </a>
      </div>

      <!-- Вывод даты окончания задач и ее создания -->
      <div class="task-data">
        <div class="task-data_create"></div>
        <div class="task-data_deadline">
          <p v-if="task.deadline != null ">Дата завершения: <span>{{task.deadline}}</span></p>
          <p v-else>Дата завершения: <span> не установлена</span></p>
        </div>
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

        <div>
          <button
              v-for="statusItem in status(task.status)"
              class="task-info_status"
              @click="statusMenu"
              :key="statusItem.message"
              :style="{backgroundColor:  statusItem.color}"
          >
            {{ statusItem.message }}
          </button>
          <!-- Вынести в модалку -->
          <StatusMenu v-show="openStatusMenu" v-bind:taskIdStatus="task.id" />
        </div>



      </div>
    </div>
  </div>
</template>

<script>
import StatusMenu from "./forms/StatusMenu";

export default {
  name: "TaskInColumn",
  components: {StatusMenu},
  props: ["task", "draggable", "setOrder"],
  data() {
    return {
      editTitleTask: true,
      showTaskMenu: false,
      isOpenTaskMenu: false,
      openStatusMenu: false
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
        id: this.$refs.taskId.id,
        name: this.$refs.titleTask.value,
        description: this.$refs.textTask.value,
      };
      console.log(data)
      this.$store.dispatch('editTask', data)
      this.closeTaskMenu();
    },
    deleteTaskColumn() {
      const data = {
        id: this.$refs.taskId.id,
      }
      this.$store.dispatch('deleteTaskColumn', data)

      this.closeTaskMenu();
    },
    statusMenu() {
      this.openStatusMenu = this.openStatusMenu === false;
    },
    status(status) {
      const statusData = [
        {id: '1', message: 'Новая', color: '#B6D0E3'},
        {id: '2', message: 'Завершено', color: '#32B9A1'},
        {id: '3', message: 'В процессе', color: '#E1A815'},
        {id: '4', message: 'Срочно', color: '#EB741D'},
        {id: '5', message: 'Просрочено', color: '#DA5125'},
        {id: '6', message: 'Приостановлено', color: '#228EDD'},
        {id: '7', message: 'Отменено', color: '#AD2FDA'},
      ]

      const data = []
      data.push(statusData.find(({id}) => id === status))

      return data
    }

  },
};
</script>

<style scoped></style>