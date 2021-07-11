<template>
    <div class="tusk">
      <label>
        <input class="radio" name="bubu" type="radio">
        <span class="pseudo-radio"></span>
        {{ task.title }}
      </label>
      <div>
        <a href="#"><i class="fas fa-edit"></i></a>
        <a href="#">
          <i class="fas fa-trash-alt"
             v-on:click="$emit('remove-task', task.id)">

          </i></a>
      </div>
    </div>
</template>

<script>
export default {
  name: "tasks",

  props: {
    task: {
      type: Object,
      required: true,
    }

  }
}

</script>

<style scoped>



</style>