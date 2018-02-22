import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import Conversation from '@/components/Conversation'
import Logout from '@/components/Logout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout,
      auth: true
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      auth: true
    },
    {
      path: '/conversation/:id',
      name: 'conversation',
      component: Conversation,
      auth: true
    },
    {
      path: '*',
      redirect: 'dashboard'
    }
  ]
})
