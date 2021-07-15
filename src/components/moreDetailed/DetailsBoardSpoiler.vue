<template>

  <div>
    <div class="tusk accounts" >
      <details>
        <summary>
          <label class="group-name">
            Название доски
          </label>

          <div class="icons">
            <a href="#"><i class="fas fa-edit"></i></a>

            <a href="#">
              <i class="fas fa-trash-alt">
              </i></a>
          </div>

        </summary>

        <div class="group-description">
          <div class="group-users">
            <label>Задачи доски</label>
            <p>Задача 1</p>
            <p>Задача 2</p>
            <p>Задача 3</p>
          </div>
          <div class="group-desk">
            <label>Срок задачи</label>
            <p>20.07.2021</p>
            <p>20.07.2021</p>
            <p>20.07.2021</p>
          </div>
        </div>
      </details>
    </div>
  </div>
</template>


<script>


</script>

<style scoped>

.icons {
  margin-right: 15px;
  margin-top: 15px;
  display: flex;
  width: 7%;
  justify-content: space-around;
}
.tusk {

  width: 91%;
  min-height: 60px;
  /*width: initial;*/
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #32B9A1;
  margin: 0 10px 20px 5px;
  border-radius: 8px;
}
.accounts {
  /*height: 100%;*/
  overflow: hidden;
  width: initial;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 8px;
  background: #414141;

}
summary {
  display: flex;
  background: #414141;
  justify-content: space-between;
  min-height: 55px;
  margin-bottom: 1px;
  margin-left: 10px;

}

details {
  flex: 1 1 50px;
  background: #414141;
  text-align: justify;

}

.group-name {
  margin-top: 15px;
  pointer-events: none;
}

.group-description{
  display: flex;
  justify-content: space-between;
  pointer-events: none;
  padding-left: 20px;
  padding-right: 20px;
}
</style>