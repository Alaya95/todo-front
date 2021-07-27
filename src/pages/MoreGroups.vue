<template>

  <div>
<div class="account-content groups-search">
<NavbarAccount/>

  <div class="tusk">
  <div class="search">
    <form @submit.prevent="search(searchValue)">
      <input class="input_search" type="text" placeholder="Поиск по всем группам..." v-model="searchValue">
      <button type="submit"><i class="fas fa-search" ></i></button>
    </form>
  </div>
  <div class="show-groups" v-bind:groups="SearchValue" v-if="SearchValue.length">
    <DetailsGroupSpoiler
        v-for="group in SearchValue"
        :key="group.item"
        todo_prop.sync="group"
        v-bind:group="group"/>
  </div>
    <div v-else> По вашему запросу ничего не нашли</div>

  </div>
</div>

</div>

</template>

<script>

import NavbarAccount from "../components/account/NavbarAccount";
import DetailsGroupSpoiler from "../components/moreDetailed/DetailsGroupSpoiler";
import {mapGetters} from "vuex";
import {mapActions} from "vuex";

export default {
  name: "MoreGroups",
  components: {
    DetailsGroupSpoiler,
    NavbarAccount,
  },
  data(){
    return {
      searchValue: '',
    }
  },
  methods: {
    fetchAllGroups() {
      this.$store.dispatch('fetchAllGroups');
    },
    ...mapActions(['findSearchValue']),

    search(value){
      this.findSearchValue(value);
      this.searchValue = '';
    },
    searchGroup(value){
        if (value) {
          return ([...this.getAllGroups].filter(function (item) {
            return item.name.toLowerCase().includes(value.toLowerCase())
          }))
        } else {
          return this.getAllGroups;
        }
    }
  },
  computed: {

    SearchValue(){
      return this.searchGroup(this.getSearchValue);
    },

    ...mapGetters([
      //'getGroups',
      'getAllGroups',
      'getSearchValue',
    ]),
  },

  mounted() {

    this.fetchAllGroups();
  },

}

</script>


<style scoped>
.tusk {
  width: 50%;
}

.show-groups {
  width: 94%;
  /*margin-left: 3%;*/
}
.input_search {
  height: 60px;
  /*width: 70%;*/
  width: 92.5%;
  color: #212529;
  padding: 10px;
  /*margin-bottom: 5%;*/
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
  margin-top: 3%;
  margin-bottom: 3%;
  /*margin: 5%;*/
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
  /*padding: 10px;*/
  border: 2px solid #32B9A1;
  border-radius: 8px;
  /*width: inherit;*/
  margin-left: 0.5%;
}
</style>