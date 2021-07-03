<template>
  <div class="card col-xs-6 col-xl-7 m-sm-2 m-xl-3">
    <div class="bigBlock card-body ">
      <div class="title">
        <p>Активные задачи</p>
        <i class="fas fa-ellipsis-h"></i>
      </div>
      <div class="tusks">

        <!-- здесь откручиваем задачи  -->
        <Tasks/>

      </div>
    </div>
  </div>

</template>

<script>
import Tasks from "./Tasks";

export default {
  name: "ActiveTask",
  components: {Tasks}
}
</script>

<style scoped>

</style>