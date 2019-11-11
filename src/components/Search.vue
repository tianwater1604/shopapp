<!--
 * @Descripttion: "搜索框"
 * @version: v1.0.0
 * @Author: 田江
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 田江
 * @LastEditTime: 2019-11-06 15:18:14
 -->
<template>
  <div class="box">
    <input type="text" :placeholder="tip" />
    <img class="searchimg" src="../assets/img/search.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      tip: "请输入书名或者作者"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
  position: relative;
  width: 95%;
  margin: 0 auto;
  height: .5rem;
  background-color:pink;
  display: flex;
  align-items: center;
  justify-content:center;
}
.searchimg{
  position: absolute;
  left:10px;
  top:10px;
  width:.3rem;
  height: .3rem;
}
input{
  height: .35rem;
  width:70%;
  border-radius: 10px;
  /* border:0; */
  outline: 0;
}
</style>
