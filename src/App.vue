<template>
  <div id="app">
    <el-container>
      <el-header>
        <div class="title">购物车。开工！</div>
      </el-header>
      <el-container>
        <el-col :span="8">
          <el-aside class="nav">
            <!-- <el-row class="tac"> -->
            <h5>黄二二杂货店</h5>
            <el-menu default-active="2" class="el-menu-vertical-demo">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-s-shop"></i>
                  <span>逛商场</span>
                </template>
                <router-link to="/home">
                <el-submenu index='1-1'>
                  <template slot="title">目前只有吃的</template>
                  <el-menu-item index="1-1-1">喜之郎</el-menu-item>
                  <el-menu-item index="1-1-2">优乐美(只有优乐美)</el-menu-item>
                </el-submenu>
                </router-link>
                <el-submenu index="1-2">
                  <template slot="title">穿的</template>
                  <el-menu-item index="1-2-1">毛衣</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="2"  @click="toShopCart">
                <i class="el-icon-shopping-cart-full"></i>
                <span slot="title">购物车</span>
              </el-menu-item>
            </el-menu>
            <!-- </el-row> -->
          </el-aside>
        </el-col>
        <el-col :span="18">
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-col>
      </el-container>
    </el-container>

  </div>
</template>

<script>
  import Home from 'components/home/Home'
  export default {
    name: 'App',
    components: {
      Home
    },
    methods: {
      toShopCart(){
        console.log("我去购物车了");
        this.$router.push({path:'/shopCart'})
      }
    },
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
    font-size: 16px;
  }
  a{
    color:#2c3e50;
    text-decoration: none;
  }
  .title {
    text-align: center;
    color: #2c3e50;
    font-size: 1.2rem
  }

</style>
