<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
// import Index from "./pages/Index";
// import Account from "./pages/Account";
// import Board from "./pages/Board";
import Header from "./pages/Header";

export default {
  name: "App",
  components: {
    Header,
    // Board,
    // Index,
    // Account,
  },
};
</script>
