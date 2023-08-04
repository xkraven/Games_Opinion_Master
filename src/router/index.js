import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import NotFound from '@/components/NotFound.vue';
import OpinionesView from '@/views/OpinionesView.vue';
import Administracion from '@/components/Administracion.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/opiniones/:nombre',
    name: 'opiniones',
    component: OpinionesView,
    props: true,
  },
  {
    path:'/administracion/:nombre',
    name:'administracion',
    component: Administracion,
    props: true,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path:'/:catchAll(.*)',
    name: 'notfound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
