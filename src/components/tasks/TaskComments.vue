<template>

    <div class="comment">
        <div class="commentHeader">
            <img src="#" alt="">
            <a href="#">имя или логин</a>
            <p>24.06.17 18:30</p>
        </div>

        <div class="commentText">
            <p>{{comment.content}}</p>
        </div>

        <div class="commentEdit">
            <a href="#">Изменить</a>
            <a href="#">Удалить</a>
        </div>
    </div>

</template>

<script>
    export default {
        name: "TaskComments",
        props: {
            comment: {
                type: Object,
                required: true,
            }
        },

    }
</script>

<style scoped>

</style>