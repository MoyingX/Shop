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
    async created(){
      //  以下代码作为案例还行，项目不太行，会有缺陷：
      //  1.请求头要写在哪里？多个链接都要带请求头怎么写？    -->创建request.js来管理请求拦截器和响应拦截器
      //  2.不便于接口的管理                                  -->创建api.js来管理接口
      //  3.容易出现回调地狱                                  -->解决方法 将.then()换成await和async
      
      //await 后面一般放Promise对象
      let res = await JinpinAPI();

      console.log("res为：",res);
    }
}
</script>


<style lang="less">

</style>