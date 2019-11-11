<!--
 * @Descripttion: "轮播图"
 * @version: v1.0.0
 * @Author: 田江
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 田江
 * @LastEditTime: 2019-11-11 10:03:09
 -->
<template>
    <footer>   
        <ul>
            <li>
              <i class="el-icon-s-home"></i>
              首页
            </li>
            <li><router-link to="/ClassifyPage">
              <i class="el-icon-menu"></i>
            
            分类
            </router-link></li>
            <li><router-link to="/ShoppingCarPage">
              <i class="el-icon-shopping-cart-2"></i>
              购物车</router-link>
            </li>
            <li>
              <router-link to="/MePage">
              <i class="el-icon-s-custom"></i>
              我的</router-link>
            </li>
        </ul>
    </footer>  
</template>

<script>

export default {
  name: 'MyFooter',
  data () {
    return {
       
    }
  }
}
</script>
<style scoped>

footer{
  margin: 0 auto;
  width:95%;
  height: .5rem;
  background-color: rgb(235, 57, 146);
}
ul{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
}
li{ 
    text-align: center;
}
i{
  font-size: .2rem;
  color:blue;
  display: block;
}
</style>
