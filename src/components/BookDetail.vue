<!--
 * @Descripttion: "轮播图"
 * @version: v1.0.0
 * @Author: 田江
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 田江
 * @LastEditTime: 2019-11-08 09:27:08
 -->
<template>
    <div class="box">   
        <div class="imgBox">
          <img :src="book.img" />
        </div>
        <div class="infoBox">
          <ul>
            <li>书名：{{book.name}}</li>
            <li>作者：{{book.author}}</li>
            <li>价格：￥{{book.price}}元</li>
            <li>
              <input type="number" value="0" />
            </li>
          </ul>
        </div>
        <div class="btnBox">
            <input type="button" value="加入购物车" @click="goCar()" >
            <input type="button" value="立即购买">
        </div>
    </div>  
</template>

<script>
import axios from 'axios';

export default {
  name: 'BookDetail',
  props:['id'],
  data () {
    return {
        book:{}
    }
  },
  created() {
     console.log(this.id);
     //从后端获取数据     
     axios.get('/books/'+this.id)
     .then(res=>{ 
         console.log(res.data);
         this.book = res.data;
     })
     .catch(err=>{
         console.log(err);
     });
  },
  methods:{
     goCar(){
       this.$router.push({path:'/ShoppingCarPage'});
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
  margin: 0 auto;
  width:95%;
}

.imgBox{
    width: 100%;
    height: 2rem;
}

img{
  width: 100%;
  height: 100%;
}

.infoBox{
    width: 100%;
}

.btnBox{
    width: 100%;

}

</style>
