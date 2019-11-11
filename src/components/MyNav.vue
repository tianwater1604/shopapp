<!--
 * @Descripttion: "轮播图"
 * @version: v1.0.0
 * @Author: 田江
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 田江
 * @LastEditTime: 2019-11-06 15:52:29
 -->
<template>
    <div class="nav">
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>   
    </div>  
</template>

<script>

export default {
  name: 'MyNav',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav{
    margin: 0 auto;
    width: 95%;
    height: 1.5rem;
    background-color: rgb(211, 125, 140);
}
ul{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
li{
    width:.5rem;
    height: .5rem;
    margin: .1rem .2rem; 
    background-color:red;
    border-radius: 50%;

}

</style>
