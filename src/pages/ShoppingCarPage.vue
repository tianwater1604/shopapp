<!--
 * @Descripttion: "首页"
 * @version: v1.0.0
 * @Author: 田江
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 田江
 * @LastEditTime: 2019-11-07 11:03:53
 -->
<template>
  <div class="box">
      <Back class="backBox"></Back>
      <ShoppingCar></ShoppingCar>
  </div>
</template>
<script>
import Back from '../components/Back';
import ShoppingCar from '../components/ShoppingCar';

export default {
  name: 'ShoppingCarPage',
  data () {
    return {
      
    }
  },
  components:{
      Back,ShoppingCar
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
