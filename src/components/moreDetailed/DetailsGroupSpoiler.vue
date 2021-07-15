<template>

  <div>
    <div class="tusk accounts" >
      <details>
        <summary>
          <label class="group-name">
            {{ group.name }}
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
          <label>Участники группы</label>
          <p>user 1</p>
          <p>user 2</p>
          <p>user 3</p>
        </div>
        <div class="group-desk">
          <label>Доски группы</label>
          <p>desk 1</p>
          <p>desk 2</p>
          <p>desk 3</p>
        </div>
        </div>
      </details>
    </div>
  </div>
</template>


<script>
export default {
  name: "groups",

  props: {
    group: {
      type: Object,
      required: true,
    }
  },
}

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