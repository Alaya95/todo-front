<template>
  <div class="account_group_main">
    <div class="accounts" >
      <details>
        <summary>
          <label>

            {{ group.name}}

          </label>
          <div>
            <a href="#"><i class="fas fa-edit"></i></a>

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
  props: {
    group: {
      type: Object,
      required: true,
    }
  },
}

</script>

<style scoped>

.accounts {
  border: 1px solid #e0e0e0;
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
  margin: 0 10px 20px 5px;
  border-radius: 8px;
}
hr {
  margin: 0;
}

label {
  margin-top: 1rem;
  cursor: pointer;
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
  width: 99%;
  margin-left: 0.5rem;

}


</style>