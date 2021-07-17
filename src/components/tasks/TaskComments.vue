<template>

    <div class="comment">
        <div class="commentHeader">
            <img src="#" alt="">
            <a href="#">{{user.name}}</a>
            <p>{{comment.updated_at | date}}</p>
        </div>

        <div class="commentText" :id="comment.id" ref="commentId">
            <p v-if="editComment">{{comment.content}}</p>
            <textarea
                    v-else :id='("nameTask" + comment.content)'
                    ref="editComment" name="editComment"
                    :value="comment.content" type="text"
            ></textarea>
        </div>

        <div class="commentEdit">
            <button type="button" v-if="!isHiddenChange" @click="openInput">Редактировать</button>
            <button type="button" v-if="isHiddenSave" @click="changeTaskFormComments">Сохранить</button>
            <button type="button" @click="deleteTaskFormComments(comment)">Удалить</button>
        </div>
    </div>

</template>

<script>
    import {mapGetters} from "vuex";
    import store from "../../store/store";
    import moment from 'moment';

    export default {
        name: "TaskComments",
        data() {
            return {
                editComment: true,
                isHiddenChange: false,
                isHiddenSave: false,
            };
        },
        props: {
            comment: {
                type: Object,
                required: true,
            },
            user: {
                type: String,
                required: true,
            },
        },
        methods: {
            changeTaskFormComments() {
                const data = {
                    id: this.$refs.commentId.id,
                    content: this.$refs.editComment.value,
                }
                console.log(data)
                store.dispatch('editTaskFormComment', data)
                this.closeInput();
                },
            deleteTaskFormComments(comment) {
                const data = {
                    id: comment.id
                }

                store.dispatch('deleteTaskFormComment', data)
            },
            openInput() {
                this.isHiddenChange = true;
                this.editComment = false;
                this.isHiddenSave = true;
            },

            closeInput() {
                this.isHiddenChange = false;
                this.editComment = true;
                this.isHiddenSave = false;
            },
        },
        computed: {
            ...mapGetters([
                'getTaskFormComments',

            ]),
        },

        filters: {
            date: function (value) {
                if (value) {
                    return moment(String(value)).format('MM/DD/YYYY hh:mm')
                }
            }
        }


    }
</script>

<style scoped>

</style>