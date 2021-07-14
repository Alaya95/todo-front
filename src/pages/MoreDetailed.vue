<template>
  <div class="account-content">
    <NavbarAccount/>

    <div class="moreTask">
      <div class="task-list">
        <DetailsTaskSpoiler/>
      </div>
    </div>

  </div>
</template>

<script>
import NavbarAccount from "../components/account/NavbarAccount";
import DetailsTaskSpoiler from "../components/moreDetailed/DetailsTaskSpoiler";

export default {
  name: "MoreDetailed",
  components: {
    DetailsTaskSpoiler,
    NavbarAccount,
  },
}
</script>

<style lang="scss">
/* если включить scoped стили в блоке DetailsTaskSpoiler не работают! */
@import "src/layout/scss/moreDetailed.scss";
</style>