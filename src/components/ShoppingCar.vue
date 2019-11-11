<!--
 * @Descripttion: "轮播图"
 * @version: v1.0.0
 * @Author: 田江
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 田江
 * @LastEditTime: 2019-11-08 15:44:22
 -->
<template>
    <div class="box">
        <div id="box">
            <!-- 购物车列表 -->
            <ul>
                <li class="goodsBox" v-for="(book,index) in books" :key="index">
                    <div class="radioBox">
                        <input type="checkbox" v-model="book.isChecked"  >
                    </div>
                    <div class="goodsImgBox">
                        <img :src="book.img" alt="">
                    </div>
                    <div class="goodsInfoBox">
                            <p>{{book.id}}</p>
                            <p>{{book.name}}</p>
                            <p>
                                ￥<span class="price">{{book.price}}</span> 
                                <span>
                                     <el-input-number  v-model="book.count" :min="1" :max="10" label="描述文字"></el-input-number>
                                </span> 
                            </p>
                    </div>
                </li>                                     
            </ul>
        </div>
        <div class="goodsTotalBox">
            <input type="checkbox"  id="allCheckBox" v-model="allcheck" @click="checkall" >  
            合计：<span id="totalMoney">{{totalMoney}}</span>
        </div>
    </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'ShoppingCar',
  data () {
    return {
        books:[ 
                // {
                //     "id":"001001",
                //     "name":"射雕英雄传",
                //     "img":"static/img/img (1).jpg",
                //     "price":50,
                //     "count":1,
                //     "isChecked":false
                // }
        ],
        allcheck:false
    }
  },
  created() {
    axios.get('/car')
     .then(res=>{
         let tempBooks = res.data;
         //给每个商品增加属性 isChecked
         for(let i in tempBooks){
             tempBooks[i].isChecked = false;
         }
         this.books = tempBooks;
     })
     .catch(err=>{
         console.log(err);
     })
  },
  computed:{
      totalMoney:function () {          
          let money = 0;
          let isAllCheck = true;
          for(let i in this.books){
              if(this.books[i].isChecked){
                  money+=this.books[i].count*this.books[i].price;
              }else{
                  isAllCheck = false;
              }
          }
          this.allcheck = isAllCheck;
          console.log(money);
          return money;
      }
  },
  methods:{
      reduceCount(index){
          if(this.books[index].count <= 1){
              this.books[index].count=1;
              return;
          }
          this.books[index].count--;
      },
      addCount(index){
          console.log(index);
          this.books[index].count++;
      },
      checkall(){
        //   console.log(this.allcheck);
          console.log(event.target.checked);
          this.books.forEach(item=>{
              item.isChecked = event.target.checked;
          });
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

#box{
    margin-top: .4rem;
    width: 100%;
    flex: 1;
    overflow-y: auto;
}

#box>ul{
    width: 100%;
}
#box>ul>li{
    margin: 10px auto;
    width: 100%;
    height: 2rem;
    background-color: pink;
    border-radius: 15px;
    display: flex;
}
#box div{
    height: 100%;
}
#box .radioBox{
    width: 12%;
    background-color: chocolate;
}
#box .radioBox input{
    margin: auto 0;
}
#box .goodsImgBox{
    width:28%;
    background-color: rgb(92, 21, 21);
}
#box .goodsImgBox img{
    width:100%;
    height: 100%;
}
#box .goodsInfoBox{
    background-color: rgb(195, 91, 91);
    width: 60%;
}
#pId{
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
    overflow:hidden;
}



</style>
