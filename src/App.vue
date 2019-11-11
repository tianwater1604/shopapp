<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: 田江
 * @Date: 2019-11-06 15:25:24
 * @LastEditors: 田江
 * @LastEditTime: 2019-11-08 14:31:20
 -->
<template>
  <div id="app">
    <transition name="component-fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html{
  font-size: 26.67vw;
}
body{
  font-size: 14px;
  height: 100%;
}
#app { 
  margin-top: 5px;
}
ul,li{
  list-style: none;
}
a{
  text-decoration: none;
  color:#333;
  display: block;
}
 .component-fade-enter-active, .component-fade-leave-active {
    /* transition: opacity .5s ease; */
    transition: all .5s ease; 
}
.component-fade-enter, .component-fade-leave-to {
    /* opacity: 0; */
    transform:translateX(-100%);
}

</style>
