import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _48cfa733 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _1e0e8c4a = () => interopDefault(import('..\\pages\\projects\\index.vue' /* webpackChunkName: "pages/projects/index" */))
const _1bf83b08 = () => interopDefault(import('..\\pages\\resume\\index.vue' /* webpackChunkName: "pages/resume/index" */))
const _2c5e8cc9 = () => interopDefault(import('..\\pages\\uses\\index.vue' /* webpackChunkName: "pages/uses/index" */))
const _471905eb = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _217bceda = () => interopDefault(import('..\\pages\\projects\\_slug.vue' /* webpackChunkName: "pages/projects/_slug" */))
const _111ea7d5 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _48cfa733,
    name: "blog___en"
  }, {
    path: "/projects",
    component: _1e0e8c4a,
    name: "projects___en"
  }, {
    path: "/resume",
    component: _1bf83b08,
    name: "resume___en"
  }, {
    path: "/uses",
    component: _2c5e8cc9,
    name: "uses___en"
  }, {
    path: "/blog/:slug",
    component: _471905eb,
    name: "blog-slug___en"
  }, {
    path: "/projects/:slug",
    component: _217bceda,
    name: "projects-slug___en"
  }, {
    path: "/",
    component: _111ea7d5,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
