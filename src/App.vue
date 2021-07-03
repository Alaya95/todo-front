<template>
  <div id="app">

    <Header />
    <Index v-show="false" />
    <Account v-show="false" />

    <Board />
  </div>
</template>

<script>
import Index from "./pages/Index";
import Account from "./pages/Account";
import Board from "./pages/Board";
import Header from "./pages/Header";

export default {
  name: "App",
  components: {
    Header,
    Board,
    Index,
    Account,
  },
};
</script>
