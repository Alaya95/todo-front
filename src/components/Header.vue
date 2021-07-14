<template>
  <header>
    <div class="header-menu">
      <router-link class="header-menu_logo" :to="{ name: 'main' }">
        <i class="fas fa-tasks icon"></i>
        Kanban
      </router-link>

      <button

        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
        class="header-dropdown"
        data-bs-target="#navbarTogglerDemo02"
        data-bs-toggle="collapse"
        type="button"

      >
        <span></span>
      </button>


      <div class="header-menu_list">
        <ul>
          <li v-show="getAuthStatus" class="">
            <a

              v-pre
              id="navbarDropdown"
              aria-expanded="false"
              aria-haspopup="true"
              data-toggle="dropdown"
              href="#"
              role="button"

            >
              <i class="fas fa-chevron-down"></i>
            </a>
            <div aria-labelledby="navbarDropdown" class="dropdownNavbar">
              <a href="#"></a>

              <router-link :to='{name: "account"}'>{{getUserData.name}}</router-link>

             <!-- <form id="logout-form" action="#" method="POST"></form>-->
            </div>
          </li>

          <li
            @blur="closeLogin"
            class="account-enter-button"
            v-show="!getAuthStatus"
          >

            <a @click="openLogin" >Войти</a>

            <LoginForm v-show="isOpenLogin" v-bind:closeLogin="closeLogin" />
          </li>

          <li v-show="!getAuthStatus">
            <a @click="openRegister">Регистрация</a>
          </li>
        </ul>
      </div>
    </div>
    <RegistrForm v-show="isOpenRegister" v-bind:closeRegister="closeRegister" />

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
  //watch: {
  //  getAuthStatus: (next)=>console.log(next),
  //  getUserData: (next)=>console.log(next),
  //},
  methods: {
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
  },
};
</script>


<style lang="scss">
@import "src/layout/scss/_header.scss";

//<style lang="scss" scoped>
  //@import "src/layout/scss/header.scss";

</style>
