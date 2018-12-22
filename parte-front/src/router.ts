import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import LoginContainer from './views/auth/LoginContainer.vue'
import PostItem from './views/post/PostItem.vue'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: LoginContainer
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/About.vue')
    },
    {
      path: '/index',
      name: 'index',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/index/Index.vue'),
      children: [{
        path: 'post/list',
        component: PostItem,
      }, {
        path: 'org/list',
        component: { template: '<div>org</div>' }
      }]
    }
  ]
})
