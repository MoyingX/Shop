import axios from 'axios';

// instance实例对象
const instance = axios.create({
    baseURL:"http://kumanxuan1.f3322.net:8881/cms",
    timeout:5000
})



//  请求拦截器
instance.interceptors.request.use(config =>{
    //  什么时候执行这里的代码？ 在每个请求发出去之前
    //  config是一个对象，记录了本次请求的相关信息
    console.log('config',config);

    //  用来做一些请求前的准备工作，比如添加请求头
    return config
},err => {
    return Promise.reject(err)
})


//  响应拦截器
instance.interceptors.response.use(res =>{
    //  什么时候执行这里的代码？ 后端返回响应，在进入到组件中成功的回调函数之前，执行
    //  res是一个对象，原先说的axios封装的res对象
    console.log('res',res);

    //  对服务器响应回来的数据做统一处理
    return res
},err => {
    return Promise.reject(err)
})


export default instance

