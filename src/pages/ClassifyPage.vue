<!--
 * @Descripttion: "首页"
 * @version: v1.0.0
 * @Author: 田江
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 田江
 * @LastEditTime: 2019-11-08 16:35:13
 -->
<template>
  <div class="box">
      <Back class="backBox"></Back>
      <Classify class="classBox"></Classify>
  </div>
</template>

<script>
import Back from '../components/Back';
import Classify from '../components/Classify';

export default {
  name: 'ClassifyPage',
  data () {
    return {
      
    }
  },
  components:{
      Back,Classify
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
