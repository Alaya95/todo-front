<template>

  <div>
    <div class="account-content groups-search">
      <NavbarAccount/>


      <div class="test tusk">
        <div class="search">
          <form>
            <input type="text" placeholder="Искать здесь...">
            <button type="submit"><i class="fas fa-search"></i></button>
          </form>
        </div>

        <div class="show-groups">
          <DetailsBoardSpoiler
          v-for="board in getAllBoard"
          :key="board.id"
          :board="board"
          />
        </div>

      </div>
    </div>

  </div>

</template>

<script>
import NavbarAccount from "../components/account/NavbarAccount";
import DetailsBoardSpoiler from "../components/moreDetailed/DetailsBoardSpoiler";
import {mapGetters} from "vuex";

export default {
  name: "MoreBoards",
  components: {
    DetailsBoardSpoiler,
    NavbarAccount,
  },
  methods: {
    fetchBoards() {
      this.$store.dispatch('fetchBoards')
    },
  },
  mounted() {
    this.fetchBoards()
  },
  computed: {
    ...mapGetters(['getAuthStatus', "getAllBoard"])
  }

}

</script>


<style lang="scss" scoped>
.test {
  width: 100%;
}

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
  width: 85%;
  margin: 0 3%;


  & form {
    background:  #212529;
    display: flex;
    width: 100%;
  }
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