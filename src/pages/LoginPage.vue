<!--
 * @Descripttion: "首页"
 * @version: v1.0.0
 * @Author: 田江
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 田江
 * @LastEditTime: 2019-11-08 12:10:03
 -->
<template>
  <div class="box">
      <Back class="backBox"></Back>
      <Login :from="from" ></Login>
  </div>
</template>

<script>
import Back from '../components/Back';
import Login from '../components/Login';

export default {
  name: 'LoginPage',
  props:['from'],
  data () {
    return {
      
    }
  },
  components:{
      Back,Login
  }
}
</script>

<style scoped>
.box{
  display: flex;
  flex-direction: column;
  height: 100%;  
}

.backBox{
    position: fixed;
    top:0;
    z-index: 1;
    background: #fff;

}



</style>
