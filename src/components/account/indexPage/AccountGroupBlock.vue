<template>
  <div class="card col-xs-6 col-xl-7 m-sm-2 m-xl-3">
    <div class="bigBlock">

      <div class="title">
        <p>Ваши группы</p>
        <i class="fas fa-ellipsis-h"></i>
      </div>

      <div class="tusks" >
        <AccountGroup
            v-for="group in groups"
            :key="group.item"
            group_prop.sync="group"
            v-bind:group="group"
        />

      </div>
    </div>
  </div>

</template>
<script>
import AccountGroup from "./AccountGroup";

export default {
  name: "AccountGroupBlock",
  components: {AccountGroup},
  //props: ['groups'],
  data(){
    return {
      groups: [],
    }
  },

  mounted() {
    fetch('http://f0557894.xsph.ru/api/groups')
        .then(response => response.json())
        .then(json =>
            this.groups = json)
  }

}
</script>
<style scoped>

  button {
      width: inherit;
      display: block;
      color: #ffffff;
      font-size: 14px;
      background: #6E6E6E;
      outline: none;
      border: none;
      border-radius: 10px;
      padding: 5px 10px;
      margin: 0 0 5px 0;
}


</style>