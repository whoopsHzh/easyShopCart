<template id="a">
  <div>
    <h3>A组件：{{name}}</h3>
    <button @click="send">将数据发给 C组件</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: '咩咩咩'
      }
    },
    methods: {
      send() {
        eventBus.$emit('data-a',this.name)
      }
    }
  }
</script>
