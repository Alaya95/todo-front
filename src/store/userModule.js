import api from "../modules/api";

const userModule = {
  state: () => ({
    user: {},
    isAuth: false,
  }),
  mutations: {
    setUser(state, data) {
      state.user = data.user;
      state.isAuth = true;
    },
  },
  actions: {
    async registerUser({ commit }, data) {
      try {
        const result = await api("register", "POST", data);
        if (result?.user) {
          localStorage.setItem("token", result.token);
          commit("setUser", result.user);
        } else {
          console.log(result);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async loginUser({ commit }, data) {
      try {
        const result = await api("login", "POST", data);
        if (result?.user) {
          localStorage.setItem("token", result.token);
          commit("setUser", result);
        } else {
          console.log(result);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async loginByToken({ commit }) {
      try {
        const result = await api("tasks");
        console.log(result);
        if (result.user) {
          console.log(result.user);
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
    getUserData(state){
      return state.user;
    },
    getAuthStatus(state){
      return state.isAuth;
    }
  },
};

export default userModule;
