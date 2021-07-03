<template>

  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid">
      <a class="navbar-brand text-white font-size__brand logo" href="#">
        <i class="fas fa-tasks icon"></i>
        Kanban
      </a>

      <button
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
          class="navbar-toggler"
          data-bs-target="#navbarTogglerDemo02"
          data-bs-toggle="collapse"
          type="button"
      >
        <span class="navbar-toggler-icon text-white"></span>
      </button>

      <div
          id="navbarTogglerDemo02"
          class="collapse navbar-collapse justify-content-end"
      >
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 nav-align">

          <li class="nav-item dropdown">
            <a
                v-pre
                id="navbarDropdown"
                aria-expanded="false"
                aria-haspopup="true"
                class="nav-link text-white font-size__link"
                data-toggle="dropdown"
                href="#"
                role="button"
            >
              <i class="fas fa-chevron-down"></i>
            </a>

            <div
                aria-labelledby="navbarDropdown"
                class="dropdown-menu dropdown-menu-right color__bg-nav text-white"
            >
              <a class="dropdown-item font-size__link text-white" href="#"></a>

              <a
                  class="dropdown-item font-size__link text-white"
                  href="account"
              >
                Account
              </a>

              <form
                  id="logout-form"
                  action="#"
                  class="d-none"
                  method="POST"
              ></form>
            </div>
          </li>

          <li class="nav-item mr-4">
            <a class="text-white font-size__link" href="#">Войти</a>
          </li>

          <li class="nav-item">
            <a class="text-white font-size__link" href="#">Регистрация</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>