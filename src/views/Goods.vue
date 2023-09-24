<template>
  <div class="goods">
    <div class="wrap">
      <Crumb> </Crumb>
      <img src="../assets/img/banner.4c6b6225.png" width="100%" alt="" />
      <ul class="options">
        <li>
          <strong>排序：</strong>
          <span  
            :class="num1==index?'active':''" 
            v-for="item,index in option1" 
            :key="index"
            @click="option1Click(index,item.min,item.max)"
          >{{item.txt}}</span>

        </li>
        <li>
          <strong>分类：</strong>
          <span 
            :class="num2==index?'active':''" 
            v-for="item,index in option2" 
            :key="index"
            @click="option2Click(index,item.type)"
          >{{item.txt}}</span>
        </li>
      </ul>
      <List :arr="goodsListShow" :maxLength="3000" />
      <p style="text-align:center;margin-top:20px">
        {{  isReachBottom?"没有数据了":"正在加载... ..."}}
      </p>
    </div>
  </div>
</template>                            
<script>

import Crumb from "../components/Crumb.vue";
import List from "../components/home/List.vue";
import {SearchGoodsAPI} from '@/request/api.js';
import {getScrollTop,getClientHeight,getScrollHeight} from "@/utils"
export default {
  data() {
    return {
      // 栏目 目前可提供的参数是 1->精品推荐 2-> 热门兑换 0->全部
      did:0,
      // ( 1->实体商品 2->虚拟商品 0->全部 )
      type:0,
      // 大于多少积分，最少是0
      min:0,
      // 少于多少积分，最多是10000，当传入0的时候，会直接返回所有商品，无视后台逻辑。
      max:0,
      // 商品关键词
      keyword:"",

      
      // 分数范围排序数组项
      option1:[
        {txt:"全部", min:0, max:100000},
        {txt:"我能兑换的", min:0, max:10000},
        {txt:"0-500分", min:0, max:500},
        {txt:"500-1000分", min:500, max:1000},
        {txt:"1000-1500分", min:1000, max:1500},
        {txt:"1500-2500分", min:1500, max:2500},
        {txt:"2500-6500分", min:2500, max:6500},
        {txt:"6500-10000分", min:6500, max:10000},
        {txt:"10000分以上", min:10000, max:100000},
      ],
      // 分类的数组项
      option2:[
        {txt:"全部", type:0},
        {txt:"实物礼品", type:1},
        {txt:"虚拟礼品", type:2},
      ],

      // num1表示第一个数组的当前样式标记
      num1:0,
      // num2表示第二个数组的当前样式标记
      num2:0,

      // 商品列表信息
      goodsList:[],
      // 真正用来展示的数组
      goodsListShow:[],
      // 每页条数 
      size:8,
      // 当前页数
      page:1,
      // isLoading 表示是否正在加载
      isLoading:false,
      // isReachBottom 表示 是不是真正没有数据了
      isReachBottom:false
    };
  },
  watch:{
    // 在/goods下搜素是不会重新加载Goods页面的,所以需要监听路由参数的变化
    '$route.query.keyword':{
      handler(newVal,oldVal){
        this.keyword=newVal||""
        this.goodsSearch()
      }
    }
  },
  mounted(){
    // 绑定监听事件
    window.addEventListener("scroll", this.scrollFn);
  },
  beforeDestroy(){
    // 删除监听事件
    window.removeEventListener("scroll", this.scrollFn);
  },
  methods:{
    scrollFn(){
        // 节流:  利用一个变量,控制代码在一段时间内(setTimeout)不会重复触发执行

        // 滚动的时候执行的代码
        // console.log("页面发生滚动了");
        // if(到达底部){
        // if(窗口高度+超出窗口的页面的高度>=页面高度-20){
        if(getClientHeight()+getScrollTop()>=getScrollHeight()-20){
          console.log("来到底部了");

          // if(没有新数据){
          if(this.goodsListShow.length>= this.goodsList.length){
            this.isReachBottom = true
            return
          }
          // 加载更多
          // 第1次滚动到底部, 要加载第2页的数据, i是从下标为8到下标为15
          // 第2次滚动到底部, 要加载第3页的数据, i是从下标为16到下标为23
          // 第3次滚动到底部, 要加载第4页的数据, i是从下标为24到下标为31
          if(this.isLoading==false){
            // 刚开始加载的时候,就改成真,为的是不让他继续触发加载
            this.isLoading=true
            // 正在加载...
            setTimeout(()=>{
              this.page++
              for(var i=this.size*(this.page-1);i<this.size*this.page;i++){
                // 针对最后一页没有8条数据的情况,加了一个判断
                this.goodsList[i]?this.goodsListShow.push(this.goodsList[i]):""
              }
              // 加载完毕了,改成false,以便下次可以再次加载
              this.isLoading=false
            },500)
          }
         
         
        }
    },
    option1Click(i,min,max){
      // 样式的处理
      this.num1 = i
      // 更新最小值和最大值
      this.min = min
      this.max = max
      // 数据的请求
      this.goodsSearch();
    },
    option2Click(i,type){
      // 样式的处理
      this.num2 = i
      // 更新最小值和最大值
      this.type = type
      // 数据的请求
      this.goodsSearch();
    },
    async goodsSearch(){
      let res = await SearchGoodsAPI({
        did:this.did,
        type:this.type,
        min:this.min,
        max:this.max,
        keyword:this.keyword,
      })
      if(!res)return;
      console.log(res.data);
      this.goodsList = res.data;
      // 一开始展示8条数据
      this.goodsListShow = this.goodsList.filter((item,index)=>index<8);
      
      // 把滚动加载更多的几个数据初始化
      this.isReachBottom=false;
      this.page=1;
      // if(没有数据了){
      //   this.isReachBottom=true;
      // }
      if(this.goodsListShow.length>= this.goodsList.length){
        this.isReachBottom = true;
      }
    }
  },
  components: {
    Crumb,
    List,
  },
  created(){
    this.keyword=this.$route.query.keyword||""
    this.goodsSearch()
  }
};
</script>
 
<style lang = "less" scoped>
@import "../assets/css/global.less";

.goods {
  padding-bottom: 50px;
  background: #efefef;
  padding-top: 20px;
  .options {
    padding-top: 20px;
    padding-bottom: 40px;
    li {
      margin-top: 20px;
      strong {
        color: #000;
        font-weight: bold;
      }
      span {
        margin-right:20px;
        margin-left: 10px;
        cursor: pointer;
        color: #999;
        &.active {
          color: @base-color;
          font-weight: bold;
        }
      }
    }
  }
}
</style>