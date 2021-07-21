import api from "../modules/api";

const taskFormModule = {
    state: () => ({
        task: [],
        isLoaded: false
    }),
    mutations: {
        fetchTaskForm(state, data) {
            const comments = data.result.filter(function (comment) {
                return comment.task_id === (data.task_id);
            });
            state.task = {...state.task, comment: comments};
            state.isLoaded = true
        },
        getTask(state, task) {
            state.task = {...state.task, task: task}
            state.isLoaded = true
        },
        createComment(state, data) {
            state.task = {...state.task, comment: [...state.task.comment, data]};
        },
        editComment(state, data) {
            state.task.comment.splice(state.task.comment.findIndex((item) => item.id == data.id), 1, data)
        },
        deleteComment(state, data) {
            state.task.comment.splice(state.task.comment.findIndex((item) => item.id == data.id), 1)
        },

    },
    actions: {
        async fetchTaskFormComments({commit}, task_id) {
            try {
                const result = await api('comments')

                if (result) {
                    const data = {
                        task_id, result
                    }
                    commit('fetchTaskForm', data)
                }
            } catch (error) {
                console.log(error)
            }
        },
        async fetchTask({commit}, data) {
            try {
                const result = await api('task/' + data);

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
        getTaskFormComments(state) {
            return state.task.comment
        },
        getTask(state) {
            return state.task
        },

    }
}

export default taskFormModule;