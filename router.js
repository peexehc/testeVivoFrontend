import Vue from 'vue'
import Router from 'vue-router'

import Home from '~/pages/home'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home
      }
    ]
  })
}
