<template>
    <teleport v-if="isShowModal" :to="parentNode" :disabled="disabled">
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
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    created() {
        this.$modal.regist(this.modalName);
        this.$eventBus.$on('toggle-modal', (...args) => this.toggleModalCallback(args))
    },
    methods: {
        toggleModalCallback(args) {
            const [modalName, state, params] = args
            if(this.modalName == modalName) {
                if(this.isShowModal == state) return;
                if(state){
                    this.$emit('before-open', this.createModalEvent({state: 'before-open', params}));
                }else {
                    this.$emit('before-close', this.createModalEvent({state: 'before-close'}));
                }
                this.isShowModal = state;
            }
        },
        createModalEvent(args= {}) {
            return {
                name: this.modalName,
                ...args
            }
        }
    }
}
</script>

<style>

</style>