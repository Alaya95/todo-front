<template>
  <div class="card col-xs-6 col-xl-7 m-sm-2 m-xl-3 account_groups">

    <div class="bigBlock">

      <div class="title">
        <p>Ваши группы</p>
       <router-link :to='{name: "usergroups"}'><i class="fas fa-ellipsis-h"></i></router-link>
       <!-- <i class="fas fa-ellipsis-h"></i>-->
      </div>

      <div class="tusks" >
        <AccountGroup
            v-for="group in getGroups.slice(0,4)"
            :key="group.item"
            group_prop.sync="group"
            v-bind:group="group"
        />

      </div>
      <div class="tusks">
        <button><i class="far fa-plus-square" v-on:click="show = !show;"> Cоздать группу</i>
          </button>
          <popupGroup
              v-if="show"
              @closePopup="ClosePopup"
          />
      </div>
    </div>
  </div>

</template>
<script>
import AccountGroup from "./AccountGroup";
import popupGroup from "./popupGroup";
import {mapGetters} from "vuex";
import store from "@/store/store";

export default {
  name: "AccountGroupBlock",
  components: {AccountGroup,popupGroup},
  data() {
    return {
      show: false,

    }
  },

  methods: {
    ClosePopup() {
      this.show = false;
    },

    removeGroup(id) {
      const data =  {
        id: id
      }
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


.fa-plus-square:hover{
  color: #3f8778;
}
button {
  background: transparent;
  border: none;
  outline: none;
  margin: 0.7rem;

}

.card{
  width: 96%;
  height: 100%;
}
.bigBlock{

  height: 100%;
}

</style>