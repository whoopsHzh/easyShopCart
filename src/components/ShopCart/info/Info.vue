<template>
  <div>
    <el-row :gutter="20" type='flex' align='middle'>
      <el-col :span="6">总数量：{{totalNum}}</el-col>
      <el-col :span="6">总价：{{totalPrice}}</el-col>
      <el-col class="Verbutton" :span="6">
        <el-button  type="danger" size="medium" icon="el-icon-delete" @click="TodialogVisible">清空购物车</el-button>
      </el-col>
      <el-col :span="6"></el-col>
    </el-row>

    <el-dialog
      title="！！！"
      :visible.sync="dialogVisible"
      width="30%">
      <span>是否清空购物车</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="DialogSure">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      dialogVisible: false
    }
  },
  computed: {
    ...mapGetters([
      'totalPrice',
      'totalNum'
    ])
  },
  methods: {
    ...mapActions([
      'clear'
    ]),
    TodialogVisible () {
      this.dialogVisible = true
    },
    DialogSure () {
      this.clear()
      this.dialogVisible = false
    }
  }
}
</script>

<style scoped>
  .el-col-6{
    text-align: center;
    padding:5px;
  }
  .button{
    vertical-align: middle;
  }
</style>
