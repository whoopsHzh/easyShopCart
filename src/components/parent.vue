<template>
  <div>
    <h2>
      {{immsg}}
    </h2>
    <child @titleChanged = 'updataTitle' :child = 'msg'></child>
  </div>
</template>


<script>
  import Child from './child'
  export default {
    data() {
      return {
        msg: '今天天气真好',
        immsg:'我是父元素'
      }
    },
    components: {
      Child
    },
    methods: {
      updataTitle(e){
        this.immsg = e
      }
    },
  }

</script>
