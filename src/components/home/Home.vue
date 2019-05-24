<template>
  <div>
    <!-- 目前只有优乐美 -->
    只有优乐美哦！
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="price" label="地址">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button  @click="handleClick(scope.row)" type="primary" round size="small">添加购物车</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          id: '1',
          name: '优乐美原味奶茶',
          price: '￥2.22',
        }, {
          id: '2',
          name: '优乐美巧克力味奶茶',
          price: '￥5.24',
        }, {
          id: '3',
          name: '香飘飘奶茶',
          price: '￥8.88',
        }, {
          id: '3',
          name: 'luckin拿铁',
          price: '￥28.99',
        }]
      }
    },
    methods: {
      handleClick(row) {
        console.log(row);
      }
    },
  }

</script>
