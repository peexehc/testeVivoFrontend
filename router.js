import Vue from 'vue'
import Router from 'vue-router'

import Home from '~/pages/home'
import Repository from '~/pages/repository'

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
      },
      {
        path: '/repositorio/:name',
        name: 'Repository',
        component: Repository
      }
    ]
  })
}
