<template>
  <div class="account-content">

    <NavbarAccount/>

    <div class="board">
      <TaskColumn :key="1" :id="1"/>
      <TaskColumn :key="2" :id="2"/>
      <TaskColumn :key="3" :id="3"/>

      <div class="board-column_addTask">
        <button @click="openCreateColumnForm">
          <i class="fas fa-plus-square"></i>
          Добавить колонку
          {{ }}
        </button>
      </div>

      <CreateColumn v-show="openCreateColumn" v-bind:closeCreateColumnForm="closeCreateColumnForm"/>

    </div>
  </div>
</template>

<script>
import CreateColumn from "../components/boards/forms/CreateColumn";
import NavbarAccount from "../components/account/NavbarAccount";
import TaskColumn from "../components/boards/TaskColumn";

import {mapGetters} from "vuex";
import router from "../router/router";


export default {
  name: "Board",
  components: {
    CreateColumn,
    NavbarAccount,
    TaskColumn,
  },

  data() {
    return {
      openCreateColumn: false,
    };
  },
  methods: {
    openCreateColumnForm() {
      this.openCreateColumn = true;
    },
    closeCreateColumnForm() {
      this.openCreateColumn = false;
    },
    fetchDesk() {
      this.$store.dispatch('fetchDesk')
    },
     redirect(){
      console.log(!this.getAuthStatus);
      !this.getAuthStatus && router.push({name: "main", path: "/"})
    }
  },
  mounted() {
    this.fetchDesk();
    this.redirect();
  },
  computed: {
    ...mapGetters([
      'getAuthStatus',
    ]),
  },

};
</script>

<style lang="scss">
  @import "../layout/scss/board.scss";
</style>

