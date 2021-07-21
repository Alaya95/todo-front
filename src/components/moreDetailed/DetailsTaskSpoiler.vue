<template>
  <details class="spoiler">
    <summary>
      <div class="summary-title">{{ task.name }}</div>
      <div class="summary-status">{{ task.task_status }}</div>
    </summary>

    <div class="spoiler-info">

      <div class="spoiler-info_description">
        {{ task.description }}
      </div>

      <div class="spoiler-info_data">
        <div>Дата создания: {{ new Date(task.created_at).toLocaleDateString() }}</div>
        <div> срок сдачи: {{ task.deadline === null && 'бессрочно' }}

        </div>
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