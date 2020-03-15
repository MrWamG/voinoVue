import Vue from 'vue'
import Router from 'vue-router'
import star from '@/components/star'
import voinoBtn from '@/components/voinoBtn'
import train from '@/components/train'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'star',
      component: star
    },
    {
      path: '/voinoBtn',
      name: 'voinoBtn',
      component: voinoBtn
    },
    {
      path: '/train',
      name: 'train',
      component: train
    }
  ]
})
