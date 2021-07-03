<template>

  <div class="card-body bg-secondary-light text-white rounded">
    <span class="title-second task">Название подзадачи</span>
    <br>
    <p>
      Тут допустим будет написано описание задачи или вывод фото.
      можно просто вывести здесь статусы.
      нужно основательно подумать что мы хотим тут увидеть
    </p>

    <div class="card-body-nav-footer ">
      <div class="card-body-nav-footer-left">

        <a href="#">
          <img alt="" class="rounded" height="48" src="https://githut.com/mdo.png" width="48">
        </a>

        <a href="#" aria-current="page" class="nav-link active primary position-relative">
          <svg class="bi bi-chat">
            <use xlink:href="#bi-chat"/>
          </svg>

          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                99+
                <span class="visually-hidden">unread messages</span>
              </span>
        </a>

        <a href="#" aria-current="page" class="nav-link active primary position-relative">
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



</template>

<script>
export default {
  name: "TaskInColumn"
}
</script>

<style scoped>

</style>