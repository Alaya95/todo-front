<template>
  <div class="tusk accounts">

    <label>
      <input class="radio" name="bubu" checked type="radio">
      <span class="pseudo-radio"></span>
      {{ task.name }}
    </label>

    <!--<p class="task_description">{{ task.deadline }}</p>-->
    <div>
      <button><i class="fas fa-edit"></i></button>
      <button>
        <i class="fas fa-trash-alt" v-on:click="$emit('remove-task', task.id)"></i>
      </button>
    </div>


  </div>
</template>

<script>


//import store from "../../../store/store";

export default {
  name: "getTasks",

  props: {
    task: {
      type: Object,
      required: true,
    }
  },
  //methods: {
  //  removeTask(id) {
  //    const data = {
  //      id: id
  //    };
  //    store.dispatch('deletedTask', data)
  // }
  //},
}

</script>

<style scoped></style>