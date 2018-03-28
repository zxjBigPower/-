<template>
  <div>
    <header>
      
      <h3><span class="back" @click="handleClick"><i class="iconfont">&lt;</i></span>{{title}}</h3>
    </header>
       <!-- <mt-button @click.native="handleClick">按钮</mt-button> -->
       <nav>
         <span>?</span>
         <h5>可用即时奖励</h5>
         <p>{{userfulAward}}</p>
         <h6>冻结：{{cannotUse}}</h6>
         <div>
          <ul>
           <li>兑换记录</li>
           <li>一键换饭票</li>
         </ul>
         </div>
       </nav>
  </div>
</template>
<script>

export default {
  data() {
    return {
      title:"即时奖励",
      userfulAward:"500.00",
      cannotUse:100.00
    };
  },
  methods: {
    handleClick() {
      history.go(-1)
    }
  }
};
</script>
<style lang="stylus">
header
  background-color #fff
  color #111
  h3
    font-size 34px
    margin 0
    span
      float left
      margin-left 29px
  
nav 
  height 396px
  background url("./../assets/bg.png") no-repeat center
  color #fff
  position relative
  span 
    position absolute
    top 30px
    right 30px
    width 30px
    height 30px
    background-color #fff
    border-radius 50%
    color lightblue
    font normal 400 30px/30px "Microsoft Yahei"
  h5
    font normal 400 28px "微软雅黑"
    margin 0
    padding-top 68px
    text-align center
    font-size 28px
  p
    font normal 400 80px sans-serif
    color white
    margin-top 24px
  h6
    font normal 400 32px sans-serif
  div
    position absolute
    bottom 0
    left 0
    width 100%
    height 88px
    background-color rgba(255,255,255,.1)
    ul 
      li
        float left
        width 50%
        line-height 88px
        font-size 32px
      li:first-of-type
        position relative
        &::before
          content:""
          position absolute
          top 31px
          right 0
          width 1px
          height 26px
          background-color #fff
</style>
