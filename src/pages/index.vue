<template>
  <div>
    <!-- <header>
      
      <h3><span class="back" @click="handleClick"><i class="iconfont">&lt;</i></span>{{title}}</h3>
    </header> -->
       <!-- <mt-button @click.native="handleClick">按钮</mt-button> -->
       <nav>
         <span @click="showDialog"></span>
         <h5>可用即时奖励</h5>
         <p>{{userfulAward}}</p>
         <div>
          <ul>
           <router-link tag="li" to="/forRecord">兑换记录</router-link>
           <router-link tag="li" to="/yjhfp">一键换饭票</router-link>
         </ul>
         </div>
       </nav>
       <main>
         <p>奖励明细</p>
         <ul>
           <li v-for="(item,index) in datas">
             <div class="clearfix">
               <i class="iconfont">&#xe697;</i>
              <p><span>{{item.type}}</span><span>{{item.time}}</span></p>
              <h3>累计：<span>{{item.accumulative}}</span></h3>
              <h5>新增奖励：<span>{{item.newAward}}</span></h5>
              <h2> <b></b> 换饭票</h2>
             </div>
           </li>
         </ul>
       </main>
       <bonus :isShow="isShow" @onclose="getDialogClose"></bonus>
  </div>
</template>
<script>
import bonus from "./../components/bonus"
export default {
  components:{bonus},
  data() {
    return {
      title:"即时奖励",
      userfulAward:"500.00",
      isShow:false,
      datas:[
        {
          type:"E费通",
          time:"2018-02-20  14:20:36",
          accumulative:"50.00",
          newAward:"50.00"
      },
       {
          type:"E费通",
          time:"2018-02-20  14:20:36",
          accumulative:"50.00",
          newAward:"50.00"
      },
      ]
    };
  },
  methods: {
    handleClick() {
      history.go(-1)
    },
    showDialog(){
      this.isShow=true
    },
    getDialogClose(){
      this.isShow=false
    }
  }
};
</script>
<style lang="stylus" scoped>
fontColor=#333b46
tintFontColor=#626b77
blue=#269fef
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
  text-align center
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
    background url(./../assets/icon_help.png) no-repeat center/contain
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
main
  >p
    margin-left 29px
    margin-top 40px
    margin-bottom 20px
    font-size 28px
    color tintFontColor
  ul
    background-color #eeeeee
    li
      background-color #fff
      height 354px
      margin 0 30px 
      padding 0 30px      
      div
        overflow hidden
        height 100%
        position relative
        p
          margin-top 30px 
          font-size 28px
          color fontColor
          line-height 32px 
          span:nth-of-type(2)
            margin-left 22px
            color #bbc0cb
            font-size 24px 
        h3
          margin-top 68px
          font-size 28px 
          color fontColor
          line-height 32px
          span 
            font-size 40px
        h5
          margin-top 20px
          color tintFontColor
          font-size 28px
          line-height 32px
        h2
          position absolute
          bottom 30px
          left 0
          width 100%
          text-align center
          font-size 32px
          line-height 30px
          color blue
          b 
            position absolute
            width 100%
            height 2px /* no*/ 
            background-color #dee3e5
            top -30px
            left 0px
        i 
          color #999faa
          position absolute
          top 50%
          right 30px
          line-height 32px
          margin-top -16px
          font-size 28px
    li:nth-of-type(n+2)
      margin-top 30px
      div 
        h2 
          b
            height 1px
</style>
