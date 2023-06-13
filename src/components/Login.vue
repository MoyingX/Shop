<template>
  <div class="login-modal">
    <div class="mask" @click="ChangeIsShowLoginModal(false)"></div>
    <div class="login-box">
      <img class="close" src="@/assets/img/close.png" alt="">
      <ul class="title">
        <li class="active">手机号码登录</li>
        <li style="margin: -2px 10px 0; cursor: auto;">|</li>
        <li>微信号码登录</li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex';

export default {
    name:'Login',
    data() {
      return {
        
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
.login-modal{
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    .mask{
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
    }
    .login-box{
        width: 555px;
        height: 423px;
        background: url("../assets/img/login-box-bg.png");
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        .close{
          position: absolute;
          right: 60px;
          top: 20px;
        }
        .title{
          display: flex;
          justify-content: center;
          padding-top: 40px;
          font-size: 18px;
          color: #ccc;
          li{
            cursor: pointer;
          }
          .active{
            color: #333;
          }
        }
    }
}
</style>
