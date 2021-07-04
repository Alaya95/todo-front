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
          <a href="#">Регистрация</a>
        </li>
      </ul>
    </div>
  </div>
</header>

</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="scss">
@import "src/layout/scss/_header.scss";
</style>