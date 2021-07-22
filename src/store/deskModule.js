import api from "../modules/api";

export default {
    state: () => ({
        columns: [],
        isLouded: false
    }),
    getters: {
        getDesk(state) {
            return state.columns;
        },
        /*  getDeskStatus(state) {
              return state.isLoaded
          }*/
    },
    mutations: {
        //setDesk(state, data) {
        //  state.columns = data;
        //},
        fetchDesk(state, data) {
            state.columns = data;
            state.isLouded = true
        },
        createTask(state, data) {
            const tasks = {
                id: data.id,
                title: data.name,
                text: data.description,
                status: data.task_status,
                attachable: 0,
                comments: 0,
                order: null,
                deadline: null,
            };

            state.columns.forEach((column) => {
                column.id === data.column_id && column.tasks.push(tasks)
            })
        },
        editTask(state, data) {
            const task = {
                id: data.id,
                title: data.name,
                text: data.description,
                status: data.task_status,
                attachable: data.attachments,
                comments: data.comments,
                order: data.order,
                deadline: data.deadline,
            };

            state.columns.forEach((column) => {
                column.id === data.column_id &&
                column.tasks.splice(column.tasks.findIndex(({id}) => id == task.id), 1, task)
            });
        },
        deleteTask(state, data) {
            state.columns.forEach((column) => {
                column.tasks = column.tasks.filter(({id}) => id != data.id)
            });
        },
        createColumn(state, data) {
            const column = {
                id: data.id,
                title: data.title,
                tasks: []
            }
            state.columns.push(column);
        },
        editColumn(state, data) {
            state.columns.forEach((column) => {
                column.id === data.id && (column.title = data.title)
            })
        },
        deleteColumn(state, data) {
            state.columns.splice(state.columns.findIndex((column) => column.id == data.id), 1)
        },
        moveTask(state, {e, id, order}) {
            const card_id = parseInt(e.dataTransfer.getData("card_id"));
            const board = state.columns.find((column) => id === column.id);

            let card = null;
            state.columns.forEach(({tasks}) => {
                const index = tasks.findIndex((task) => card_id === task.id);
                index !== -1 && (card = {...tasks[index]});
                index !== -1 && tasks.splice(index, 1);
            })
            !order ? board.tasks.push(card) : board.tasks.splice(order - 1, 0, card);
            state.columns.forEach(({tasks}) => tasks.forEach((task, index) => {
                task.order = index + 1
            }));
        }
    },
    actions: {
        async moveTask({commit}, obj) {
            commit("moveTask", obj);
        },
        async fetchDesk({commit}, data) {
            try {
                const result = await api('board/' + data.id)
                if (result) {
                    commit("fetchDesk", result);
                }
            } catch (error) {
                console.log(error)
            }
        },
        async createTask({commit}, data) {
            try {
                const result = await api('task/store', "POST", data);

                if (!result.message) {
                    commit("createTask", result);
                }
            } catch (error) {
                console.log(error)
            }
        },
        async editTask({commit}, data) {
            try {
                const result = await api('task/' + data.id, "put", data)

                if (!result.message) {
                    commit('editTask', result)
                }
            } catch (error) {
                console.log(error)
            }
        },
        async deleteTaskColumn({commit}, data) {
            try {
                const result = await api('task/' + data.id, "delete", data)

                if (result.message == 'Задача удалена') {
                    commit('deleteTask', data);
                }
            } catch (error) {
                console.log(error)
            }
        },
        async createColumn({commit}, data) {
            try {
                const result = await api('column/store', 'POST', data)

                if (!result.message) {
                    commit('createColumn', result);
                }
            } catch (error) {
                console.log(error)
            }

        },
        async editColumn({commit}, data) {
            try {
                const result = await api('column/' + data.id, "put", data)

                if (!result.message) {
                    commit('editColumn', result)
                }
            } catch (error) {
                console.log(error)
            }
        },
        async deleteColumn({commit}, data) {
            try {
                const result = await api('column/' + data.id, "delete", data)

                if (result.message == "Колонка удалена") {
                    commit('deleteColumn', data)
                }
            } catch (error) {
                console.log(error)
            }
        },
    }
};


