<template>
  <div class="v-popup">
    <div class="v-popup__header">

      <form @submit.prevent=onSubmit>
        <p>Создать группу</p>
        <input type="text" placeholder="название группы" id="name_group" name="name_group" ref="name_group" >
       <!-- <input type="text" placeholder="участники группы" v-model="users"> v-model="name"-->
        <div class="btns">
          <button class="save close_modal" type="submit" >Сохранить</button>
        </div>

      </form>

      <div @click="closePopup" class="close">
        <i class="bi bi-x-lg"></i></div>
    </div>


  </div>
</template>

<script>
export default {
  data() {
    return {
     show: true,

    }
  },

  methods: {

    onSubmit(){
      const data = {
        name: this.$refs.name_group.value
      };
      this.$store.dispatch('createGroup', data);
      this.$refs.name_group.value = '';
      this.closePopup();

    },
    closePopup() {
      this.$emit('closePopup')
    }

  },


}
</script>

<style scoped lang="scss">
.close:hover .bi-x-lg {
  color: #32b9a1;
}

.bi {
  color: #ffffff;
  cursor: pointer;
}

.bi:hover{
  color: #32b9a1;
}
.v-popup{
  border-radius: 30px;
}

.save{
  //width: inherit;
  //display: block;
  color: #ffffff;
  font-size: 14px;
  background: #6E6E6E;
  outline: none;
  border: none;
  border-radius: 10px;
  margin-left: 1rem;
  //padding: 5px 10px;
  //margin: 18px 18px 5px 0;
}

p{
  color: #32b9a1;
  font-weight: 400;
  font-size: x-large;
}

form {
  display: flex;
  flex-direction: column;
  margin: 1rem;
  border-radius: 30px;
  width: 91%;
}

input{
  background: #414141;
  border: 2px solid #32B9A1;
  outline: none;
  width: 100%;
  min-height: 60px;
  margin-top: 1rem;
  border-radius: 8px;
  padding-left: 1rem;
}
@import "../../../layout/scss/popup";
</style>