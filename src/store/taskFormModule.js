import api from "../modules/api";

const taskFormModule = {
    state: () => ({
        task: [],
        isLoaded: false
    }),
    mutations: {
        fetchTaskForm(state, data) {

            const comments = data.result.filter(function (comment) {
                return comment.task_id === parseInt(data.task_id);
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
            console.log(data)
        },


    },
    actions: {
// получить все комментарии
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
//получить задачу по ID
        async fetchTask({commit}, data) {
            try {
                const result = await api('task/' + data);
                commit('getTask', result)

            } catch (error) {
                console.log(error);
            }
        },

        // записать комментарий
        async createTaskFormComment({commit}, data) {
            try {
                const result = await api('comment/store', "POST", data);

                if (!result.message) {
                    commit("createComment", result);
                    console.log(result)
                }

            } catch (error) {
                console.log(error)
            }

        },
        // редактировать комментарий
        async editTaskFormComment({commit}, data) {
            try {

                const result = await api('comment/' + data.id, "put", data)
                if (!result.message) {
                    commit("createComment", result);

                }
            } catch (error) {
                console.log(error)
            }
        },
        //удалить комментарий
        async deleteTaskFormComment({commit}, data) {

            try {
                // в юрл нужно передавать id самой задачи.
                const result = await api('comment/' + data.id, "delete", data)
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
        getTaskFormComments(state) {
            return state.task.comment
        },
        getTask(state) {
            return state.task
        },


    }

}

export default taskFormModule;