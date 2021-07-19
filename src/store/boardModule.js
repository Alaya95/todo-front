//import api from "../modules/api";

import api from "../modules/api";

const boardModule = {
    state: () => ({
        boards: [],
        isLoaded: false
    }),
    mutations: {
        fetchBoards(state, data) {
            state.boards = data
            state.isLoaded = true
        },
        deleteBoard(state, data) {
            state.boards.splice(state.boards.findIndex((board) => board.id == data.id), 1)
        }
    },
    actions: {
        async fetchBoards({commit}) {
            try {
                const result = await api('boards')
                console.log(result)
                commit('fetchBoards', result)
            } catch (error) {

                console.log(error)
            }

        },
        async editBoards({commit}, data) {
            const result = await api('board/' + data.id, 'POST', data)
            console.log(result, data, commit)
        },
        async deleteBoard({commit}, data) {

            const result = await api('board/' + data.id, 'DELETE', data)
            if (result.message) {
                commit('deleteBoard', data)
                console.log(result, commit)
            }

        }
    },
    getters: {
        getAllBoard(state) {
            return state.boards
        }
    }
}

export default boardModule;