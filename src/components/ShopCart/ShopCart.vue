<template>
  <div>
    你好！这里是购物车
     <el-table :data="cartList" style="width: 100%">
      <el-table-column prop="id" label="ID">
      </el-table-column>
      <el-table-column prop="name" label="商品名称">
      </el-table-column>
      <el-table-column prop="num" label="数量">
        <template slot-scope="scope">
          <el-input-number size="mini" :min="1" v-on:input="handleBlur" :value="scope.row.num"  @change="handleChange( scope.row )"></el-input-number>
        </template>
      </el-table-column>
      <el-table-column prop="price" label="单价">
      </el-table-column>
      <el-table-column prop="total_num" label="总价">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button  @click="deletePro(scope.row)" type="primary" round size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <Info></Info>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import Info from './info/info'
export default {
  data () {
    return {
      inputNum: ''
    }
  },
  methods: {
    ...mapActions([
      'deletePro',
      'changeCartNum'
    ]),
    handleChange (data) {
      data.value = this.inputNum
      this.changeCartNum(data)
    },
    handleBlur (e) {
      this.inputNum = e
    }
  },
  computed: {
    ...mapState([
      'added'
    ]),
    ...mapGetters([
      'cartList'
    ])
  },
  components: {
    Info
  }
}
</script>
<style scoped>

</style>
