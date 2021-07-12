import api from "../modules/api";

const taskModule = {
  state: () => ({
    tasks: {},
    isLoaded: false,
  }),
  mutations: {
    setTasks(state, data) {
      state.task = data;
      state.isAuth = true;
    },
  },
  actions: {
    async fetchTasks({ commit }) {
      try {
        const result = await api("tasks");
        console.log(result);
        if (result.user) {
          commit("setUser", result);
        } else {
          console.log(result);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    getTaskStatus(state){
      return state.isLoaded;
    },
    getTasks(state){
      return state.tasks;
    }
  },
};

export default taskModule;
