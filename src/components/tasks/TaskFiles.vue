<template>
    <div class="filesImg">
        <v-popup
                v-if="isFilePopupVisible"
                @closePopup="CloseFilePopup"
                :img="popup.img"
                :title="popup.title"
        />
        <a class="filesDocsLink" href="#">
            <img src="@/assets/img.png" alt="imgFile">
        </a>

        <div class="links">
            <div>
                <button
                        class="v-task-files-show"
                        @click="showFile"
                >
                    Посмотреть
                </button>


                <button>Изменить</button>
                <button>Удалить</button>
            </div>
            <p>Добавлено 26.04.17 14:04</p>

        </div>
    </div>
</template>

<script>

    import VPopup from "../popup/v-popup";

    export default {
        name: "TaskFiles",
        components: {
            VPopup
        },

        data: () => {
            return {
                isFilePopupVisible: false,
                popup: {
                    img: require('@/assets/img.png'),
                    title: 'Изображение',
                },
            };

        },


        methods: {
            showFile() {
                this.isFilePopupVisible = true;
            },
            CloseFilePopup() {
                this.isFilePopupVisible = false;
            }
        }
    }
</script>

<style scoped>

</style>