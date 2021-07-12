//import api from "../modules/api";


import api from "../modules/api";

const deskModule = {
    state: () => ({
        desk: [],
        isLouded: false
    }),
    mutations: {
        fetchDesk(state, data) {
            state.desk = data;
            state.isLouded = true
        },
    },
    actions: {
        /* задачи */
        // получить все задачи
        async fetchDesk({commit}) {
            try {
                const result = await api('tasks')
                if (result) {
                    console.log(result)
                    commit("fetchDesk", result);
                }
            } catch (error) {
                console.log(error)
            }
        },
        // создать задачу
        async createTask({ commit }, data) {
            try {
                const result = await api('task/store', "POST", data);
                console.log(result, commit);

                if (result) {
                    console.log(result)
                }

            } catch (error) {
                console.log(error)
            }

        },
        // редактировать задачу
        async editTask({ commit }, data) {
            try {
                // в юрл нужно передавать id самой задачи.
                const result = await api('task/' + data.id, "put", data)
                console.log(result, commit)
                if (result) {
                    console.log(result)
                }
            } catch (error) {
                console.log(error)
            }
        },
        //удалить задачу
        async deleteTask({ commit }, data) {
            try {
                // в юрл нужно передавать id самой задачи.
                const result = await api('task/'+ data.id, "delete", data)
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
        getDesk(state) {
            return state.desk
        }
    }
}

export default deskModule;