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
                commit('setTasks', result)
                if (result.user) {
                    console.log(result.user);
                    commit("setUser", result);
                } else {
                    console.log(result);
                }
                return result;
            } catch (error) {
                console.log(error);
            }
        },
        //удалить задачу
        async deleteTask({ commit }, data) {
            try {
                // в юрл нужно передавать id самой задачи.
                const result = await api('task/' + data.id, "delete", data)
                console.log(result, commit)
                if (result) {
                    console.log(result)
                }
            } catch (error) {
                console.log(error)
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
