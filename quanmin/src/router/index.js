import Vue from 'vue'
import Router from 'vue-router'
import Jingxuan from '@/components/Jingxuan'
import Zhibo from '@/components/Zhibo'
import Fenlei from '@/components/Fenlei'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Jingxuan',
      component: Jingxuan
    },
     {
      path: '/zhibo',
      name: 'Zhibo',
      component: Zhibo
    },
     {
      path: '/fenlei',
      name: 'Fenlei',
      component: Fenlei
    }
  ]
})
