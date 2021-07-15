<template>
    <form action="#" method="#">
        <div class="title">
            <!-- При нажатии на ссылку вызываем модальное окно о перемещении карточки в другую колонку, в идеале и на другую доску?-->
            <p>Название задачи </p>

            <p>в колонке <a href="#">В процессе</a></p>
        </div>

        <div>
            <div class="center">
                <div class="participants">
                    <p>Участники</p>
                    <div class="participantsLinks">
                        <a href="#">
                            <img src="../../assets/avatar.png" alt="avatar">
                        </a>
                        <a href="#">
                            <img src="../../assets/avatar.png" alt="avatar">
                        </a>
                        <a href="#">
                            <img src="../../assets/avatar.png" alt="avatar">
                        </a>
                        <a href="#">
                            <img src="../../assets/avatar.png" alt="avatar">
                        </a>
                        <a href="#">+</a>
                    </div>
                </div>

                <div class="description">
                    <p>Описание</p>
                    <p>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae consectetur, consequuntur dolore inventore modi nesciunt omnis pariatur placeat ratione reprehenderit sint vel vitae. Asperiores debitis deleniti dolores perferendis tempore.
                    </span>
                        <span>Accusantium aliquid, dolor eum excepturi, facere facilis illo incidunt molestiae, nihil porro provident quas ut? Accusamus assumenda deserunt dolorum eos facere iusto laudantium maxime nisi officiis, placeat quod suscipit temporibus.</span>
                    </p>
                </div>

                <div class="files">
                    <div class="fileTitle">
                        <p>Вложения</p>
                    </div>
                    <TaskFiles/>
                    <TaskFiles/>
                </div>

                <div class="checkList">
                    <!-- Тут добавляются чек листы -->
                    <TaskCheckList/>
                    <TaskCheckList/>

                </div>

                <!-- Блок записи комментария -->
                <div class="createComments">
                    <label for="comments">Комментарии</label>
                    <textarea name="comments" id="comments" ref="comments" cols="30" rows="10"></textarea>
                    <button type="button" @click="createTaskFormComments">Сохранить</button>
                </div>

                <!-- Блок вывода комментариев -->
                <div class="comments">

                    <TaskComments
                            v-for="comment in getTaskFormComments"
                            :key="comment.id"
                            todo_prop.sync="comment"
                            v-bind:comment="comment"
                            v-bind:user="getUserData"
                            v-on:delete-coment="deleteTaskFormComments"
                    />

                </div>
            </div>

            <TaskNav/>
        </div>
    </form>
</template>

<script>
    import TaskNav from "../../components/tasks/TaskNav";
    import TaskComments from "../../components/tasks/TaskComments";
    import TaskCheckList from "../../components/tasks/TaskCheckList";
    import TaskFiles from "../../components/tasks/TaskFiles";
    import store from "../../store/store";
    import {mapGetters} from "vuex";


    export default {
        name: "TaskForm",
        data() {
            return {
                id: this.$route.params.id

            }
        },

        components: {
            TaskNav,
            TaskComments,
            TaskCheckList,
            TaskFiles,
        },
        methods: {
            fetchTaskFormComments() {
                store.dispatch('fetchTaskFormComments');
            },
            createTaskFormComments() {
                const data = {
                    content: document.getElementById(this.$refs.comments.id).value,
                    user_id: 19,
                    task_id: 29,
                };
                console.log(data);
                store.dispatch('createTaskFormComment', data)
            },
            deleteTaskFormComments(id) {
                const data = {id: id}
                store.dispatch('deleteTaskFormComment', data)
            },

        },
        mounted() {
            this.fetchTaskFormComments();
        },
        computed: {
            ...mapGetters([
                'getTaskFormComments',
                'getUserData',
            ]),

        }
    }
</script>

<style lang="scss" scoped>
    @import "../../layout/scss/tasksForm";
</style>