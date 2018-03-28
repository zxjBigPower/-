import Vue from 'vue'
import Router from 'vue-router'
import index from './../pages/index'
import forRecord from './../components/forRecord'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children:[{
        path:"forRecord",
        component:forRecord,
        name:"即时奖励"
      },]
    }
  ]
})
