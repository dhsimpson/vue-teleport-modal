<template>
    <div id="modal-parent">

    </div>
    <modal parentNode="#modal-parent" :modalName="modalName" @before-open="beforeOpen" @before-close="beforeClose" :disabled="true">
        <div class="green-box"></div>
    </modal>
    <button @click="showModal">Open Modal!</button>
    <button @click="hideModal">Hide Modal!</button>
    <button @click="hideAllModal">Hide All Modal!</button>
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
        },
        beforeOpen(msg) {
            console.log(msg)
        },
        beforeClose(msg) {
            console.log(msg)
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
