<template>
  <div>
    <ProgressForTheWeek/>
    <DatetimeAccount/>
    <ActiveTask/>
    <CompleteTask/>
    <AccountGroupBlock/>
  </div>
</template>

<script>
import ProgressForTheWeek from "./indexPage/ProgressForTheWeek";
import DatetimeAccount from "./indexPage/DatetimeAccount";
import CompleteTask from "./indexPage/CompleteTaskBlock";
import ActiveTask from "./indexPage/ActiveTask";
import AccountGroupBlock from "./indexPage/AccountGroupBlock";

export default {
  name: "IndexAccount",
  components: {
    AccountGroupBlock,
    ProgressForTheWeek,
    DatetimeAccount,
    CompleteTask,
    ActiveTask,

  },
}
</script>

<style scoped></style>