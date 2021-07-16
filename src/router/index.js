import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Header from '../components/Dashboard/header.vue'
import Dashboard from '../components/Dashboard/Dashboard.vue'
import Dash from '../components/Dashboard/Dash.vue'
import Create from '../components/Dashboard/CreatePlaces.vue'
import MainPage from '@/views/MainPage.vue'
import Table from '../components/Dashboard/Table.vue'
import Seeplaces from '../components/Dashboard/Seeplaces.vue'
import Edit from '../components/Dashboard/Edit.vue'
import firebase from 'firebase'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import(/* webpackChunkName: "signup" */ '../views/SignUp.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "signup" */ '../views/Login.vue'),
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import(/* webpackChunkName: "signup" */ '../components/ForgotPassword.vue')
  },
  {
    path: '/header',
    name: 'Header',
    component: Header,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '',
        name: 'MainPage',
        component: MainPage,
        children: [
          {
            path: '/create',
            name: 'Create',
            component: Create
          },
          {
            path: '/table',
            name: 'Table',
            component: Table
          },
          {
            path: '/dash',
            name: 'Dash',
            component: Dash
          },
          {
            path: '/seeplaces',
            name: 'Seeplaces',
            component: Seeplaces
          },
          {
            path: '/edit/:edit',
            name: 'Edit',
            component: Edit
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

// Dash Guards
router.beforeEach((to, from, next) => {
  // Check for requiredAuth guard
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if Not logged in
    if (!firebase.auth().currentUser) {
      // Go to login
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      // proceed to route
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    // Check if Not logged in
    if (firebase.auth().currentUser) {
      // Go to login
      next({
        path: '/dashboard',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
    // proceed to route
      next()
    }
  } else {
    // proceed to route
    next()
  }
})

export default router
