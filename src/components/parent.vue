<template>
  <div id="itany">
  <h2>
    {{immsg}}
  </h2>
  <my-a></my-a>
  <my-b></my-b>
  <my-c></my-c>
</div>
</template>

<script>
  import Child from './child'
  // 定义一个空的Vue实例
  import A  from '@/components/A'
  import B  from '@/components/B'
  import C  from '@/components/C'

  export default {
    data() {
      return {
        msg: '今天天气真好',
        immsg:'我是父元素'
      }
    },
    components: {
      Child,
      myA:A,
      myB:B,
      myC:C
    },
    methods: {
      updataTitle(e){
        this.immsg = e
      }
    },
  }


</script>
