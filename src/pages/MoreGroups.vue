<template>

  <div>
<div class="account-content groups-search">
<NavbarAccount/>

  <div class="test tusk">
  <div class="search">
    <form @submit.prevent="onSubmit">
      <input type="text" placeholder="Искать здесь..." v-model="title">
      <button type="submit"><i class="fas fa-search"></i></button>
    </form>
  </div>
  <div class="show-groups" v-bind:groups="groups" v-if="groups.length">
    <DetailsGroupSpoiler
        v-for="group in groups"
        :key="group.item"
        todo_prop.sync="group"
        v-bind:group="group"/>
  </div>

  </div>
</div>

</div>

</template>

<script>

import NavbarAccount from "../components/account/NavbarAccount";
import DetailsGroupSpoiler from "../components/moreDetailed/DetailsGroupSpoiler";
//import {mapGetters} from "vuex";
//import store from "../../../store/store";
//http://127.0.0.1:8000/api/groups

export default {
  name: "MoreGroups",
  components: {
    DetailsGroupSpoiler,
    NavbarAccount,
  },

  data(){
    return {
      groups: [],
      title: '',
      arrayGroup: [],
    }
  },
  methods: {
    onSubmit(){
      //console.log('submit', this.title);
      if(this.title.trim()) {
        //console.log('submit', this.title);
        this.groups = this.groups.filter(function (item){
         // return item.name.toLowerCase() === this.title.toLowerCase();
          return item.name === this.title;

          //console.log(this.groups);
       // console.log(item.name);
        })
        console.log(this.groups);
        //console.log(this.groups.name);
        //this.title = '';
      }
    }
  },

  mounted() {
    fetch('http://f0557894.xsph.ru/api/groups')
        .then(response => response.json())
        .then(json =>
            this.groups = json)
    //console.log(this.groups);
  },


}

</script>


<style scoped>

.show-groups {
  width: 94%;
  margin-left: 3%;
}
input {
  height: 60px;
  width: 70%;
  color: #212529;
  padding: 10px;
}
.groups-search{
  display: flex;
  justify-content: flex-start;
  width: 100%;
}

.search {
  background:  #212529;
}
form {
  background:  #212529;
  display: flex;
  min-width: 100%;
}
.fa-search::before{
  font-size: 30px;
  border: none;
  outline: none;
  color: #212529;
}
button {
  border: none;
  outline: none;
  cursor: pointer;
  margin: 5px 10px 10px -48px;
  height: 50px;
  padding: 8px;
  background: #fff;
}
button,
button:active,
button:focus {
  outline: none;
}

.fas .fa-search{
  border: none;
  outline: none;
}

input {
  background: #ffffff;
  padding: 10px;
  border: 2px solid #32B9A1;
  border-radius: 8px;
  width: inherit;
}
</style>