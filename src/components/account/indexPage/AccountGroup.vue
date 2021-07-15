<template>
  <div class="tusk">
    <label>
      {{ group.name}}
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
  name: "getGroups",

  props: {
    group: {
      type: Object,
      required: true,
    }
  },
}

</script>

<style scoped>

</style>