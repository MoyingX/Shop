import instance from "./request"
import qs from "qs"
// 这个文件用来统一管理项目中所有的api链接

// 首页精品推荐的请求, 热门兑换
export const JinpinAPI = () => instance.get("/products/recommend")
export const ReMenAPI = () => instance.get("/products/hot")
  
// 发送短信验证码请求
export const SendSMSAPI = (params) => instance.post("/sendSMS", qs.stringify(params))


//手机号验证码登录(含注册)
export const PhoneLoginAPI = (params) => instance.post("/phoneRegin", qs.stringify(params))


// 微信扫码登录请求
  
export const WeixinLoginAPI = (params) => instance.post("/wechatUsers/PCLogin", qs.stringify(params))


// 手机号绑定微信的登录
export const BindPhoneAPI = (params) => instance.post("/wechatUsers/binding", qs.stringify(params))


// 获取登录用户信息
export const UserProfilesAPI = () => instance.get("/shop/userProfiles")


// 获取详情页数据
export const GoodsDetailsAPI = (id) => instance.get(`/products/${id}`)


// 请求加入购物车
export const AddToCartAPI = (params) => instance.post("/shop/carts/add", qs.stringify(params))

// 商品搜索（含首页的“更多”）  get请求带请求体(QueryString)参数的写法
export const SearchGoodsAPI = (params) => instance.get("/products", { params });
// SendSMSAPI({
//   phone: 用户输入手机号
// })

// JSON.stringify({ name: 'Vue' })
// "{name:'Vue'}"
// console.log(qs.stringify({ name: 'Vue' }));   // "name=Vue"