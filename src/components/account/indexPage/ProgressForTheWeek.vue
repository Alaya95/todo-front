<template>
  <div class="bigBlock card">
    <div class="title">
      <p>Успехи за неделю</p>
      <i class="fas fa-ellipsis-h"></i>
    </div>

    <div class="radius">
      <div class="radiusBlock">
        <p>Создано</p>

        <div>
          <p>{{ this.getTasksStatistics.countNew }}</p>
        </div>
      </div>

      <div class="radiusBlock">
        <p>Активно</p>
        <div>
          <p>{{ this.getTasksStatistics.countInProcess }}</p>
        </div>
      </div>

      <div class="radiusBlock">
        <p>Выполнено</p>
        <div>
          <p>{{ this.getTasksStatistics.countCompleted }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "ProgressForTheWeek",
  methods: {
    fetchTasksStatistics() {
      this.$store.dispatch('fetchTasksStatistics');
    },
  },
  mounted() {
    this.fetchTasksStatistics();
  },
  computed: {
    ...mapGetters(['getTasksStatistics']),
  }
}

</script>

<style scoped></style>