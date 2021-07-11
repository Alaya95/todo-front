<template>
  <div class="navbar">

    <div class="navbar-link">
      <router-link to="main">Главная</router-link>
      <router-link to="board">Доски</router-link>
      <router-link to="account">Аккаунт</router-link>
    </div>
    <div class="navbar-link">
      <a class="navbar-link__exit" href="#">
        <i class="fas fa-sign-out-alt"></i>
        Выход
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarAccount"
}
</script>

<style scoped>

</style>