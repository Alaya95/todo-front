<template>
  <div class="comment">
    <div class="commentHeader">
      <img alt="avatar" src="../../assets/avatar.png">
      <a>{{ comment.user_name }}</a>
      <p> {{ new Date(comment.created_at).toLocaleString() }}</p>
    </div>

    <div :id="comment.id" ref="commentId" class="commentText">
      <p v-if="editComment">{{ comment.content }}</p>
      <textarea
          v-else
          ref="editComment" :value="comment.content"
          name="editComment" type="text"
      ></textarea>
    </div>

    <div class="commentEdit">
      <button v-if="!isHiddenChange" type="button" @click="openInput">Редактировать</button>
      <button v-if="isHiddenSave" type="button" @click="changeTaskFormComments">Сохранить</button>
      <button type="button" @click="deleteTaskFormComments">Удалить</button>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import {mapGetters} from "vuex";

export default {
  name: "TaskComments",
  data() {
    return {
      editComment: true,
      isHiddenChange: false,
      isHiddenSave: false,
    };
  },
  props: ['user', 'comment'],
  methods: {
    changeTaskFormComments() {
      const data = {
        id: this.$refs.commentId.id,
        content: this.$refs.editComment.value,
      }
      this.$store.dispatch('editTaskFormComment', data)
      this.closeInput();
    },
    deleteTaskFormComments() {
      const data = {
        id: this.$refs.commentId.id,
      }
      this.$store.dispatch('deleteTaskFormComment', data)
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
      'getUserData'
    ])
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