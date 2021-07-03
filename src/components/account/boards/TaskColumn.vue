<template>
  <div class="col-12 col-md-4 col-xl-3">
    <div class="card-body bg-secondary text-white rounded">
      <div class="card-body-nav ">
        <p class="card-title">Backlog</p>
        <a aria-current="page" class="nav-link active" href="#">
          <svg class="bi bi-three-dots-vertical">
            <use xlink:href="#dots"/>
          </svg>
        </a>
      </div>

      <TaskInColumn/>

      <!-- Остальные Задачи-->

      <div class="card-body bg-secondary-light text-white rounded">
        <span class="title-second task">Картинка</span>

        <div>
          <img alt="Img" class="rounded" src="#">
        </div>

        <div class="card-body-nav-footer ">
          <div class="card-body-nav-footer-left">
            <a href="#">
              <img alt="Photo" class="rounded" height="48" src="https://github.com/mdo.png" width="48">
            </a>

            <a aria-current="page" class=" nav-link active primary position-relative" href="#">
              <svg class="bi bi-chat">
                <use xlink:href="#bi-chat"/>
              </svg>

              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                99+
                <span class="visually-hidden">unread messages</span>
              </span>
            </a>

            <a aria-current="page" class=" nav-link active primary position-relative" href="#">
              <svg class="bi bi-paperclip">
                <use xlink:href="#bi-paperclip"/>
              </svg>

              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                5+
                <span class="visually-hidden">unread messages</span>
              </span>
            </a>
          </div>


          <div class="card-body-nav-footer-right">
            <span class="l-5 badge rounded-pill bg-success">статус</span>
          </div>
        </div>
      </div>

      <div class="card-body bg-secondary-light text-white rounded">
        <span class="title-second task">Заголовок 3</span>

        <br>

        <p>
          Тут допустим будет написано описание задачи или вывод фото.
          можно просто вывести здесь статусы.
          нужно основательно подумать что мы хотим тут увидеть
        </p>

        <div class="card-body-nav-footer ">
          <div class="card-body-nav-footer-left">
            <a href="#">
              <img alt="" class="rounded" height="48" src="https://github.com/mdo.png" width="48">
            </a>

            <a aria-current="page" class=" nav-link active primary position-relative" href="#">
              <svg class="bi bi-chat">
                <use xlink:href="#bi-chat"/>
              </svg>

              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                99+
                <span class="visually-hidden">unread messages</span>
              </span>
            </a>

            <a aria-current="page" class=" nav-link active primary position-relative" href="#">
              <svg class="bi bi-paperclip">
                <use xlink:href="#bi-paperclip"/>
              </svg>

              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                5+
                <span class="visually-hidden">unread messages</span>
              </span>
            </a>
          </div>

          <div class="card-body-nav-footer-right">
            <span class="l-5 badge rounded-pill bg-primary">Статус</span>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
import TaskInColumn from "./TaskInColumn";

export default {
  name: "TaskColumn",
  components: {TaskInColumn}
}
</script>

<style scoped>

</style>