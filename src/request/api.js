import instance from './request';

//  这个文件用来统一管理项目中所有的api链接

//  首页精品推荐的请求
//  整成函数只需要想调用哪个就用哪个，不会全部发出去
export const JinpinAPI = () => instance.get("/products/recommend")