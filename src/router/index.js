import Vue from 'vue'
import Router from 'vue-router'

import headfoot from '@/layouts/default/headfoot.vue'
import dashboard from '@/layouts/default/dashboard.vue'


const HelloWorld = (resolve) => {
  import('@/components/HelloWorld').then((module) => {
    resolve(module)
  })
}

const HelloWorld0 = (resolve) => {
  import('@/components/HelloWorld0').then((module) => {
    resolve(module)
  })
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: headfoot,
      children: [
        {
          path: '',
          component: HelloWorld,
        },
      ],
    },
    {
      path: '/o',
      name: 'HelloWorld',
      component: dashboard,
      children: [
        {
          path: '',
          component: HelloWorld0,
        },
      ],
    }
  ]
})
