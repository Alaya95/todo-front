import api from "../modules/api";

const taskFormModule = {
    state: () => ({
        taskForm: [],
        task:[],
        isLoaded: false
    }),
    mutations: {
        fetchTaskForm(state, data) {
            state.taskForm = data;
            state.isLoaded = true
        },

        getTask(state,data) {
            state.task = data;
            state.isLoaded = true
        }

    },
    actions: {
// получить все комментарии
        async fetchTaskFormComments({commit}) {
            try {
                const result = await api('comments')
                commit('fetchTaskForm', result)
                if (result) {
                    console.log(result)

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
                console.log(result, commit);

                if (result) {
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
                console.log(result, commit)
                if (result) {
                    console.log(result)
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
            return state.taskForm
        },
        getTask(state) {
            return state.task[0]
        }

    }

}

export default taskFormModule;