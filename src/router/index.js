/**
 * Vue Router
 *
 * @library
 *
 * https://router.vuejs.org/en/
 */

// Lib imports
import Vue from 'vue'
import Router from 'vue-router'
// Routes
import paths from './paths'

// Store
// import store from '../store'

function route(path, view, name, meta) {
  return {
    name,
    address: name || view,
    path,
    component: resovle => import(`@/views/${view}.vue`).then(resovle),
    meta
  }
}

Vue.use(Router)

// Create a new router
const router = new Router({
  mode: 'history',
  routes: paths
    .map(path =>
      route(path.path, path.view, path.address, path.meta, path.requiresAuth)
    )
    .concat([{ path: '*', redirect: '/' }]),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return { x: 0, y: 0 }
  }
})

/* router.beforeEach((to, from, next) => {
  console.log(to, to.name, to.hash)
  if (to.path === '/maps') {
    window.location.href = 'https://www.google.com/maps'
  } else {
    if (to.matched.some(record => record.requiresAuth) && store.state.firebase.uid) {
      // You can use store variable here to access globalError or commit mutation
      next('/login')
    } else {
      next()
    }
  }
}) */

export default router
