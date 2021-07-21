<template>

    <details class="spoiler">
        <summary>
            <div class="summary-title">{{ task.task_name }}</div>
            <div class="summary-status">{{ task.task_status }}</div>
        </summary>
<!-- <details class="spoiler">
    <summary>
      <div class="summary-title">{{ task.name }}</div>
      <div class="summary-status">{{ task.task_status }}</div>
    </summary> -->


        <div class="spoiler-info">

            <div class="spoiler-info_description">
                {{ task.task_description }}
            </div>

            <div class="spoiler-info_data">
                <div>Дата создания: {{ task.created_at }}</div>
                <div> срок сдачи: {{ task.task_period }}</div>
                <router-link :to="{ name: 'tasks', params: { id: task.task_id }}"><i class="fas fa-edit"></i></router-link>

   <!--   <div class="spoiler-info_description">
        {{ task.description }}
      </div>

      <div class="spoiler-info_data">
        <div>Дата создания: {{ new Date(task.created_at).toLocaleDateString() }}</div>
        <div> срок сдачи: {{ task.deadline === null && 'бессрочно' }}

        </div>
      </div> -->



            </div>

        </div>

    </details>

</template>

<script>


    export default {
        name: "DetailsTaskSpoiler",
        props: ['task'],

    }
</script>

<style scoped>

</style>