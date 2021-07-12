<template>
  <div>
    <div class="content container-fluid d-flex flex-column ">

      <div class="block d-flex flex-wrap row">


        <ProgressForTheWeek/>

        <DatetimeAccount/>

        <div class="w-100"></div>

        <ActiveTask />

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
}
</script>

<style scoped>

</style>