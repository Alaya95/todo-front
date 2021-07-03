<template>
  <div class="d-flex flex-column flex-shrink-0 p-3 text-white navbar-style" style="width: 280px;">
    <a class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none logo" href="/">
      <svg class="bi me-2" height="32" width="40">
        <use xlink:href="#bootstrap"/>
      </svg>
      <i class="fas fa-tasks icon"></i>Kanban
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a aria-current="page" class="nav-link active" href="#">
          <svg class="bi me-2" height="16" width="16">
            <use xlink:href="#home"/>
          </svg>
          Главная
        </a>
      </li>
      <li>
        <a class="nav-link text-white" href="#">
          <svg class="bi me-2" height="16" width="16">
            <use xlink:href="#speedometer2"/>
          </svg>
          Dashboard
        </a>
      </li>
      <li>
        <a class="nav-link text-white" href="#">
          <svg class="bi me-2" height="16" width="16">
            <use xlink:href="#table"/>
          </svg>
          Мои доски
        </a>
      </li>
      <li>
        <a class="nav-link text-white" href="#">
          <svg class="bi me-2" height="16" width="16">
            <use xlink:href="#grid"/>
          </svg>
          Products
        </a>
      </li>
      <li>
        <a class="nav-link text-white" href="#">
          <svg class="bi me-2" height="16" width="16">
            <use xlink:href="#people-circle"/>
          </svg>
          Customers
        </a>
      </li>
    </ul>
    <hr>
    <div class="nav-item">
      <a class="exit" href="#"><i class="fas fa-sign-out-alt"></i> Выход</a>
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