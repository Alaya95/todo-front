<template>
  <div class="account_group_main">
    <div class="accounts" >
      <details>
        <summary>
          <label class="visible_label" v-if="show">
            <div class="group_name">{{group.name}}</div>
          </label>
          <label v-if="!show">
            <input type="hidden" ref="group_id" :id="group.id">
            <input class="edit_group_name" type="text" :value="group.name" style="background: #414141"
                   id="group_name" name="group_name" ref="group_name"
            >
          </label>
          <div class="edit_btns">
          <button
              v-if="!show"><i class="fas fa-pen-fancy" v-on:click="editGroupName"></i>
          </button>
          <button
              v-if="!show"><i class="far fa-trash-alt" v-on:click="removeGroup"></i>
          </button>
          </div>
          <div>
           <button><i class="fas fa-edit" v-on:click="show = !show;"></i></button>
          </div>
        </summary>
        <div>
        <hr>
        <div class="account_block">
        <p>Участники</p>
          <div class="members_block">
          <GroupMembers
              v-for="users in group.pivot"
              :key="users.id"
              users_prop.sync="users"
              v-bind:users="users"
          />
          </div>
        </div>
        <hr>
        <div class="account_block boards_block">
          <p>Доски группы</p>
          <GroupBoards
              v-for="board in group.boards"
              :key="board.item"
              board_prop.sync="board"
              v-bind:board="board"


          />

        </div>
        </div>

      </details>
    </div>
  </div>

</template>

<script>
import GroupMembers from "./GroupMembers";
import GroupBoards from "./GroupBoards";
export default {

  name: "getGroups",

  components: {GroupBoards, GroupMembers},
  data() {
    return {
      show: true,

    }
  },


  props: {
    group: {
      type: Object,
      required: true,
    }
  },

  methods:{
    editGroupName(){
      const data = {
        id: this.$refs.group_id.id,
        name: this.$refs.group_name.value
      }
      this.$store.dispatch('editGroup' , data);
    },

    removeGroup(){
      const data = {
        id: this.$refs.group_id.id,
      }
      this.$store.dispatch('deleteGroup' , data);
    }
  }
}

</script>

<style scoped>
.account_group_main {
  width: 98%;
}

.edit_btns{
  margin-left: 40%;
}
button {
  background: transparent;
  border: none;
  outline: none;
}
.fa-trash-alt:hover,
.fa-pen-fancy:hover,
.fa-edit:hover,
.fas:hover{
  color: #03ff6b;
  transition-duration: 0.75s;
}


.fa-trash-alt{
  color: #3f8778;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1;
  box-sizing: border-box;
  cursor: pointer;
  padding: 1rem;
}
.fa-pen-fancy{
  color: #3f8778;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1;
  box-sizing: border-box;
  cursor: pointer;
  padding: 1rem;
}

.edit_group_name{
  border: none;
  width: 100%;
}

.group_name{
  background: #414141;
  border: none;
  outline: none;
  width: 100%;
}


.accounts details + details {
  border-top: 1px solid #e0e0e0;
}
.accounts summary {
  color: #4d5895;
}
.accounts details div {
  overflow: hidden;
}
.accounts details[open] div {
  animation: accounts 1s;
}
@keyframes accounts {
  0%   {max-height: 0;}
  100% {max-height: 10em;}
}

.boards_block{
  flex-direction: column;
}

.members_block{
  width: 75%;
  display: flex;
  justify-content: center;
}

.account_block {
  height: 100%;
  display: flex;
  padding: 1rem;

}

.fa-edit::before {
  content: "\f044";
  color: #3f8778;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1;
  box-sizing: border-box;
  cursor: pointer;
  padding: 1rem;
}
.accounts {
  min-height: 60px;
  width: initial;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #32B9A1;
  margin: 0 0 20px 0;
  border-radius: 8px;
}
hr {
  margin: 0;
}

label {
  margin-top: 1rem;
  cursor: pointer;
  width: 50%;
}
.visible_label{
  margin-top: 1rem;
  width: auto;
}

details{
  width: 100%;
  height: auto;
}
summary {
  display: flex;
  background: #414141;
  justify-content: space-between;
  min-height: 55px;
  margin-bottom: 1px;
  width: 95%;
  margin-left: 0.5rem;

}


</style>