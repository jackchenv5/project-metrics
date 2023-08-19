<template>
    <h1>Hello world ,count is {{ this.$store.state.count }}</h1>
    <button @click="add">+</button>
</template>
<script>
export default {
    data() {
        return {}
    },
    methods: {
        add() {
            this.$store.commit('increment')
            console.log(this.$store.state.count)
        }
    }
}
</script>