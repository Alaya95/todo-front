<template>
  <div class="tusk">
    <label>
      {{ task.task_name }}
    </label>
    <div>
      <a href="#">
        <i class="fas fa-trash-alt"
           v-on:click="$emit('remove-task', task.id)">

        </i></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompleteTask",

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