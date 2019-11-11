<!--
 * @Descripttion: "首页"
 * @version: v1.0.0
 * @Author: 田江
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 田江
 * @LastEditTime: 2019-11-06 16:57:11
 -->
<template>
  <div class="box">
      <Search style="position:fixed; z-index:10;left:2.5%" ></Search>
      <div class="center">
        <Banner></Banner>
        <MyNav></MyNav>
        <Hot type="热销"></Hot>
        <Hot type="最新"></Hot>
      </div>
      <MyFooter style="position:fixed; z-index:10;bottom: 0;left:2.5%" ></MyFooter>
  </div>
</template>

<script>
import Search from '../components/Search';
import Banner from '../components/Banner';
import MyNav from '../components/MyNav';
import Hot from '../components/Hot';
import MyFooter from '../components/MyFooter';

export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  },
  components:{
      Search,Banner,MyNav
      ,Hot,MyFooter
  }
}
</script>

<style scoped>
.box{
  display: flex;
  flex-direction: column;
  height: 100%;  
}

.center{
  flex: 1;
  overflow-y: auto;
  margin-top:.5rem;
  margin-bottom:.5rem;
}

</style>
