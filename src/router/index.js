import Vue from 'vue'
import Router from 'vue-router'
const UserView = () => import('@/views/UserView')

Vue.use(Router)

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   }
// ]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    {
      path: '/',
      component: UserView
    }
  ]
})

export default router
