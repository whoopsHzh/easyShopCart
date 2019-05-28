<template>
  <div>
    <!-- 目前只有优乐美 -->
    只有优乐美哦！
    <el-table :data="goodList" style="width: 1000%">
      <el-table-column prop="id" label="ID">
      </el-table-column>
      <el-table-column prop="name" label="商品">
      </el-table-column>
      <el-table-column prop="price" label="价格">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button  @click="addToCart(scope.row)" type="primary" round size="small">添加购物车</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions([
      'addToCart'
    ])
  },
  computed: {
    ...mapGetters([
      'goodList'
    ])
  }
}

</script>
