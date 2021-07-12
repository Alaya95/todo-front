<template>
  <div class="card  col-xs-6 col-xl-4 m-sm-2 m-xl-3">
    <div class="bigBlock">
      <div class="title">
        <p>Дата и время</p>
        <i class="fas fa-ellipsis-h"></i>
      </div>

      <div>
        <div class="date">
          <p> {{localeDate}}</p>
          <p>{{showTime}}</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "DatetimeAccount",
  data: () => ({
    date: 1580558031264,
  }),
  computed: {
    localeDate() {
      return (new Date(this.date)).toLocaleDateString()
    },
    showTime() {
      return (new Date(this.date)).toLocaleTimeString()
    },
  },

  created() {
    this.intervalId = setInterval(() => this.date = Date.now(), 1000);
  },
  beforeDestroy() {
    if (this.intervalId) clearInterval(this.intervalId)
  },

}
</script>

<style scoped>

</style>