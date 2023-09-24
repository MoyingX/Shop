import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import SlideVerify from 'vue-monoplasty-slide-verify' // 拼图验证码

import "reset-css"
import '@/assets/css/global.less'


Vue.use(SlideVerify)
Vue.config.productionTip = false

// Vue的 "全局变量"
// 通过prototype定义的值,可以再组件内部直接使用 this.变量名 来获取
// 相当于每一个Vue组件都有这个数据
Vue.prototype.imgBaseUrl = 'https://sc.wolfcode.cn'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
