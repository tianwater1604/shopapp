<!--
 * @Descripttion: "轮播图"
 * @version: v1.0.0
 * @Author: 田江
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 田江
 * @LastEditTime: 2019-11-08 16:02:33
 -->
<template>
    <div class="box">   
        <div style="display:none" >{{typename}}</div>
         <ul>
            <li v-for="(book,index) in books" :key="index" >
                <router-link  :to='"/BookDetailPage/"+book.id'>
                        <div class="imgBox">
                            <img :src="book.img" alt="">
                        </div>
                        <div class="infoBox">
                            <ul>
                                <li>{{book.name}}</li>
                                <li>作者：{{book.author}}</li>
                                <li>价格：￥{{book.price}}元</li>
                            </ul>
                        </div>
                </router-link>
            </li>
        </ul>
    </div>  
</template>

<script>
import axios from 'axios';
import {Indicator} from 'mint-ui';

export default {
  name: 'BookList',
  props:['typename'],//言情，武侠
  data () {
    return {
        allBooks:[],
        books:[]
    }
  },
  created() {
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });
     //从后端获取数据     
     axios.get('/books')
     .then(res=>{ 
         Indicator.close();
         this.allBooks = res.data;//内部数据，由于没有渲染在组件里，所以，没有触发组件更新
         this.books = this.getBooksByType(this.allBooks);//内部数据，由于渲染到了页面，所以，触发了组件更新
     })
     .catch(err=>{
         console.log(err);
     });
  },
  beforeUpdate(){
      console.log("数据更新了------------：");
      this.books = this.getBooksByType(this.allBooks);
  },
  methods:{
     getBooksByType(data){//根据类型获取数据
         let arr=[];
         for(let i in data){
             if(data[i].type==this.typename){
                 arr.push(data[i]);
             }
         }
         return arr;
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

.box>ul{
    width: 100%;
}

.box>ul>li{
    margin-top:.1rem;
    width: 100%;
    display: flex;
}

.imgBox{
    width:40%;
    height: 1rem;
}

.infoBox{
    width: 60%;
    background-color: pink;
}
img{
    width: 100%;
    height: 100%;
}


</style>
