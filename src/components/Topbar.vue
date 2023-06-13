<template>
  <div class="topbar">
    <div class="wrap">
      <div class="l">
        欢迎来到积分商城
      </div>
      <div class="r">
        <ul>
          <li><img src="@/assets/img/橘猫.jpg" alt="">用户名：{{ UserName }}</li>
          <li>我的积分: {{ jifen }}</li>
          <li>获取积分</li>
          <li>官网</li>
          <li class="login-btn" @click="ChangeIsShowLoginModal(true)">登录</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

import {mapMutations} from 'vuex';

export default {
    name:'Topbar',
    data() {
      return {
        UserName:'Moying',
        jifen:'200'
      }
    },
    methods:{
      ...mapMutations({
        ChangeIsShowLoginModal:"showLoginModal/ChangeIsShowLoginModal"
      })
    }
}
</script>

<style lang="less" scoped>
@import "../assets/css/global.less";

.topbar{
    height: 40px;
    background-color: #242B39;

    font-size: 14px;
    font-family: SourceHanSansSC;
    color: #FFFEFE;
    line-height: 40px;
    
    .wrap{

      height: 40px;
      display: flex;
      justify-content: space-between;
      .r ul{
        height: 40px;
        display: flex;
        
        li{
          display: flex;

          align-items: center;
          margin-left: 20px;
          img{
            width: 30px;
            height: 30px;
            border-radius: 50%;
            margin-right: 6px;
          }

          &.login-btn{
            width: 124px;
            height: 40px;
            background: @base-color;
            justify-content: center;
            cursor: pointer;
          }
        }
      }
    }
}
</style>