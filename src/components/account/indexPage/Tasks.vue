
<template>

  <div>
    <div class="tusk accounts" >
      <details>
        <summary>
      <label>
        <input class="radio" name="bubu" type="radio">
        <span class="pseudo-radio"></span>
        {{ task.task_name }}

      </label>
      <div>
        <a href="#"><i class="fas fa-edit"></i></a>

        <a href="#">
          <i class="fas fa-trash-alt"
             v-on:click="$emit('remove-task', task.id)">
          </i></a>
        <!--<button @click="deletedTask">
          <i class="fas fa-trash-alt"
             >
          </i></button>-->
      </div>
        </summary>
        <p class="task_description">{{ task.task_description }}</p>
      </details>
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

<style scoped>

.accounts {
  overflow: hidden;
  width: initial;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 8px;
  background: #414141;
}
  summary {
    display: flex;
    background: #414141;
    justify-content: space-between;
    min-height: 55px;
    margin-bottom: 1px;

  }
  details {
    flex: 1 1 50px;
    background: #414141;
    text-align: justify;

  }
  label {
    margin-top: 15px;
    pointer-events: none;
  }
  .task_description{
    pointer-events: none;
    padding-left: 20px;

  }
</style>