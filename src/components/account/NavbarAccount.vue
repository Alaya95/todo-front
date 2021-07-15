<template>
  <div class="navbar">

    <div class="navbar-link">

      <router-link :to='{name: "main"}'>Главная</router-link>
      <router-link :to='{name: "board"}'>Доски</router-link>
      <router-link :to='{name: "account"}'>Аккаунт</router-link>
      <router-link :to='{name: "tasks"}'>Страница задачи</router-link>
      <!-- <router-link :to='{name: "detailsGroup"}'>Мои группы</router-link>
      <router-link :to='{name: "detailsBoard"}'>Мои доски</router-link> -->
      <router-link :to='{name: "detailsTasks"}'>Мои задачи</router-link>

    </div>
    <div class="navbar-link">
      <a @click="logout" class="navbar-link__exit">
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