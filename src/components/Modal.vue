<template>
    <teleport v-if="isShowModal" :to="parentNode" :disabled="false">
        <slot/>
    </teleport>
</template>

<script>
export default {
    data() {
        return {
            isShowModal:false
        }
    },
    props: {
        parentNode: {
            type: String,
            required: true
        },
        modalName: {
            type: String,
            required: true
        }
    },
    created() {
        this.$modal.regist(this.modalName);
        this.$eventBus.$on('toggle-modal', (...args) => this.toggleModalCallback(args))
    },
    methods: {
        toggleModalCallback(args) {
            const [modalName, state] = args
            if(this.modalName == modalName) {
                if(this.isShowModal == state) return;
                if(state){
                    this.$emit('before-open', 'open!');
                }else {
                    this.$emit('before-close', 'close!');
                }
                this.isShowModal = state;
            }
        }
    }
}
</script>

<style>

</style>