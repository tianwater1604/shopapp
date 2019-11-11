<!--
 * @Descripttion: "轮播图"
 * @version: v1.0.0
 * @Author: 田江
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 田江
 * @LastEditTime: 2019-11-08 09:21:54
 -->
<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(img,index) in imgs" :key="index"  >
                <a v-bind:href="img.href"><img :src="img.src" ></a>
            </div>
        </div>      
    </div>  
</template>

<script>
import Swiper from 'swiper'

export default {
  name: 'Banner',
  data () {
    return {
      imgs:[
        ]
    }
  },
  created(){
    fetch('/api/bannerimgs')
      .then(res=>{
        return res.json();
      })
      .then(data=>{
         this.imgs = data;
         this.$nextTick(function () {
              let mySwiper = new Swiper('.swiper-container',{
                   autoplay:true,
                    speed:300,
                    grabCursor:true
              });
         });
     })
     .catch(err=>{
       console.log(err);
     })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url(https://unpkg.com/swiper/css/swiper.css);
.swiper-container{
  width:95%;
  height: 1.5rem;/*400px*/
}
img{
  width:100%;
  height: 100%;
}

</style>
