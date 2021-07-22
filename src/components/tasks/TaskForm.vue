<template>
  <div class="form" :id="getTask[0].task_id" ref="taskId">
    <div class="title">
      <p>{{ getTask[0].task_name }}</p>
      <p>в колонке <a href="#">{{ getTask[0].column_name }}</a></p>
    </div>

    <div>
      <div class="center">
        <div class="participants">
          <p>Инициатор задачи: {{ getTask[0].initiator_name }}</p>
          <p>Исполнитель задачи: {{
              getTask[0].executor_name === null && 'не назначен' || getTask[0].executor_name
            }}</p>
        </div>

        <div class="description">
          <p>Описание</p>
          <p>{{ getTask[0].task_description }}</p>
        </div>

        <div class="files">
          <div class="fileTitle">
            <p>Вложения</p>
          </div>
          <TaskFiles/>
          <TaskFiles/>
        </div>

        <div v-show="false" class="checkList">
          <!-- Тут добавляются чек листы -->
          <TaskCheckList/>
          <TaskCheckList/>
        </div>

        <!-- Блок записи комментария -->
        <div class="createComments">
          <label for="comments">Комментарии</label>
          <textarea id="comments" ref="comments" cols="30" name="comments" rows="10"></textarea>
          <button type="button" @click="createTaskFormComments">Сохранить</button>
        </div>

        <!-- Блок вывода комментариев -->
        <div class="comments">

          <TaskComments
              v-for="comment in getTask[0].comments"
              :key="comment.id"
              ref="commentId"
              :comment="comment"
          />

        </div>
      </div>

      <TaskNav/>
    </div>
  </div>
</template>

<script>
import TaskNav from "../../components/tasks/TaskNav";
import TaskComments from "../../components/tasks/TaskComments";
import TaskCheckList from "../../components/tasks/TaskCheckList";
import TaskFiles from "../../components/tasks/TaskFiles";
import {mapGetters} from "vuex";


export default {
  name: "TaskForm",
  data() {
    return {
      editComment: true,
      isHiddenChange: false,
      isHiddenSave: false,
    };
  },
  components: {
    TaskNav,
    TaskComments,
    TaskCheckList,
    TaskFiles,
  },
  methods: {
    fetchTask() {
      const data = {
        id: this.$route.params.id
      }
      this.$store.dispatch('fetchTask', data);
    },
    createTaskFormComments() {
      const data = {
        task_id: this.$refs.taskId.id,
        content: this.$refs.comments.value,
        user_id: this.getUserData.id,
      };
      this.$store.dispatch('createTaskFormComment', data)
    },
  },
  mounted() {
    this.fetchTask()
  },
  computed: {
    ...mapGetters([
      'getUserData',
      'getTask',
    ]),
  }
}
</script>

<style lang="scss" scoped>
@import "../../layout/scss/tasksForm";
</style>