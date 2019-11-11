<!--
 * @Descripttion: "轮播图"
 * @version: v1.0.0
 * @Author: 田江
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 田江
 * @LastEditTime: 2019-11-08 09:24:15
 -->
<template>
    <div class="box">   
        <h1>最新评论</h1>
        <span v-show="hasComment">没有评论，快来抢沙发</span>
        <ul>
          <li v-for="(comment,index) in currcomment" :key="index" >
            {{comment.sayer}}说：{{comment.content}}【{{comment.date}}】
          </li>
        </ul>        
    </div>  
</template>

<script>
import axios from 'axios';

export default {
  name: 'Comment',
  props:['id'],
  data () {
    return {
        allcomment:{},
        currcomment:null
    }
  },
  computed:{
      hasComment(){
        if(!this.currcomment) {
          return true;
        }
        
        let arr = Object.keys(this.currcomment);
        return arr.length==0;
        return true;
      }
  },
  created() {
     //从后端获取数据     
    axios.get('/comment')
     .then(res=>{ 
         console.log(res.data);
         this.allcomment =res.data;
         this.currcomment = this.allcomment[this.id];
     })
     .catch(err=>{
         console.log(err);
     });
  },
  methods:{
     
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
  margin: 0 auto;
  width:95%;
}

</style>
