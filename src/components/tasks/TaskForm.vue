<template>
    <form action="#" method="#">
        <div class="title">

            <p>{{getTask.task[0].task_name}}</p>

            <p>в колонке <a href="#">{{getTask.task[0].column_name}}</a></p>
        </div>

        <div>
            <div class="center">
                <div class="participants">
                    <p>Инициатор задачи: {{getTask.task[0].initiator_name}}</p>

                    <p>Исполнитель задачи: {{getTask.task[0].executor_name}}</p>


                    <!--                    <div class="participantsLinks">-->
                    <!--                        <a href="#">-->
                    <!--                            <img src="../../assets/avatar.png" alt="avatar">-->
                    <!--                        </a>-->
                    <!--                        <a href="#">-->
                    <!--                            <img src="../../assets/avatar.png" alt="avatar">-->
                    <!--                        </a>-->
                    <!--                        <a href="#">-->
                    <!--                            <img src="../../assets/avatar.png" alt="avatar">-->
                    <!--                        </a>-->
                    <!--                        <a href="#">-->
                    <!--                            <img src="../../assets/avatar.png" alt="avatar">-->
                    <!--                        </a>-->
                    <!--                        <a href="#">+</a>-->
                    <!--                    </div>-->
                </div>

                <div class="description">
                    <p>Описание</p>
                    <p>{{getTask.task[0].task_description}}</p>
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
                    <!--                    <TaskCheckList/>-->
                    <!--                    <TaskCheckList/>-->

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
                            v-for="(comment, index) in getTaskFormComments"
                            :key="index"
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
    // import TaskCheckList from "../../components/tasks/TaskCheckList";
    import TaskFiles from "../../components/tasks/TaskFiles";
    import store from "../../store/store";
    import {mapGetters} from "vuex";


    export default {
        name: "TaskForm",
        data() {
            return {
                editComment: true,
                isHiddenChange: false,
                isHiddenSave: false,

            };
        },


        components: {
            TaskNav,
            TaskComments,
            // TaskCheckList,
            TaskFiles,
        },
        methods: {

            fetchTaskFormComments() {

                store.dispatch('fetchTaskFormComments', this.$attrs.taskId);
            },

            fetchTask(data) {
                store.dispatch('fetchTask', data);
            },
            createTaskFormComments() {
                const data = {
                    content: document.getElementById(this.$refs.comments.id).value,
                    user_id: this.getUserData.id,
                    task_id: this.$attrs.taskId,
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
            this.fetchTask(this.$attrs.taskId)
        },
        computed: {
            ...mapGetters([
                'getTaskFormComments',
                'getUserData',
                'getTask',

            ]),


        }


    }

</script>

<style lang="scss" scoped>
    @import "../../layout/scss/tasksForm";
</style>