import api from "../modules/api";

const userModule = {
  state: () => ({
    user: {},
    isAuth: false,
  }),
  mutations: {
    setUser(state, data) {
      state.user = data;
      state.isAuth = true;
    },
    removeUser(state) {
      state.user = {};
      state.isAuth = false;
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
          commit("setUser", result.user);
        } else {
          console.log(result);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async loginByToken({ commit }) {
      try {
        const result = await api("user");
        if (result.id) {
          commit("setUser", result);
        } else {
          console.log(result);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async logout({commit}){
      try {
        const result = await api("logout", "POST");
        if (result.message) {
          localStorage.removeItem("token");
          commit("removeUser");
        } else {
          console.log(result);
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
  getters: {
    getUserData(state){
      return state.user;
    },
    getUserName(state){
      return state.user.name;
    },
    getAuthStatus(state){
      return state.isAuth;
    }
  },
};

export default userModule;
