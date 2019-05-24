<template>
  <div>
    <h3 @click='changeTitle()'>我是子元素</h3> 
    <p>{{child}}</p>
  </div>
</template>


<script>
export default {
  props:{
      child:{
        type :String,
        Default :'我是默认的'
      }
  },
  methods: {
    changeTitle(){
      this.$emit("titleChanged",'子组件向父组件传')
    }
  },
}
</script>
