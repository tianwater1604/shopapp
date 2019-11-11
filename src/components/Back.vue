<!--
 * @Descripttion: "轮播图"
 * @version: v1.0.0
 * @Author: 田江
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 田江
 * @LastEditTime: 2019-11-07 09:46:09
 -->
<template>
    <div class="box">
         <!--左箭头-->  
         <img  src="../assets/img/sy_sdk_left.png" @click="back()" />  
    </div>  
</template>

<script>

export default {
  name: 'Back',
  data () {
    return {
      
    }
  },
  methods:{
      back(){
          this.$router.go(-1);
      }
  }
}
</script>

<style scoped>

.box{
    width: 95%;
    margin: 0 auto;
    height: .3rem;
}

img{
    width:.25rem;
    height: .25rem;    
}

</style>
