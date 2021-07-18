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
        updateDesk(state, data) {
            /* нужный и получаемый массив могут отличеться, поэтому
            проверяем полученные данные result
             */

            //полученный результат
           // console.log('result', result)
            /*board_id: 1
            column_id: 1
            created_at: "2021-07-17T08:35:43.000000Z"
            deadline: null
            executor_id: 1
            initiator_id: 1
            id: 83
            name: "dsad"
            description: "dasda"
            period: null
            task_status: 1
            task_topics_id: 1
            updated_at: "2021-07-17T08:35:43.000000Z"
           */


             // вид массив который нужно вложить в tasks.
             /*attachable:0
             comments:0
             deadline:null
             id:74
             order:null
             status:"1"
             text:"Это выполненное задание с сохраненным описанием."
             title:"Готовая задача."
            console.log(data)*/

            /*
            Из-за отличия этих массивов создаем новый массив, где присваиваем параметрам
            необходимые данные, что бы при обновлении или создании компонента не было конфликтов.
             */
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


            /*
                пробегаемся циклом по уже созданному массиву (Это массив который созхраняется в
                 state при создании страницы). ищем колонку, которая соответствует полученному id олонки и ответа, пришедшего при создании задачи с сервера, когда нужная колонка находится
                 добавляем созданный массив task в конец  массива tasks, который хранится в state
                создаем задачу. проверяем результат
             */
            state.columns.forEach((column) => {
                column.id === data.column_id && column.tasks.push(tasks)
            })
        },
        editDesk(state, data) {

            // вид получаемых данных от сервера.
            //board_id: 1
            //column_id: 1
            //created_at: "2021-07-17T08:22:47.000000Z"
            //deadline: null
            //deleted_at: null
            //description: "r"
            //executor_id: 1
            //id: 81
            //initiator_id: 1
            //name: "rf"
            //order: null
            //period: null
            //task_status: "1"
            //task_topics_id: 1
            //updated_at: "2021-07-17T20:18:26.000000Z"

            // создаем массив с такими же параметрами как у массива который сохранен в state
            const task = {
                id: data.id,
                title: data.name,
                text: data.description,
                status: data.task_status,
                attachable: 0,
                comments: 0,
                order: data.order,
                deadline: data.deadline,
            };

            /*
            находи колонку которая соответствует условию,
            затем редактируем ее, заменяя нужный нам элемент массива на массив task
             */
            state.columns.forEach((column) => {
                /*
                Первый аргумент задает начальный индекс.
                Второй задает количество элементов для замены.
                Третий и все последующие аргументы — это элементы, которые будут подставлены
                в массив.
                 */

                column.id === data.column_id &&
                column.tasks.splice(column.tasks.findIndex(({id}) => id == task.id), 1,task)
            });
        },
        deleteDesk(state, data) {
            /*
           находи колонку которая соответствует условию,
           затем ищем задачу с нужным id и удаляяем ее.
            */
            state.columns.forEach((column) => {
                column.tasks = column.tasks.filter(({id}) => id != data.id)
            });
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
                // если в возвращаемом результате нет сообщения, то в коммите
                // вызываем  нужную мутацию и передаем туда данные.
                if (!result.message) {
                    commit("updateDesk", result);
                } else {
                    console.log(result)
                }

            } catch (error) {
                console.log(error)
            }
        },
        // редактировать задачу
        async editTask({commit}, data) {
            try {
                // в юрл нужно передавать id самой задачи.
                const result = await api('task/' + data.id, "put", data)

                if (!result.message) {
                    console.log(result)
                    commit('editDesk', result)

                } else {
                    console.log(result, commit)
                }

            } catch (error) {
                console.log(error)
            }
        },
        //удалить задачу
        async deleteTaskColumn({commit}, data) {
            try {
                // в юрл нужно передавать id самой задачи.
                const result = await api('task/' + data.id, "delete", data)

                if (result.message == 'Задача удалена') {
                    // получаем сообщение об успешном удалении, вызываем мутацию
                    // для удалении задачи
                    // из массива state
                    commit('deleteDesk', data);
                } else {
                    console.log('не удалено')
                    console.log(result, commit)
                }
            } catch (error) {
                console.log(error)
            }
        },
        async createColumn({commit}, data) {
            try {
                console.log(data)
                const result = await api('column/store', 'POST', data)

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


