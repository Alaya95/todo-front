<template>
  <div class="account-content">
    <Navbar />
    <div class="board">

      <TaskColumn v-for="column in getDesk" :key="column.id" :column="column" />

      <div class="board-column_addTask">
        <button @click="openCreateColumnForm">
          <i class="fas fa-plus-square"></i>
          Добавить колонку
        </button>
      </div>

      <CreateColumn v-show="openCreateColumn" :closeCreateColumnForm="closeCreateColumnForm"/>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import TaskColumn from "../components/boards/TaskColumn";
import {mapGetters} from "vuex";
import CreateColumn from "@/components/boards/forms/CreateColumn";

export default {
  name: "Board",
  components: {
    CreateColumn,
    Navbar,
    TaskColumn,
  },
  data() {
    return {
      createColumn: false,
      openCreateColumn: false,
    };
  },
  methods: {
    fetchDesk() {
      const data = {
         id: this.$route.params.id
      };
      this.$store.dispatch('fetchDesk', data)
    },
    openCreateColumnForm() {
      if(this.openCreateColumn) {
        this.openCreateColumn = false
      } else {
        this.openCreateColumn = true
      }
    },
    closeCreateColumnForm() {
      this.openCreateColumn = false;
    },
  },
  mounted() {
    this.fetchDesk()
  },
  computed: {
    ...mapGetters(['getAuthStatus', "getDesk"]),
  },
};
</script>

<style lang="scss">
  @import "../layout/scss/board.scss";
</style>