<template>
  <div class="bigBlock">

    <div class="title">
      <p>Ваши группы</p>
      <router-link :to='{name: "usergroups"}'><i class="fas fa-ellipsis-h"></i></router-link>
      <!-- <i class="fas fa-ellipsis-h"></i>-->
    </div>


    <div class="tusks">
      <AccountGroup
          v-for="group in paginatedGroups"
          :key="group.item"
          group_prop.sync="group"
          v-bind:group="group"
      />

    </div>
    <div class="tusks">
      <button><i class="far fa-plus-square" v-on:click="show = !show;"> Cоздать группу</i>
      </button>
      <popupGroup
          v-if="show"
          @closePopup="ClosePopup"
      />
      <div class="pagination">
        <div v-for="page in pages"
             :key="page"
             :class="{'page_selected' : page === pageNumber} "
             class="page"
             v-on:click="pageClick(page)"
        >{{ page }}

        </div>
      </div>
    </div>
  </div>

</template>
<script>
import AccountGroup from "./AccountGroup";
import popupGroup from "./popupGroup";
import {mapGetters} from "vuex";

export default {
  name: "AccountGroupBlock",
  components: {
    AccountGroup,
    popupGroup
  },
  data() {
    return {
      show: false,
      groupsCount: 4,
      pageNumber: 1,
    }
  },
  methods: {
    ClosePopup() {
      this.show = false;
    },
    removeGroup(id) {
      const data = {
        id: id
      }
      this.$store.dispatch('deleteGroup', data)
    },
    fetchGroups() {
      this.$store.dispatch('fetchGroups')
    },

    pageClick(page) {
      this.pageNumber = page;
    }
  },
  mounted() {
    this.fetchGroups();
  },
  computed: {
    ...mapGetters([
      'getGroups',
    ]),

    pages() {
      return Math.ceil(this.getGroups.length / 4)
    },

    paginatedGroups() {
      let from = (this.pageNumber - 1) * this.groupsCount;
      let to = from + this.groupsCount;

      return this.getGroups.slice(from, to);
    }
  },
}
</script>
<style scoped>
.page_selected {
  color: #3f8778;
}

.page:hover {
  color: #3f8778;
}

.page {
  padding: 10px;
  border: 1px solid #3f8778;
  cursor: pointer;
  margin-right: 10px;
}

.pagination {
  display: flex;
  justify-content: center;
}


.fa-plus-square:hover {
  color: #3f8778;
}

button {
  background: transparent;
  border: none;
  outline: none;
  margin: 0.7rem;

}

.card {
  width: 96%;
  height: 100%;
}

.bigBlock {

  height: 100%;
}

</style>

