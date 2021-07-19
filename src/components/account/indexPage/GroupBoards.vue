<template>
  <div class="group_boards">
    <div class="board">
      <a href="#"><img src="" alt="">{{board.name}}</a>

    </div>
  </div>


</template>
<script>
export default {

   name: "board",

   props: {
     board: {
       type: Object,
       required: true,
     }
   },

}
</script>

<style scoped>
.board{
  margin-top: 0.5rem;
  margin-left: 0.7rem;
}
a {
  text-decoration: none;
  color: #fff;
}
a:hover{
  color:#3f8778;
}

</style>