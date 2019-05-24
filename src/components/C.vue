<template id="c">
  <div v-show="name">
    <h3>
      C组件：{{name}},{{age}}
    </h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name:'',
      age:""
    }
  },
  mounted(){
    eventBus.$on('data-a',name=>{
      this.name = name
    })
    eventBus.$on('data-b',age=>{
      this.age = age
    })
  }
}
</script>
