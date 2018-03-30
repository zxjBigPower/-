<template>
  <div>
      <header>
          <div class="fl-box fl">
              <p><span>共兑换</span><span><i></i> {{totalMoney}}</span></p>
          </div>
          <div class="fr-box fr">
              <p>全部应用 <i>&gt;</i></p>
          </div>
      </header>
      <main>
          <ul>
              <li v-for="(item,index) in detailData">
                  <div class="fl">
                      <p>{{item.type}} 兑换饭票</p>
                      <p>{{item.time}}</p>
                  </div>
                  <div class="fr">
                      <p><i></i></p>
                  </div>
              </li>
          </ul>
      </main>
  </div>
</template>
<script>
export default {
  data(){
      return{
          totalMoney:"5000.00",
          detailData:[
            {
                type:"E费通",
                time:"2018-02-20  14:20:36",
                accumulative:"50.00",
                newAward:"50.00",
                isMore:true
            },
             {
                type:"E费通",
                time:"2018-02-20  14:20:36",
                accumulative:"50.00",
                newAward:"50.00",
                isMore:false
            }
          ]
      }
  }
}
</script>
<style lang="stylus" scoped>
fontColor=#333b46
tintFontColor=#626b77
blue=#269fef
header 
    height 120px
    background-color #fff
    .fl-box
        >p
            margin 30px 0 0 30px
            font-size 28px
            line-height 32px
            span
                display block
                i
                    display inline-block
                    background url(./../assets/icon_fpp@2x.png) no-repeat center/contain
                    width 16px
                    height 24px
            span:last-of-type
                margin-top 10px
    .fr-box
        >p
            line-height 120px
            font-size 28px  
            margin-right 33px
main
    margin-top 20px
    ul
        li
            background-color #fff
            height 126px
            font-size 28px
            border-bottom 1px solid rgb(243,243,245)
            div.fl
                p:first-child
                    margin 31px 0 0 29px
                p:last-child
                    color #a3aaae
                    font-size 24px
                    margin 15px 0 0 30px
            div.fr
                p
                    i
                        display inline-block
                        width 16px
                        height 24px
                        background url()
</style>
