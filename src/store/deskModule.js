import api from "../modules/api";

export default {
    state: () => ({
        columns: [],
        isLouded: false
    }),
    /* state: () => ({
       columns: [
         {
           id: 1,
           title: "Backlog",
           tasks: [
             {
               id: 1,
               order: 1,
               title: "Название подзадачи",
               text:
                   "Тут допустим будет написано описание задачи или вывод фото. можно просто вывести здесь статусы. нужно основательно подумать что мы хотим тут увидеть",
               comments: "99+",
               attachable: "5+",
               status: "Статус",
             },
             {
               id: 2,
               order: 2,
               title: "Название подзадачи",
               text:
                   "Тут допустим будет написано описание задачи или вывод фото. можно просто вывести здесь статусы. нужно основательно подумать что мы хотим тут увидеть",
               comments: "99+",
               attachable: "5+",
               status: "Статус",
             },
             {
               id: 3,
               order: 3,
               title: "Название подзадачи",
               text:
                   "Тут допустим будет написано описание задачи или вывод фото. можно просто вывести здесь статусы. нужно основательно подумать что мы хотим тут увидеть",
               comments: "99+",
               attachable: "5+",
               status: "Статус",
             },
             {
               id: 4,
               order: 4,
               title: "Название подзадачи",
               text:
                   "Тут допустим будет написано описание задачи или вывод фото. можно просто вывести здесь статусы. нужно основательно подумать что мы хотим тут увидеть",
               comments: "99+",
               attachable: "5+",
               status: "Статус",
             },
             {
               id: 5,
               order: 5,
               title: "Название подзадачи",
               text:
                   "Тут допустим будет написано описание задачи или вывод фото. можно просто вывести здесь статусы. нужно основательно подумать что мы хотим тут увидеть",
               comments: "99+",
               attachable: "5+",
               status: "Статус",
             },
             {
               id: 6,
               order: 6,
               title: "Название подзадачи",
               text:
                   "Тут допустим будет написано описание задачи или вывод фото. можно просто вывести здесь статусы. нужно основательно подумать что мы хотим тут увидеть",
               comments: "99+",
               attachable: "5+",
               status: "Статус",
             },
           ],
         },
         {
           id: 2,
           title: "Backlog",
           tasks: [
             {
               id: 7,
               order: 1,
               title: "Название подзадачи",
               text:
                   "Тут допустим будет написано описание задачи или вывод фото. можно просто вывести здесь статусы. нужно основательно подумать что мы хотим тут увидеть",
               comments: "99+",
               attachable: "5+",
               status: "Статус",
             },
             {
               id: 8,
               order: 2,
               title: "Название подзадачи",
               text:
                   "Тут допустим будет написано описание задачи или вывод фото. можно просто вывести здесь статусы. нужно основательно подумать что мы хотим тут увидеть",
               comments: "99+",
               attachable: "5+",
               status: "Статус",
             },
             {
               id: 9,
               order: 3,
               title: "Название подзадачи",
               text:
                   "Тут допустим будет написано описание задачи или вывод фото. можно просто вывести здесь статусы. нужно основательно подумать что мы хотим тут увидеть",
               comments: "99+",
               attachable: "5+",
               status: "Статус",
             },
             {
               id: 10,
               order: 4,
               title: "Название подзадачи",
               text:
                   "Тут допустим будет написано описание задачи или вывод фото. можно просто вывести здесь статусы. нужно основательно подумать что мы хотим тут увидеть",
               comments: "99+",
               attachable: "5+",
               status: "Статус",
             },
             {
               id: 11,
               order: 5,
               title: "Название подзадачи",
               text:
                   "Тут допустим будет написано описание задачи или вывод фото. можно просто вывести здесь статусы. нужно основательно подумать что мы хотим тут увидеть",
               comments: "99+",
               attachable: "5+",
               status: "Статус",
             },
             {
               id: 12,
               order: 6,
               title: "Название подзадачи",
               text:
                   "Тут допустим будет написано описание задачи или вывод фото. можно просто вывести здесь статусы. нужно основательно подумать что мы хотим тут увидеть",
               comments: "99+",
               attachable: "5+",
               status: "Статус",
             },
           ],
         },
         {
           id: 3,
           title: "Backlog",
           tasks: [
             {
               id: 13,
               order: 1,
               title: "Название подзадачи",
               text:
                   "Тут допустим будет написано описание задачи или вывод фото. можно просто вывести здесь статусы. нужно основательно подумать что мы хотим тут увидеть",
               comments: "99+",
               attachable: "5+",
               status: "Статус",
             },
             {
               id: 14,
               order: 2,
               title: "Название подзадачи",
               text:
                   "Тут допустим будет написано описание задачи или вывод фото. можно просто вывести здесь статусы. нужно основательно подумать что мы хотим тут увидеть",
               comments: "99+",
               attachable: "5+",
               status: "Статус",
             },
             {
               id: 15,
               order: 3,
               title: "Название подзадачи",
               text:
                   "Тут допустим будет написано описание задачи или вывод фото. можно просто вывести здесь статусы. нужно основательно подумать что мы хотим тут увидеть",
               comments: "99+",
               attachable: "5+",
               status: "Статус",
             },
             {
               id: 16,
               order: 4,
               title: "Название подзадачи",
               text:
                   "Тут допустим будет написано описание задачи или вывод фото. можно просто вывести здесь статусы. нужно основательно подумать что мы хотим тут увидеть",
               comments: "99+",
               attachable: "5+",
               status: "Статус",
             },
             {
               id: 17,
               order: 5,
               title: "Название подзадачи",
               text:
                   "Тут допустим будет написано описание задачи или вывод фото. можно просто вывести здесь статусы. нужно основательно подумать что мы хотим тут увидеть",
               comments: "99+",
               attachable: "5+",
               status: "Статус",
             },
             {
               id: 18,
               order: 6,
               title: "Название подзадачи",
               text:
                   "Тут допустим будет написано описание задачи или вывод фото. можно просто вывести здесь статусы. нужно основательно подумать что мы хотим тут увидеть",
               comments: "99+",
               attachable: "5+",
               status: "Статус",
             },
           ],
         },
         {
           id: 4,
           title: "Backlog",
           tasks: [
             {
               id: 19,
               order: 1,
               title: "Название подзадачи",
               text:
                   "Тут допустим будет написано описание задачи или вывод фото. можно просто вывести здесь статусы. нужно основательно подумать что мы хотим тут увидеть",
               comments: "99+",
               attachable: "5+",
               status: "Статус",
             },
             {
               id: 20,
               order: 2,
               title: "Название подзадачи",
               text:
                   "Тут допустим будет написано описание задачи или вывод фото. можно просто вывести здесь статусы. нужно основательно подумать что мы хотим тут увидеть",
               comments: "99+",
               attachable: "5+",
               status: "Статус",
             },
             {
               id: 21,
               order: 3,
               title: "Название подзадачи",
               text:
                   "Тут допустим будет написано описание задачи или вывод фото. можно просто вывести здесь статусы. нужно основательно подумать что мы хотим тут увидеть",
               comments: "99+",
               attachable: "5+",
               status: "Статус",
             },
             {
               id: 22,
               order: 4,
               title: "Название подзадачи",
               text:
                   "Тут допустим будет написано описание задачи или вывод фото. можно просто вывести здесь статусы. нужно основательно подумать что мы хотим тут увидеть",
               comments: "99+",
               attachable: "5+",
               status: "Статус",
             },
             {
               id: 23,
               order: 5,
               title: "Название подзадачи",
               text:
                   "Тут допустим будет написано описание задачи или вывод фото. можно просто вывести здесь статусы. нужно основательно подумать что мы хотим тут увидеть",
               comments: "99+",
               attachable: "5+",
               status: "Статус",
             },
             {
               id: 24,
               order: 6,
               title: "Название подзадачи",
               text:
                   "Тут допустим будет написано описание задачи или вывод фото. можно просто вывести здесь статусы. нужно основательно подумать что мы хотим тут увидеть",
               comments: "99+",
               attachable: "5+",
               status: "Статус",
             },
             {
               id: 25,
               order: 7,
               title: "Название подзадачи 123",
               text:
                   "Тут допустим будет написано описание задачи или вывод фото. можно просто вывести здесь статусы. нужно основательно подумать что мы хотим тут увидеть",
               comments: "99+",
               attachable: "5+",
               status: "Статус",
             },
           ],
         },
         {
           id: 5,
           title: "Backlog",
           tasks: [
             {
               id: 26,
               order: 1,
               title: "Название подзадачи",
               text:
                   "Тут допустим будет написано описание задачи или вывод фото. можно просто вывести здесь статусы. нужно основательно подумать что мы хотим тут увидеть",
               comments: "99+",
               attachable: "5+",
               status: "Статус",
             },
             {
               id: 27,
               order: 2,
               title: "Название подзадачи",
               text:
                   "Тут допустим будет написано описание задачи или вывод фото. можно просто вывести здесь статусы. нужно основательно подумать что мы хотим тут увидеть",
               comments: "99+",
               attachable: "5+",
               status: "Статус",
             },
             {
               id: 28,
               order: 3,
               title: "Название подзадачи",
               text:
                   "Тут допустим будет написано описание задачи или вывод фото. можно просто вывести здесь статусы. нужно основательно подумать что мы хотим тут увидеть",
               comments: "99+",
               attachable: "5+",
               status: "Статус",
             },
             {
               id: 29,
               order: 4,
               title: "Название подзадачи",
               text:
                   "Тут допустим будет написано описание задачи или вывод фото. можно просто вывести здесь статусы. нужно основательно подумать что мы хотим тут увидеть",
               comments: "99+",
               attachable: "5+",
               status: "Статус",
             },
             {
               id: 30,
               order: 5,
               title: "Название подзадачи",
               text:
                   "Тут допустим будет написано описание задачи или вывод фото. можно просто вывести здесь статусы. нужно основательно подумать что мы хотим тут увидеть",
               comments: "99+",
               attachable: "5+",
               status: "Статус",
             },
           ],
         },
       ],
     }),*/

    getters: {
        getDesk(state) {
            return state.columns;
        },
        getDeskStatus(state) {
            return state.isLoaded
        }
    },
    mutations: {
        //setDesk(state, data) {
        //  state.columns = data;
        //},
        fetchDesk(state, data) {
            state.columns = data;
            state.isLouded = true
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
        async fetchDesk({commit}) {
            try {
                const result = await api('board_1')
                if (result) {
                    commit("fetchDesk", result);
                }
            } catch (error) {
                console.log(error)
            }
        },
        // создать задачу
        async createTask({commit}, data) {
            try {
                const result = await api('task/store', "POST", data);
                if (!result.message) {
                    console.log(result)
                }
                console.log(result, commit);
            } catch (error) {
                console.log(error)
            }
        },
        // редактировать задачу
        async editTask({commit}, data) {
            try {
                // в юрл нужно передавать id самой задачи.
                const result = await api('task/' + data.id, "put", data)
                console.log(result, commit)
            } catch (error) {
                console.log(error)
            }
        },
        //удалить задачу
        async deleteTaskColumn({commit}, data) {
            try {
                // в юрл нужно передавать id самой задачи.
                const result = await api('task/' + data.id, "delete", data)
                console.log(result, commit)

            } catch (error) {
                console.log(error)
            }
        },
        async createColumn({commit}, data) {
            try {
                console.log(data)
                const result = await api('column/store','POST', data)

                if (result) {
                    console.log(result, commit)
                }
            } catch (error) {
                console.log(error)
            }

        },
        async editColumn({commit}, data) {
            try {
                // в юрл нужно передавать id самой задачи.
                const result = await api('column/' + data.id, "put", data)
                console.log(result, commit)
            } catch (error) {
                console.log(error)
            }
        },
        async deleteColumn({commit}, data) {
            try {
                // в юрл нужно передавать id самой задачи.
                const result = await api('column/' + data.id, "delete", data)
                console.log(result, commit)
            } catch (error) {
                console.log(error)
            }
        },
    }
};


