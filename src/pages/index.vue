<template>
  <div>
    <header>
      <div class="back" @click="handleClick"><i class="iconfont">&lt;</i></div>
      <h3>{{title}}</h3>
    </header>
       <!-- <mt-button @click.native="handleClick">按钮</mt-button> -->
       <nav>
         <h5>可用即时奖励</h5>
         <p>{{userfulAward}}</p>
       </nav>
  </div>
</template>
<script>

export default {
  data() {
    return {
      title:"即时奖励",
      userfulAward:"s"
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
  div
    float left
    margin-left 1rem
nav 
  height 396px
  background url("./../assets/bg.png") no-repeat center
  h5
    padding-top 68px
    text-align center
    color #fff
    font-size 28px
</style>
