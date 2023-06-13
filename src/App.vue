<template>
  <div id="app">
    <!--顶部-->
    <Topbar></Topbar>

    <!--头部-->
    <Header></Header>

    <!--内容-->
    <router-view/>

    <!--页尾-->
    <Footer></Footer>

    <Login v-show="isShowLoginModal"></Login>
  </div>
</template>

<script>
import Topbar from './components/Topbar.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Login from './components/Login.vue'

import {mapState} from 'vuex';

export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  computed:{
    ...mapState({
      isShowLoginModal:state => state.showLoginModal.isShowLoginModal
    })
  },
  components:{
    Topbar,
    Header,
    Footer,
    Login,
  }
}
</script>

<style lang="less">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}


</style>
