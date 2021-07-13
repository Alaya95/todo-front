<template>
  <div class="tusk">
    <label>
      {{ board.name}}
    </label>
    <div>
      <a href="#">
        <i class="fas fa-trash-alt">

        </i></a>
    </div>
  </div>

</template>

<script>
export default {
  name: "getBoards",

  props: {
    board: {
      type: Object,
      required: true,
    }
  },
}

</script>

<style scoped>

</style>