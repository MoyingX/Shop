import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/store'

// 把这段代码直接粘贴到router/index.js中的Vue.use(VueRouter)之前
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function (location) {
  return originalPush.call(this, location).catch(err => { })
};

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect:"/home"
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/goods',
    component: () => import(/* webpackChunkName: "goods" */ '../views/Goods.vue')
  },
  {
    path: '/user',
    component: () => import(/* webpackChunkName: "user" */ '../views/User.vue'),
    redirect:"/user/profiles",
    children: [
      {
        // path: '/user/cart',
        path: 'cart',
        component: () => import(/* webpackChunkName: "cart" */ '../components/user/Cart.vue')
      },
      {
        path: '/user/profiles',
        component: () => import(/* webpackChunkName: "profiles" */ '../components/user/Profiles.vue')
      },
      {
        path: '/user/order',
        component: () => import(/* webpackChunkName: "order" */ '../components/user/Order.vue')
      },
    ]
  },
  {
    path: '/order',
    component: () => import(/* webpackChunkName: "order" */ '../views/Order.vue')
  },
  {
    path: '/free',
    component: () => import(/* webpackChunkName: "free" */ '../views/Free.vue')
  },
  {
    path: '/details',
    component: () => import(/* webpackChunkName: "details" */ '../views/Details.vue')
  },
  {
    path: "*",
    name: "Error",
    component: () => import(/* webpackChunkName: "error" */ '../views/Error.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 全局前置导航守卫(路由拦截)
// router.beforeEach((to, from, next) => {
//   // 什么时候执行这里的代码???   每一次路由跳转就来执行
//   // console.log("to为:", to);  // 要去到的那个路由的对象
//   // console.log("from为:", from);  // 从哪里发生跳转的路由对象
//   // 业务需求:  没有登录的时候,不能进入个人中心
//   // 先判断是不是要去 个人中心
//   // 是就判断有没有登录, 有登录就放行, 没登录就提示请先登录,然后不放行(不调用next)
//   if (to.path==="/user") {
//       // 再判断有没有token
//       let token = localStorage.getItem("x-auth-token");
//       if (token) {
//           // 登录了,就放行
//           next()
//       } else {
//           // 没登录就提示请先登录, 然后不放行(不调用next)
//         store.dispatch("toastStatus/asyncChanIsShowToast", {
//           msg: "请先登录!!",
//           type:"warning"
//         })
//       }
//       return
//   }
//   next()  // next()方法表示放行,才能够进入要去到的那个路由
// })
export default router
