<template>

  <div>
<div class="account-content groups-search">
<Navbar />

  <div class="test tusk">
  <div class="search">
    <form >
      <input type="text" placeholder="Поиск по всем группам..." v-model="searchValue">
      <button type="submit"><i class="fas fa-search" @click="search(searchValue)"></i></button>
    </form>
  </div>
  <div class="show-groups" v-bind:groups="SearchValue" v-if="SearchValue.length">
    <DetailsGroupSpoiler
        v-for="group in SearchValue"
        :key="group.item"
        todo_prop.sync="group"
        v-bind:group="group"/>
  </div>

  </div>
</div>

</div>

</template>

<script>

import Navbar from "../components/Navbar";
import DetailsGroupSpoiler from "../components/moreDetailed/DetailsGroupSpoiler";
import {mapGetters} from "vuex";
import {mapActions} from "vuex";

export default {
  name: "MoreGroups",
  components: {
    DetailsGroupSpoiler,
    Navbar,
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