<template>
  <h1>Hello world ,count is {{ this.$store.state.count }}</h1>
  <button @click="add">+</button>
</template>
<script>
  export default {
    data () {
      return {}
    },
    methods: {
      add () {
        //提交修改
        this.$store.commit('increment')
        //使用state属性
        console.log(this.$store.state.count)
      }
    }
  }
</script>