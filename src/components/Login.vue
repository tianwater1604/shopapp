<!--
 * @Descripttion: "轮播图"
 * @version: v1.0.0
 * @Author: 田江
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 田江
 * @LastEditTime: 2019-11-08 15:58:39
 -->
<template>
    <div class="box">   
        用户名: <input type="text" v-model="username" ><br/>
        密码: <input type="text"><br/>
        <!-- <input type="button" value="登录" @click="loginCheck" > -->
        <el-button  @click="loginCheck" >Button</el-button>
        <input type="button" value="去注册">
    </div>  
</template>

<script>
import { Toast } from 'mint-ui';

export default {
  name: 'Login',
  props:['from'],
  data () {
    return {
        username:''
    }
  },
  methods:{
    loginCheck(){
        localStorage.setItem('username',this.username);
        Toast({
          message: '登录成功！',
          position: 'top',
          duration: 1000
        });
        setTimeout(()=>{
          let str = "/"+this.from;
          this.$router.push({path:str});
        },1100);          
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


</style>
