<template>
  <header>
    <div class="container header-menu">
      <a class="header-menu_logo" href="#">
        <i class="fas fa-tasks icon"></i>
        Kanban
      </a>

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

          <li>
            <a href="#">Войти</a>
          </li>

          <li>
            <a @click="openRegister">Регистрация</a>
          </li>
        </ul>
      </div>
    </div>
    <RegistrForm v-show="isOpen" v-bind:closeRegister="closeRegister"/>
  </header>

</template>

<script>
import RegistrForm from "./header/RegistrForm";

export default {
  name: "Header",
  components: {
    RegistrForm,
  },
  data: () => {
    return {
      isOpen: false,
    };
  },
  methods: {
    openRegister() {
      console.log(123);
      this.isOpen = true;
    },
    closeRegister() {
      this.isOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "src/layout/scss/header.scss";

</style>
