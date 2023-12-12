import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '../firebase/index.js'

const routes = [
  {
    path: '/',
    name: 'depan',
    component: () => import(/* webpackChunkName: "home" */ '../pages/Depan.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../pages/About.vue')
  },
  {
    path: '/visi',
    name: 'visi',
    component: () => import(/* webpackChunkName: "about" */ '../pages/Visi.vue')
  },
  {
    path: '/kontak',
    name: 'kontak',
    component: () => import(/* webpackChunkName: "kontak" */ '../pages/Contact.vue')
  },
  {
    path: '/info',
    name: 'info',
    component: () => import(/* webpackChunkName: "info" */ '../pages/Postinfo.vue')
  },
  {
    path: '/detailinfo/:id',
    name: 'detailinfo',
    component: () => import(/* webpackChunkName: "detailinfo" */ '../pages/Detailinfo.vue'),
    params: true
  },  
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "formLogin" */ '../pages/user/formLogin.vue')
  },
  {
    path: '/tambahuser',
    name: 'tambahuser',
    component: () => import(/* webpackChunkName: "formadduser" */ '../pages/user/formAddUser.vue')
  },  
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if(savedPosition){
      return savedPosition;
    }else if(to.hash){
      return{
        el: to.hash,
        behavior: 'smooth',
      }
    }
  }
})

router.beforeEach((to, from, next) => {
  if(to.path === '/login' && auth.currentUser) {
    next('/')
    return;
  }

  if(to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
    next('/login')
    return;
  }
  next();
})

export default router

