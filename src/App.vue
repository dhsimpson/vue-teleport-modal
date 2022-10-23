<template>
    <div id="modal-parent">

    </div>
    <modal parentNode="#modal-parent" :modalName="modalName">
        <div class="green-box"></div>
    </modal>
    <button @click="showModal">모달 열기!</button>
    <button @click="hideModal">모달 닫기!</button>
    <button @click="hideAllModal">모달 전부 닫기!</button>
</template>

<script>

export default {
    name: 'App',
    data() {
        return {
            modalName: 'sampleModal'
        }
    },
    created() {
    },
    methods: {
        showModal() {
            this.$modal.show(this.modalName);
        },
        hideModal() {
            this.$modal.hide(this.modalName);
        },
        hideAllModal() {
            this.$modal.hideAll();
        }
    }
}
</script>

<style scoped>
.green-box {
    background-color: green;
    width: 100px;
    height: 100px;
}
</style>
