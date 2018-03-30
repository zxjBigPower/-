<template>
<transition name="drap">
    <div class="alertBox" v-if="isShow">
        <div class="closeBox" @click.stop="closeDialog"></div>
      <div class="con">
          <div class="con-box">
              <span @click="closeDialog">×</span>
              <h3>关于即时奖励</h3>
              <p>1、您的即时奖励可兑换为彩之云平台的彩集饭票。</p><br>
              <p>2、可用奖励为您当前可兑换为彩集饭票的金额；冻结金额在年底根据绩效考核的评分结算之后会转入可用的奖励。</p><br>
              <p>3、奖励明细记录每一笔订单分配给您的金额；累计金额为本应用下多笔订单分配的所有奖励金额。</p>
          </div>
      </div>
  </div>  
</transition>    
</template>
<script>
export default {
  props:{
     isShow:{
      type: Boolean,
      default: false
    }
  },
  methods:{
      closeDialog(e){
        console.log(e);
        e.cancelBubble = true;
        e.preventDefault=false;//阻止默认事件（原生方法）
        e.stop;//阻止冒泡（原声方法）
        this.$emit("onclose")
      }
  }
}
</script>
<style lang="stylus" scoped>
fontColor=#333b46
tintFontColor=#626b77
blue=#269fef
.drap-enter
  transform: translateY(-500px)
.drap-leave-to
  transform: translateY(-500px)
.drap-enter-active,.drap-leave-active 
  transition: all .5s

.alertBox
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    background-color rgba(0,0,0,.6)
    .closeBox
        width 100%
        height 100%
        position absolute
        top 0
        left 0
    .con
        margin-top 241px
        padding 0 75px
        .con-box
            padding 50px 30px 70px
            border-radius 10px
            background-color #fff
            color fontColor
            font-size 28px
            position relative
            span 
                color #999faa
                position absolute
                top 30px
                right 30px

            h3
                font-size 32px
                text-align center
                margin-bottom 50px
</style>
