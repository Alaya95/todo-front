<template>
  <div class="card col-xs-6 col-xl-4 m-sm-2 m-xl-3">
    <div class="bigBlock card-body">

      <div class="title">
        <p>Завершенные задачи</p>
        <i class="fas fa-ellipsis-h"></i>
      </div>
      <div class="tusks">

        <CompleteTask />

      </div>
    </div>
  </div>
</template>

<script>
import CompleteTask from "./CompleteTask";
export default {
  name: "CompleteTaskBlock",
  components: {
    CompleteTask
  }
}
</script>

<style scoped>

</style>