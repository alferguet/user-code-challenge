import Users from '../views/Users.vue'
import { RouteConfig } from 'vue-router'

export const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Users',
    component: Users,
  },
  {
    path: '/about',
    name: 'About',
    component: async () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
]
