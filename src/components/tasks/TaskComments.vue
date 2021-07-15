<template>

    <div class="comment">
        <div class="commentHeader">
            <img src="#" alt="">
            <a href="#">{{user.name}}</a>
            <p>{{comment.updated_at | date}}</p>
        </div>

        <div class="commentText">
            <p>{{comment.content}}</p>
        </div>

        <div class="commentEdit">
            <button type="button" @click="changeTaskFormComments">Изменить</button>
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

            },
            deleteTaskFormComments(comment) {
                const data = {
                    id: comment.id
                }
                store.dispatch('deleteTaskFormComment', data)
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