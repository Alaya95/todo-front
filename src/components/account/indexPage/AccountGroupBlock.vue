<template>
  <div class="bigBlock card account_groups">
    <div class="title">
      <p>Ваши группы</p>
      <!-- <router-link :to='{name: "usergroups"}'><i class="fas fa-ellipsis-h"></i></router-link>-->
      <i class="fas fa-ellipsis-h"></i>
    </div>
    <div class="tusks">
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
</template>
<script>
import AccountGroup from "./AccountGroup";
import popupGroup from "./popupGroup";
import {mapGetters} from "vuex";

export default {
  name: "AccountGroupBlock",
  components: {
    AccountGroup,
    popupGroup
  },
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
      const data = {
        id: id
      }
      this.$store.dispatch('deleteGroup', data)
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
<style scoped></style>