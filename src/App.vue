<template>
hell
</template>

<script>

export default {
    name: 'App',
    components: {
    },
    created() {
        this.$eventBus.$on('hello', (msg)=> {console.log(msg)});
        this.$eventBus.$emit('hello', 'world');
    }
}
</script>

<style>
</style>
