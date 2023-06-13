import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

//用于解决重复点击同一个路由报错的问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function(location){
    return originalPush.call(this, location).catch(err =>{ })
};


Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        redirect:"/home"
    },
    {
        path:'/home',
        name:'Home',
        component:Home
    },
    {
        path:'/goods',
        component:() => import('../views/Goods.vue')
    },
    {
        path:'/user',
        component:() => import('../views/User.vue')
    },
    {
        path:'/order',
        component:() => import('../views/Order.vue')
    },
    {
        path:'/free',
        component:() => import('../views/Free.vue')
    }
]

const router = new VueRouter({
    mode:'history',
    base:process.env.BASE_URL,
    routes,
})

export default router