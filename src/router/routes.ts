import Home from '../views/Home.vue'
import { RouteConfig } from 'vue-router'

export const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: async () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
]
