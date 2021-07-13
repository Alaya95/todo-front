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
            },
            user: {
                type: String,
                required: true,
            },
        },


    }
</script>

<style scoped>

</style>