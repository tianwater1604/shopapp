<!--
 * @Descripttion: "轮播图"
 * @version: v1.0.0
 * @Author: 田江
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 田江
 * @LastEditTime: 2019-11-08 09:24:08
 -->
<template>
    <div class="box">
         <div class="classBox">
             <ul>
                 <li v-for="(item,index) in types" :key="index" @click="changetype(item.name)" >{{item.name}}</li>
             </ul>
         </div>
         <div class="contentBox">
             <BookList :typename="currtype"></BookList>
         </div>
    </div>  
</template>

<script>
import BookList from './BookList';
import Axios from 'axios';

export default {
  name: 'Classify',
  data () {
    return {
       types:[],
       currtype:""
    }
  },
  components:{
      BookList
  },    
  created(){
    Axios.get('/types')
    .then((response)=> {
        // console.log(response.data);
        this.types = response.data;
        this.currtype = this.types[0].name;//把拿到的类型的第一个赋给当前类型。
    })
    .catch(function (error) {
        console.log(error);
    });
  },
  methods:{
      changetype(typename){
          console.log(typename);
          this.currtype = typename;
      }
  }
}
</script>

<style scoped>
.box{
    width: 95%;
    margin: 0 auto;
    margin-top:.3rem;
}
.classBox{
    width: 100%;    
}

.classBox ul{
    display: flex;
    width: 100%;
    height: .4rem;
    overflow-x: auto;/*横向滚动*/
}

.classBox ul li{
    width:1rem;
    border:1px solid blue;
    flex-shrink: 0; /**/
    text-align: center;
    line-height: .4rem;
}

.contentBox{
    width: 100%;
    min-height: 6rem;
    background-color: red;
}

</style>
