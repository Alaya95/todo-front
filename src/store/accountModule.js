import api from "../modules/api";


const accountModule = {
    state: () => ({
        boards: [], //сохраняем данные
        groups: [],
        tasksall: [],
        tasksStatistics: [],
        allGroups: [],
        searchValue: '',
        isLoaded: false,

    }),
    mutations: {
        setBoards(state, data) {
            state.boards = data;
            state.isLoaded = true;
        },
        setGroups(state, data) {
            state.groups = data;
            state.isLoaded = true;
        },
        setTasksAll(state, data) {
            state.tasksall = data;
            state.isLoaded = true;
        },
        tasksStatistics(state, data) {
            state.tasksStatistics = data;
            state.isLoaded = true;
        },
        setAllGroups(state, data) {
            state.allGroups = data;
            state.isLoaded = true;
        },
        setSearchValue(state, value){
            state.searchValue = value;
            state.isLoaded = true;
        },
        createGroup(state, data){
            state.groups.push(data);
            console.log(state);
        },
        editGroup(state, data){

            state.groups.forEach((group) => {
                group.id === data.id && (group.name = data.name)
            })
        },
        deleteGroup(state, data) {
            state.groups.splice(state.groups
                .findIndex((group) => group.id == data.id), 1)
        }


    },
    actions: {

        async fetchBoards({commit}) {
            try {
                const result = await api("boards");
                commit('setBoards', result)
            } catch (error) {
                console.log(error);
            }
        },
        async fetchGroups({commit}) {
            try {
                const result = await api("groups_user");
                commit('setGroups', result)
            } catch (error) {
                console.log(error);
            }
        },
        async fetchAllGroups({commit}) {
            try {
                const result = await api("groups");
                commit('setAllGroups', result)
            } catch (error) {
                console.log(error);
            }
        },
        async fetchTasksAll({commit}) {
            try {
                const result = await api("tasks/naked_user");
                commit('setTasksAll', result)
            } catch (error) {
                console.log(error);
            }
        },
        async fetchTasksStatistics({commit}) {
            try {
                const result = await api("tasks/week");
                commit('tasksStatistics', result)
            } catch (error) {
                console.log(error);
            }
        },

        //удалить задачу
        async deleteBoard({ commit }, data) {
            try {
                // в юрл нужно передавать id самой задачи.
                const result = await api('board/' + data.id, "delete", data)
                console.log(result, commit)
                if (result) {
                    console.log(result)
                }
            } catch (error) {
                console.log(error)
            }
        },
        async deleteGroup({ commit }, data) {
            try {
                // в юрл нужно передавать id самой задачи.
                const result = await api('group/' + data.id, "delete", data)
                if (result) {
                    if (result.message.includes(
                        'SQLSTATE[23000]: Integrity constraint violation:' +
                        ' 1451 Cannot delete or update a parent row')){
                        console.log('Удалите доски из группы')
                    }else {
                        commit('deleteGroup', result)
                        console.log(result)
                    }
                }
            } catch (error) {
                console.log(error)
            }
        },
        async deleteTaskOne({ commit }, data) {
            try {
                // в юрл нужно передавать id самой задачи.
                const result = await api('task/' + data.id, "delete", data)
                console.log(result, commit)
                if (result) {
                    console.log(result)
                }
            } catch (error) {
                console.log(error)
            }
        },
        //создать группу
        async createGroup({ commit }, data) {
            try {
                // в юрл нужно передавать id самой задачи.
                const result = await api('group/store', 'post', data)

                console.log(result, commit)
                if (!result.message) {
                    commit('createGroup', result)
                    console.log(result)
                }
            } catch (error) {
                console.log(error)
            }
        },
        async editGroup({ commit }, data) {
            try {
                // в юрл нужно передавать id самой задачи.
                const result = await api('group/' + data.id, 'put', data)

                console.log(result, commit)
                if (!result.message) {
                    commit('editGroup', result)
                    console.log(result)
                }
            } catch (error) {
                console.log(error)
            }
        },
//для поиска
        findSearchValue({ commit }, value){
            commit('setSearchValue', value)

        },
    },
    getters: {
       //// getTaskStatus(state) {
       //     return state.isLoaded;
       // },
        getBoards(state) {
            return state.boards;
        },
        getGroups(state) {
            return state.groups;
        },
        getTasksAll(state) {
            return state.tasksall;
        },
        getTasksStatistics(state) {
            return state.tasksStatistics;
        },
        getAllGroups(state){
            return state.allGroups;
        },
        getSearchValue(state){
            return state.searchValue;
        }
    },
    /*
      state: () => ({
        tasks: {},
        isLoaded: false,
      }),
      mutations: {
        setTasks(state, data) {
          state.task = data;
          state.isAuth = true;
        },
      },
      actions: {

        async fetchTasks({ commit }) {
          try {
            const result = await api("tasks");
            console.log(result);
            if (result.user) {
              console.log(result.user);
              commit("setUser", result);
            } else {
              console.log(result);
            }
          } catch (error) {
            console.log(error);
          }
        },
      },
      getters: {
        getTaskStatus(state){
          return state.isLoaded;
        },
        getTasks(state){
          return state.tasks;
        }
      },
    */
};

export default accountModule;
