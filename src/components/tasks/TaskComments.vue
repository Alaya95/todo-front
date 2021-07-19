<template>
  <div class="comment">
    <div class="commentHeader">
      <img alt="avatar" src="../../assets/avatar.png">
      <a>{{ user.name }}</a>
      <p>{{ comment.updated_at | date }}</p>
    </div>

    <div :id="comment.id" ref="commentId" class="commentText">
      <p v-if="editComment">{{ comment.content }}</p>
      <textarea
          v-else :id='("nameTask" + comment.content)'
          ref="editComment" :value="comment.content"
          name="editComment" type="text"
      ></textarea>
    </div>

    <div class="commentEdit">
      <button v-if="!isHiddenChange" type="button" @click="openInput">Редактировать</button>
      <button v-if="isHiddenSave" type="button" @click="changeTaskFormComments(comment, index)">Сохранить</button>
      <button type="button" @click="deleteTaskFormComments(comment)">Удалить</button>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import store from "../../store/store";
import moment from 'moment';

export default {
  name: "TaskComments",
  data() {
    return {
      editComment: true,
      isHiddenChange: false,
      isHiddenSave: false,
    };
  },
  props: ['index', 'user', 'comment'],
  methods: {
    changeTaskFormComments(comment, index) {
      const data = {
        id: comment.id,
        content: this.$refs.editComment.value,
        index: index
      }

      store.dispatch('editTaskFormComment', data)
      this.closeInput();
    },
    deleteTaskFormComments(comment) {
      const data = {
        id: comment.id
      }

      store.dispatch('deleteTaskFormComment', data)
    },
    openInput() {
      this.isHiddenChange = true;
      this.editComment = false;
      this.isHiddenSave = true;
    },

    closeInput() {
      this.isHiddenChange = false;
      this.editComment = true;
      this.isHiddenSave = false;
    },
  },
  computed: {
    ...mapGetters([
      'getTaskFormComments',
    ]),
  },
  filters: {
    date: function (value) {
      if (value) {
        return moment(String(value)).format('MM/DD/YYYY hh:mm')
      }
    }
  }
}
</script>

<style scoped></style>