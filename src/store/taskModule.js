import api from "../modules/api";

const taskModule = {
    state: () => ({
        tasks: {},
        isLoaded: false,
    }),
    mutations: {
        setTasks(state, data) {
            state.tasks = data;
            state.isLoaded = true;
        },
    },
    actions: {
        async fetchTasks({ commit }) {
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
        getStatus(state){
            return state.isLoaded;
        },
        getTasks(state){
            return state.tasks;
        }
    },
};

export default taskModule;
