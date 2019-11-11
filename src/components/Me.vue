<!--
 * @Descripttion: "轮播图"
 * @version: v1.0.0
 * @Author: 田江
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 田江
 * @LastEditTime: 2019-11-08 16:52:58
 -->
<template>
    <div class="box">
        <div class="wrapper">
        <Ul >
            <span ref="downSpan" style="display: none;">
                加载中……
            </span>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </Ul>
    </div>   
    <mt-switch v-model="value"></mt-switch>     
    </div>
</template>
<script>

import axios from 'axios';
import BScroll from 'better-scroll';
import { Switch } from 'mint-ui';

export default {
  name: 'Me',
  data () {
    return {
        scroll:null,
        value:false
    }
  },  
  mounted(){
       this.scroll = new BScroll('.wrapper',{
            scrollY: true,//开启纵向滚动。
            click: true,
            pullDownRefresh: {
                threshold: 30, // 当下拉到超过顶部 30px 时，触发 pullingDown 事件
            },
            pullUpLoad: {
                threshold: -20 // 在上拉到超过底部 20px 时，触发 pullingUp 事件
            }
        });
        this.scroll.on('pullingDown', () => {
            this.$refs.downSpan.style.display = "block";
            //发请求
            // axios.get()
            // .then(res=>{
            //     this.$refs.downSpan.style.display = "none";
            // })
            // .catch(err=>{
            //     this.$refs.downSpan.style.display = "none";
            // })
        })        
        this.scroll.on('pullingUp', () => {
            
        }) 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
    width: 95%;
    margin: 0 auto;
    margin-top:.3rem;
}
 .wrapper{
    height: 400px;
    background-color: rgb(148, 22, 22);
    overflow:auto;
}


</style>
