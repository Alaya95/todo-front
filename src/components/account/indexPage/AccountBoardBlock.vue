<template>
  <div class="card col-xs-6 col-xl-4 m-sm-2 m-xl-3">
    <div class="bigBlock">

      <div class="title">
        <p>Ваши доски</p>
        <i class="fas fa-ellipsis-h"></i>
      </div>

      <div class="tusks" v-bind:boards="getBoards" v-if="getBoards.length">
        <AccountBoard
            v-for="board in getBoards"
            :key="board.item"
            board_prop.sync="board"
            v-bind:board="board"
            />


      </div>
      <p v-else>Досок нет</p>
    </div>
  </div>

</template>
<script>

import AccountBoard from "./AccountBoard";

export default {
  name: "AccountBoardBlock",
  components: {AccountBoard},
  //props: ['boards'],

   data(){
   return {
     getBoards: [],

   }
 },

  mounted() {

    fetch('http://f0557894.xsph.ru/api/boards')
        .then(response => response.json())
        .then(json =>
            this.getBoards = json)
  }

}
</script>
<style scoped>

button {
  width: inherit;
  display: block;
  color: #ffffff;
  font-size: 14px;
  background: #6E6E6E;
  outline: none;
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  margin: 0 0 5px 0;
}


</style>