<template>
    <div class="v-popup">
        <div class="v-popup__header">
            <span>{{title}}</span>
            <div @click="closePopup">
                <i class="bi bi-x-lg"></i></div>
        </div>
        <div class="v-popup__content">
            <img :src="img">
        </div>
        <div class="v-popup__footer">
            <button
                    class="close_modal"
                    @click="closePopup"
            >Close
            </button>
        </div>

    </div>
</template>

<script>
    export default {
        name: "v-popup",
        methods: {
            closePopup() {
                this.$emit('closePopup')
            }
        },
        props: ['img', 'title'],


    }
</script>

<style scoped lang="scss">
    @import "../../layout/scss/popup";
   </style>