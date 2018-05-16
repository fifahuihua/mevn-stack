/**
 * Created by ZHANGAN2 on 5/10/2018.
 */
import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import Dashboard from '@/components/Dashboard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/admin',
      component: Dashboard
    },
    {
      path: '/',
      name: 'Home',
      component: MainPage
    }
  ]
})
