<template>
  <div class="account-content">
    <NavbarAccount/>

    <div class="moreTask">
      <div class="task-list">
        <DetailsTaskSpoiler v-for="task in getTasks" :key="task.id" :task="task" />
      </div>
    </div>

  </div>
</template>

<script>
import NavbarAccount from "../components/account/NavbarAccount";
import DetailsTaskSpoiler from "../components/moreDetailed/DetailsTaskSpoiler";
import {mapGetters} from "vuex";

export default {
  name: "MoreDetailed",
  components: {
    DetailsTaskSpoiler,
    NavbarAccount,
  },
  computed: {
    ...mapGetters([
      'getTasks',
    ]),
  },
  methods: {
    fetchTasks() {
      this.$store.dispatch('fetchTasks');
      console.log(this.$store.dispatch('fetchTasks'))
    },
  },
  mounted() {
    this.fetchTasks();
  }
}
</script>

<style lang="scss">
/* если включить scoped стили в блоке DetailsTaskSpoiler не работают! */
@import "src/layout/scss/moreDetailed.scss";
</style>