<template>
  <header>
    <div class="header-menu">
      <router-link :to="{ name: 'main' }" class="header-menu_logo">
        <i class="fas fa-tasks icon"></i>
        Kanban
      </router-link>
      <div class="header-menu_list">
        <ul>
          <li v-show="getAuthStatus" class="">
            <a @click="dropdownMenuOpen">
              <i class="fas fa-chevron-down"></i>
            </a>
            <div aria-labelledby="navbarDropdown" class="dropdownNavbar">
              <router-link :to='{name: "account"}'>{{ getUserData.name }}</router-link>
            </div>
          </li>
          <li
              v-show="!getAuthStatus"
              class="account-enter-button"
              @blur="closeLogin"
          >
            <a @click="openLogin">Войти</a>
            <LoginForm v-show="isOpenLogin" v-bind:closeLogin="closeLogin"/>
          </li>
          <li v-show="!getAuthStatus">
            <a @click="openRegister">Зарегистрироваться</a>
          </li>
        </ul>
      </div>
    </div>

    <div v-show="isOpen" class="dropdownMenu">
      <router-link :to='{name: "accountSettings"}' class="navbar-link__exit">Настройки</router-link>
      <a class="navbar-link__exit" @click="logout">
        <i class="fas fa-sign-out-alt"></i>
        Выход
      </a>
    </div>

    <RegistrForm v-show="isOpenRegister" v-bind:closeRegister="closeRegister"/>
  </header>
</template>

<script>
import RegistrForm from "./header/RegistrForm";
import LoginForm from "./header/LoginForm";
import {mapGetters} from "vuex";

export default {
  name: "Header",
  components: {
    RegistrForm,
    LoginForm,
  },
  data: () => {
    return {
      isOpen: false,
      isOpenRegister: false,
      isOpenLogin: false,
    };
  },
  computed: {
    ...mapGetters([
      'getAuthStatus',
      'getUserData',
    ])
  },
  methods: {
    dropdownMenuOpen() {
      this.isOpen = !this.isOpen;
    },
    openRegister() {
      this.isOpenLogin = false;
      this.isOpenRegister = true;
    },
    closeRegister() {
      this.isOpenRegister = false;
    },
    openLogin() {
      this.isOpenRegister = false;
      this.isOpenLogin = true;
    },
    closeLogin() {
      this.isOpenLogin = false;
      console.log(this.isOpenLogin)
    },
    logout() {
      this.$store.dispatch("logout");
    }
  },
};
</script>

<style lang="scss">
@import "src/layout/scss/_header.scss";

//<style lang="scss" scoped>
//@import "src/layout/scss/header.scss";

</style>
