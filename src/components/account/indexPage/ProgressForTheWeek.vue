<template>
  <div class="card col-xs-6 col-xl-7 m-sm-2 m-xl-3">
    <div class="bigBlock">
      <div class="title">
        <p>Успехи за неделю</p>
        <i class="fas fa-ellipsis-h"></i>
      </div>

      <div class="radius">
        <div class="radiusBlock">
          <p>Создано</p>
          <div>
            <p>{{getTaskCount()}}</p>
          </div>
        </div>

        <div class="radiusBlock">
          <p>Активно</p>
          <div>
            <p>{{getActiveTaskCount()}}</p>
          </div>
        </div>

        <div class="radiusBlock">
          <p>Выполнено</p>
          <div>
            <p>{{getCompleteTaskCount()}}</p>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
//import store from "../../../store/store";
import {mapGetters} from "vuex";

export default {
  name: "ProgressForTheWeek",
  methods: {

    getTaskCount(){
      return this.getTasks.length;
    },
    getActiveTaskCount(){
      const arr = this.getTasks.filter(function (item){
        return item.task_status === '1';
      })
      return arr.length;
    },
    getCompleteTaskCount(){
      const arr = this.getTasks.filter(function (item){
        return item.task_status === '2';
      })
      return arr.length;
    },

    fetchTasks() {
      this.$store.dispatch('fetchTasks');
    },
  },
  mounted() {
    this.fetchTasks();
  },
  computed: {
    ...mapGetters(['getTasks',]),
  }
}

</script>

<style scoped>

</style>