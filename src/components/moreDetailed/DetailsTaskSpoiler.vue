<template>
  <details class="spoiler">
    <summary>
      <div class="summary-title">{{ task.task_name }}</div>
      <div class="summary-status">{{ task.task_status }}</div>
    </summary>

    <div class="spoiler-info">

      <div class="spoiler-info_description">
        {{ task.task_description }}
      </div>

      <div class="spoiler-info_data">
        <div>Дата создания: {{ task.created_at }}</div>
        <div> срок сдачи: {{ task.task_period }}</div>
      </div>

    </div>

  </details>

</template>

<script>
export default {
  name: "DetailsTaskSpoiler",
  props: ['task']
}
</script>

<style scoped>

</style>