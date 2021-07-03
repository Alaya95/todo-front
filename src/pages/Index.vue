<template>
  <div>
    <div class="container-fluid color__bg-nav">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand text-white font-size__brand" href="#">
            <img
              src="storage/index_page/Vector.svg"
              alt="brand"
              width="41"
              height="35"
              class="mr-2"
            />
            Kanban
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon text-white"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarTogglerDemo02"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a
                  id="navbarDropdown"
                  class="nav-link dropdown-toggle text-white font-size__link"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  v-pre
                >
                </a>

                <div
                  class="dropdown-menu dropdown-menu-right color__bg-nav text-white"
                  aria-labelledby="navbarDropdown"
                >
                  <a class="dropdown-item font-size__link text-white" href="#">
                  </a>
                  <a
                    class="dropdown-item font-size__link text-white"
                    href="account"
                    >Account</a
                  >

                  <form
                    id="logout-form"
                    action="#"
                    method="POST"
                    class="d-none"
                  ></form>
                </div>
              </li>
              <li class="nav-item mr-4">
                <a href="#" class="text-white font-size__link">Войти</a>
              </li>
              <li class="nav-item">
                <a href="#" class="text-white font-size__link">Регистрация</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <div class="container text-white">
      <div
        class="margin__content align-items-center d-flex flex-wrap justify-content-center"
      >
        <div class="width__content-left">
          <div>
            <h1 class="font-montserrat-subrayada font-size__content mb-2">
              KANBAN
            </h1>
            <p class="font-montserrat font-size__paragraph margin__bott">
              Идеальное пространство для самых разных задач. Место для тех кто
              любит планировать свое время
            </p>
            <a
              href="board"
              class="font-montserrat font-size__paragraph content-link margin__bott"
              >Начните прямо сейчас</a
            >
          </div>
        </div>
        <div class="text-center width__content-right">
          <img
            src="storage/index_page/feature-3.png"
            class="img-fluid"
            width="80%"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
@import "../layout/scss/app.scss";
</style>
