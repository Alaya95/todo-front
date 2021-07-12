<template>
  <div class="navbar">

    <div class="navbar-link">
      <router-link :to='{name: "main"}'>Главная</router-link>
      <router-link :to='{name: "board"}'>Доски</router-link>
      <router-link :to='{name: "account"}'>Аккаунт</router-link>
    </div>
    <div class="navbar-link">
      <a @click="logout" class="navbar-link__exit" href="#">
        <i class="fas fa-sign-out-alt"></i>
        Выход
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarAccount",
  methods: {
    logout(){
      this.$store.dispatch("logout");
    }
  }
}
</script>

<style scoped>

</style>