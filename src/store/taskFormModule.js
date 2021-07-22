import api from "../modules/api";

const taskFormModule = {
    state: () => ({
        task: [],
        isLoaded: false
    }),
    mutations: {
        getTask(state, data) {
            state.task = data
            state.isLoaded = true
        },
       createComment(state, data) {
           state.task[0].comments.push(data)
       },
        editComment(state, data) {
            state.task[0].comments.splice(state.task[0].comments.findIndex((comment) => comment.id == data.id), 1, data)
        },
        deleteComment(state, data) {
            state.task[0].comments.splice(state.task[0].comments.findIndex((comment) => comment.id == data.id), 1)
        }
    },
    actions: {
        async fetchTask({commit}, data) {
            try {
                const result = await api('task/' + data.id);
                if (result) {
                    commit('getTask', result)
                }
            } catch (error) {
                console.log(error);
            }
        },
        async createTaskFormComment({commit}, data) {
            try {
                const result = await api('comment/store', "POST", data);
                if (!result.message) {
                    commit("createComment", result);
                }
            } catch (error) {
                console.log(error)
            }
        },
        async editTaskFormComment({commit}, data) {
            try {
                const result = await api('comment/' + data.id, "put", data)
                if (!result.message) {
                    commit("editComment", result);
                }
            } catch (error) {
                console.log(error)
            }
        },
        async deleteTaskFormComment({commit}, data) {
            try {
                const result = await api('comment/' + data.id, "delete", data)
                if (result.message) {
                    commit('deleteComment', data)
                }
            } catch (error) {
                console.log(error)
            }
        },
    },
    getters: {
        getTask(state) {
            return state.task
        },
    }
}

export default taskFormModule;