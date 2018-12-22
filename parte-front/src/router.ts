import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import LoginContainer from './views/auth/LoginContainer.vue'
import OrgListItem from './views/orgs/OrgListItem.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      // name: 'home',
      component: LoginContainer,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/About.vue')
    }, {
      path: '/org',
      component: () => import('./views/orgs/OrgIndex.vue'),
      children: [
        {
          path: 'list',
          component: () => import('./views/orgs/OrgListContainer.vue'),
        },
        {
          path: 'detail/:id',
          component: () => import('./views/orgs/OrgDetailContainer.vue')
        }
      ]
    }
    
  ]
})
