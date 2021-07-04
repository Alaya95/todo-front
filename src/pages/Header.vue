<template>
  <header class="header">

    <div class="header__logo container">
      <a class="header__link " href="#">
        <i class="fas fa-tasks icon"></i>
        Kanban
      </a>
    </div>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <ul class="header__list">
      <li class="header__item">

        <div
            v-show="false"
            aria-labelledby="navbarDropdown"
            class=""
        >
          <a class="" href="#"></a>

          <a
              class=""
              href="account"
          >
            Account
          </a>
          <a
              v-pre
              id="navbarDropdown"
              aria-expanded="false"
              aria-haspopup="true"
              class="header__link"
              data-toggle="dropdown"
              href="#"
              role="button"
          >
            <i class="fas fa-chevron-down"></i>
          </a>
        </div>
      </li>

      <li class="header__item">
        <a class="header__link" href="#">Войти</a>
      </li>

      <li class="header__item">
        <a class="header__link" @click="changeVisibility">Регистрация</a>
      </li>
    </ul>
    <RegistrForm v-bind:isOpen="this.isOpen"/>
  </header>
</template>

<script>
import RegistrForm  from "../components/header/RegistrForm";
export default {
  name: "Header",
  component: {
    RegistrForm,
  },
  data: ()=>({
    isOpen: false,
  }),
  methods: {
    changeVisibility(){
      this.isOpen=!this.isOpen;
    }
  }
};
</script>

<style lang="scss" scoped>
 @import "../layout/scss/header.scss";
</style>
