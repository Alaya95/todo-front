<template>
    <div class="tusk">
      <label>
        <input class="radio" name="bubu" type="radio">
        <span class="pseudo-radio"></span>
        {{ task.task_name }}
      </label>
      <div>
        <a href="#"><i class="fas fa-edit"></i></a>
        <button @click="deletedTask">
          <i class="fas fa-trash-alt"
             >
          </i></button>
      </div>
    </div>
</template>

<script>


import store from "../../../store/store";

export default {
  name: "getTasks",

  props: {
    task: {
      type: Object,
      required: true,
    }
  },
  methods: {
    deletedTask() {
      const data =  {
        id: 8
      };
      store.dispatch('deletedTask', data)
    }
  },
}

</script>

<style scoped>






</style>