<template>
  <div class="card col-xs-6 col-xl-7 m-sm-2 m-xl-3 account_groups">

    <div class="bigBlock">

      <div class="title">
        <p>Ваши группы</p>
        <router-link :to='{name: "usergroups"}'><i class="fas fa-ellipsis-h"></i></router-link>
      </div>

      <div class="tusks" >
        <AccountGroup
            v-for="group in getGroups.slice(0,4)"
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
import {mapGetters} from "vuex";
import store from "@/store/store";

export default {
  name: "AccountGroupBlock",
  components: {AccountGroup},


  methods: {
    removeGroup(id) {
      const data =  {
        id: id
      }
      //this.getTasks = this.getTasks.filter(t => t.id !== id)
      store.dispatch('deleteGroup', data)
    },

    fetchGroups() {
      this.$store.dispatch('fetchGroups')
    },
  },

  mounted() {
    this.fetchGroups();
  },
  computed: {
    ...mapGetters([
      'getGroups',
    ]),
  },

}
</script>
<style scoped>
.card{
  width: 96%;
}

</style>