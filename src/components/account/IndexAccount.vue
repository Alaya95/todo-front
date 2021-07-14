<template>
  <div>
    <div class="content container-fluid d-flex flex-column ">

      <div class="block d-flex flex-wrap row">


        <ProgressForTheWeek/>

        <DatetimeAccount/>

        <div class="w-100"></div>

        <ActiveTask />

        <CompleteTask/>

        <AccountGroupBlock/>

        <AccountBoardBlock/>





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
import AccountGroupBlock from "./indexPage/AccountGroupBlock";
import AccountBoardBlock from "./indexPage/AccountBoardBlock";

export default {
  name: "IndexAccount",
  components: {
    AccountBoardBlock,
    AccountGroupBlock,
    ProgressForTheWeek,
    DatetimeAccount,
    CompleteTask,
    ActiveTask,

  },
}
</script>

<style scoped>

</style>