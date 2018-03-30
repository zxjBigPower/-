import Vue from 'vue'
import Router from 'vue-router'
import index from './../pages/index'
import forRecord from './../components/forRecord'
import yjhfp from "./../components/yjhfp"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      name:"即时奖励",
    
    },
    {
      path:"/forRecord",
      component:forRecord,
      name:"兑换记录"
    },
    {
      path:"/yjhfp",
      component:yjhfp,
      name:"一键换饭票"
    }
  ]
})
