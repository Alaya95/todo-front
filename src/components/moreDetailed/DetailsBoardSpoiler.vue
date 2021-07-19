<template>
  <div class="board accounts">
    <div :id="board.id" ref="boardId" class="board-name">

      <router-link v-if="isOpenEditTitle" :to='"board/" + board.id'> {{ board.name }}</router-link>
      <input v-else ref="titleBoard" :value="board.name" name="titleBoard" type="text">

    </div>
    <div class="board-icons">

      <button @click="editTitleBoard"><i class="fas fa-edit"></i></button>
      <button @click="deleteBoard"><i class="fas fa-trash-alt"></i></button>

    </div>

  </div>
</template>
<script>

export default {
  name: 'DetailsBoardSpoiler',
  props: ['board'],
  data() {
    return {
      isOpenEditTitle: true
    }
  },
  methods: {
    editTitleBoard() {
      const data = {
        id: this.$refs.boardId.id,
        name: this.$refs.titleBoard.value
      }
      this.$store.dispatch('editBoards', data)
    },
    deleteBoard() {
      const data = {
        id: this.$refs.boardId.id,
      }

      this.$store.dispatch('deleteBoard', data)
    }
  }

}

</script>

<style lang="scss" scoped>

.board {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  background-color: #2c3e50;
  border-radius: 10px;

  &-name {
    margin: 10px 10px 10px 20px;

    & a {
      text-decoration: none;
      font-weight: bolder;
      color: #ffffff;

      &:hover {
        color: #38c172;
      }
    }
  }

  &-icons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 10px 10px 10px 20px;

    & button {
      background: none;
      border: none;
      outline: none;
      margin: 7px;

      &:first-child {
        &:hover {
          color: #32B9A1;

          & i {
            color: #32B9A1;
          }
        }
      }

      &:last-child {
        &:hover {
          color: #e3342f;

          & i {
            color: #e3342f;
          }
        }
      }
    }
  }
}

</style>