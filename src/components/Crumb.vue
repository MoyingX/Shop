<template>
  <div class="crumb">
    <!-- {{nav[0].name}} / {{nav[1].name}} -->
    <span v-for="item,index in nav" :key="index"
      :style="{color: index != nav.length-1?'#999':'#333'}"
    >
      {{item.name}}
      <!-- 不等于最后一项为真, 就展示 -->
      <i v-show="index != nav.length-1">/</i>
    </span>

  </div>
</template>

<script>
export default {
  props:["nav"],
  data () {
    return {

 
    }
  }
}
</script>
 
<style lang = "less" scoped>
  .crumb{
    margin-bottom: 15px;  
    i{
      margin: 0 6px;
    }

  }
</style>