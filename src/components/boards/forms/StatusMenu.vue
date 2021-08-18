<template>
  <div class="status_menu"  ref="taskStatus" :id="this.taskIdStatus">
    <p>Выберите статус задачи</p>
    <button @click="setTaskStatus(index)" v-for="(item, index) in items"
            ref="statusId"
            :id="item.id"
            :key="item.message"
            :style="{backgroundColor:  item.color}"
    >
      {{ item.message }}
    </button>
  </div>
</template>

<script>

export default {
  name: "StatusMenu",
  props: ["taskIdStatus"],
  data() {
    return {
      items: [
        {id: 1, message: 'Новая', color: '#B6D0E3'},
        {id: 2, message: 'Завершено', color: '#32B9A1'},
        {id: 3, message: 'В процессе', color: '#E1A815'},
        {id: 4, message: 'Срочно', color: '#EB741D'},
        {id: 5, message: 'Просрочено', color: '#DA5125'},
       // {id: 6, message: 'Приостановлено', color: '#228EDD'},
       // {id: 7, message: 'Отменено', color: '#AD2FDA'},
      ]
    }
  },
  methods: {
    setTaskStatus(index){
      const data = {
        id: this.$refs.taskStatus.id,
        task_status: this.$refs.statusId[index].id
      }

      console.log(data)
      this.$store.dispatch('setTaskStatus', data)
    },
  }
}
</script>

<style lang="scss" scoped>
.status_menu {
  position: absolute;
  z-index: 1000;
  width: 250px;
  background: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 0;

  & p {
    line-height: 40px;
  }

  & button {
    width: 85%;
    margin: 5px 20px 5px 20px;
    padding: 10px;
    font-size: 16px;
    color: #1d1b31;
    font-weight: bolder;
    border: none;
    outline: none;

    &:last-child{
      margin-bottom: 15px;
    }}


}
</style>