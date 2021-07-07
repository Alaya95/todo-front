<template>
  <header>
    <div class="container header-menu">
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
          <li class="dropdown">
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
            <div aria-labelledby="navbarDropdown">
              <a href="#"></a>

              <a href="account">Account</a>

              <form id="logout-form" action="#" method="POST"></form>
            </div>
          </li>

          <li
            @click="openLogin"
            @blur="closeLogin"
            class="account-enter-button"
          >
            <a href="#">Войти</a>
            <LoginForm v-show="isOpenLogin" v-bind:closeLogin="closeLogin" />
          </li>

          <li>
            <a @click="openRegister">Регистрация</a>
          </li>
        </ul>
      </div>
    </div>

    <RegistrForm v-show="isOpenRegister" v-bind:closeRegister="closeRegister" />

    <RegistrForm v-show="isOpen" v-bind:closeRegister="closeRegister"/>

  </header>

</template>

<script>
import RegistrForm from "./header/RegistrForm";
import LoginForm from "./header/LoginForm";

export default {
  name: "Header",
  components: {
    RegistrForm,
    LoginForm,
  },
  data: () => {
    return {
      isOpenRegister: false,
      isOpenLogin: false,
    };
  },
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
      console.log(123, this.isOpenLogin);
      this.isOpenLogin = false;
    },
  },
};
</script>


<style lang="scss">
@import "src/layout/scss/_header.scss";

//<style lang="scss" scoped>
  //@import "src/layout/scss/header.scss";

</style>
