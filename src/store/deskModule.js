//import api from "../modules/api";


import api from "../modules/api";

const deskModule = {
    state: () => ({
        desk: [],
        isLouded: false
    }),
    mutations: {
        fetchDesk(state, data) {
            state.desk = data.desk;
            state.isLouded = true
            //return Promise.resolve(undefined);
        }
    },
    actions: {
        async fetchDesk({ commit }) {
            try {
                const result = await api('tasks')
                if (result) {
                 console.log(result);
                    return   commit(result);
                }
            } catch (error) {
                console.log(error)
            }
        },
        async createTask({ commit}, data) {
            const result = await api('task/store', "POST", data)
            console.log( result, commit)
        }
    },
    getters: {
        getDesk() {
            return this.state.desk
        }
    }
}

export default deskModule;