<template>
  <div class="home">
    这是首页
  </div>
</template>


<script>
import { JinpinAPI } from '@/request/api.js';

export default {
    name:'Home',
    data() {
        return {
            
        }
    },
    created(){
      //  以下代码作为案例还行，项目不太行，会有缺陷：
      //  1.请求头要写在哪里？多个链接都要带请求头怎么写？
      //  2.不便于接口的管理
      //  3.容易出现回调地狱
        
      JinpinAPI().then(res=>{
        console.log('组件内部的回调函数中的res',res.data);

        //  发起请求
      })
    }
}
</script>


<style lang="less">

</style>