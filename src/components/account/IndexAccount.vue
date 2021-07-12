<template>
  <div>
    <div class="content container-fluid d-flex flex-column ">

      <div class="block d-flex flex-wrap row">


        <ProgressForTheWeek/>

        <DatetimeAccount/>

        <div class="w-100"></div>

        <ActiveTask/>

        <CompleteTask/>


      </div>
      <div class="w-100"></div>
    </div>
  </div>
</template>

<script>
import ProgressForTheWeek from "./indexPage/ProgressForTheWeek";
import DatetimeAccount from "./indexPage/DatetimeAccount";
import CompleteTask from "./indexPage/CompleteTaskBlock";
import ActiveTask from "./indexPage/ActiveTask";

export default {
  name: "IndexAccount",
  components: {
    ProgressForTheWeek,
    DatetimeAccount,
    CompleteTask,
    ActiveTask
  },
//  data(){
//    return {
//      tasks: [
//        {id: 1, title: 'Купить хлеб', completed: false},
//        {id: 2, title: 'Купить молоко', completed: false},
//        {id: 3, title: 'Купить дом', completed: false},
//      ],
//    }
    //console.log(this.tasks)
//  },
//  mounted() {
    //fetch('http://127.0.0.1:8000/api/tasks')
    //  .then(response => response.json()
    //  .then(json => console.log(json)))

//  },
}
</script>

<style scoped>

</style>