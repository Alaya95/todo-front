<template>
  <div class="bigBlock card">
    <div class="title">
      <p>Дата и время</p>
      <i class="fas fa-ellipsis-h"></i>
    </div>
    <div>
      <div class="date">
        <p> {{ localeDate }}</p>
        <p>{{ showTime }}</p>
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
      let mounth = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
      let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда',
        'Четверг', 'Пятница', 'Суббота'];

      return days[(new Date(this.date)).getDay()] + ' ' +
          (new Date(this.date)).getDate() + ' ' +
          mounth[(new Date(this.date)).getMonth()] + ' ' +
          (new Date(this.date)).getFullYear();
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

<style scoped></style>