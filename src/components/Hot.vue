<!--
 * @Descripttion: "轮播图"
 * @version: v1.0.0
 * @Author: 田江
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 田江
 * @LastEditTime: 2019-11-07 22:55:03
 -->
<template>
    <div class="hotBox">   
        <div class="top">
            {{type}}
        </div>   
        <div class="bottom">
            <ul>
                <li v-for="(book,index) in books" :key="index">
                    <img :src="book.img" alt="">
                    <span>{{book.name}}</span>
                </li>
            </ul>
        </div> 
    </div>  
</template>

<script>

export default {
  name: 'Hot',
  props:['type'],
  data () {
    return {
        books:[
        ],
        obj:{
            '最新':'getNews',
            '热销':'getHot'
        }
    }
  },
  created() {
    fetch('/api/books')
      .then(res=>{
        return res.json();
      })
      .then(data=>{
          let funcName = this.obj[this.type];
          this.books = this[funcName](data);
     })
     .catch(err=>{
       console.log(err);
     })
  },
  methods:{
      getNews(data){
          let arr = [];
          for(let i in data){
              if(data[i].isNew){
                  arr.push(data[i]);
              }
          }
          return arr;
      },
      getHot(data){
          data.sort(function (obj1,obj2) {
              return obj2.buycount-obj1.buycount;
          });
          let arr = data.slice(0,3);
          return arr;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hotBox{
  margin: 0 auto;
  width:95%;
}
.top{
    width: 25%;
    height: .3rem;
    background-color: brown;
    font-size: 14px;
    line-height: .3rem;
    text-align: center;
}
.bottom{
    width: 100%;
    height: 1.5rem;
    background-color:pink;
}

ul{
    display: flex;
    justify-content: space-around;
}

li{
    width:30%;
    height: 100%;
}
img{
    width: 100%;
    height: 70%;

}

</style>
