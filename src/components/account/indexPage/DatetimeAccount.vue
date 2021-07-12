<template>
  <div class="card  col-xs-6 col-xl-4 m-sm-2 m-xl-3">
    <div class="bigBlock">
      <div class="title">
        <p>Дата и время</p>
        <i class="fas fa-ellipsis-h"></i>
      </div>

      <div>
        <div class="date">
          <p>{{showTime()}}</p>
          <p>{{showDate()}}</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "DatetimeAccount",

  methods: {
    showTime() {
      return ((new Date()).toLocaleTimeString());
    },
    showDate() {
      return ((new Date()).toLocaleDateString());
    }
  },

}
</script>

<style scoped>

</style>