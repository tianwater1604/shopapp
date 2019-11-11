<!--
 * @Descripttion: "首页"
 * @version: v1.0.0
 * @Author: 田江
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 田江
 * @LastEditTime: 2019-11-08 16:26:22
 -->
<template>
  <div class="box">
      <Back class="backBox"></Back>
      <Me ></Me>
  </div>
</template>

<script>
import Back from '../components/Back';
import Me from '../components/Me';

export default {
  name: 'MePage',
  data () {
    return {
      
    }
  },
  components:{
      Back,Me
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
