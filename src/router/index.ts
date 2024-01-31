import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import RegisterPage from '../views/RegisterPage.vue';
import { Component } from 'ionicons/dist/types/stencil-public-runtime';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/home'
  },
      {
        path: 'home',
        name: 'Home',
        component: 'HomePage'
      },
      {
        path: 'register',
        name: 'Register',
        component: RegisterPage
      },
    ]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router
