<template>

    <div class="comment">
        <div class="commentHeader">
            <img src="#" alt="">
            <a href="#">{{user.name}}</a>
            <p>{{comment.updated_at}}</p>
        </div>

        <div class="commentText">
            <p>{{comment.content}}</p>
        </div>

        <div class="commentEdit">
            <button type="button" @click="changeTaskFormComments">Изменить</button>
            <button type="button" @click="deleteTaskFormComments(id)">Удалить</button>
        </div>
    </div>

</template>

<script>
    import store from "../../store/store";
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
            deleteTaskFormComments() {
                const data = {
                    id: 3
                }
                store.dispatch('deleteTaskFormComment', data)
            },
        }


    }
</script>

<style scoped>

</style>