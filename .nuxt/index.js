import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '..\\layouts\\error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_41e34d48 from 'nuxt_plugin_plugin_41e34d48' // Source: .\\components\\plugin.js (mode: 'all')
import nuxt_plugin_toast_15c28bcc from 'nuxt_plugin_toast_15c28bcc' // Source: .\\toast.js (mode: 'client')
import nuxt_plugin_workbox_28d933c7 from 'nuxt_plugin_workbox_28d933c7' // Source: .\\workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_9fd91d72 from 'nuxt_plugin_metaplugin_9fd91d72' // Source: .\\pwa\\meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_9689d28a from 'nuxt_plugin_iconplugin_9689d28a' // Source: .\\pwa\\icon.plugin.js (mode: 'all')
import nuxt_plugin_pluginrouting_7cc624ee from 'nuxt_plugin_pluginrouting_7cc624ee' // Source: .\\nuxt-i18n\\plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_31b89d41 from 'nuxt_plugin_pluginmain_31b89d41' // Source: .\\nuxt-i18n\\plugin.main.js (mode: 'all')
import nuxt_plugin_pluginclient_60ccc9fe from 'nuxt_plugin_pluginclient_60ccc9fe' // Source: .\\content\\plugin.client.js (mode: 'client')
import nuxt_plugin_pluginserver_72f388f4 from 'nuxt_plugin_pluginserver_72f388f4' // Source: .\\content\\plugin.server.js (mode: 'server')
import nuxt_plugin_axios_28ee6d6b from 'nuxt_plugin_axios_28ee6d6b' // Source: .\\axios.js (mode: 'all')
import nuxt_plugin_vueplausibleclient_0d938bfc from 'nuxt_plugin_vueplausibleclient_0d938bfc' // Source: .\\vue-plausible.client.js (mode: 'client')
import nuxt_plugin_vuetyper_5ed410cf from 'nuxt_plugin_vuetyper_5ed410cf' // Source: ..\\plugins\\vuetyper.js (mode: 'client')
import nuxt_plugin_directives_521c0486 from 'nuxt_plugin_directives_521c0486' // Source: ..\\plugins\\directives.js (mode: 'client')
import nuxt_plugin_aos_78651e70 from 'nuxt_plugin_aos_78651e70' // Source: ..\\plugins\\aos.js (mode: 'client')
import nuxt_plugin_vueGtag_5aa65ed4 from 'nuxt_plugin_vueGtag_5aa65ed4' // Source: ..\\plugins\\vueGtag.js (mode: 'client')
import nuxt_plugin_vueClapButton_4ab98d9d from 'nuxt_plugin_vueClapButton_4ab98d9d' // Source: ..\\plugins\\vueClapButton.js (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":true,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"home -- Kaustubh Pardhi","htmlAttrs":{"lang":"en"},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"An alchemist of backend engineering, I delight in sculpting products from ideation to infinite scalability, With an insatiable appetite for robustness."},{"name":"title","content":"Kaustubh Pardhi | friendly neighborhood developer"},{"name":"author","content":"Kaustubh Pardhi"},{"property":"og:type","content":"website"},{"property":"og:url","content":{"github":"kaustubhpardhi","linkedin":"kaustubh-p-16a32915a\u002F","facebook":"karnsometimes","instagram":"karngyan.dev","codestats":"karngyan"}},{"property":"og:title","content":"Kaustubh Pardhi | friendly neighborhood developer"},{"property":"og:description","content":"An alchemist of backend engineering, I delight in sculpting products from ideation to infinite scalability, With an insatiable appetite for robustness."},{"property":"og:image","content":"\u002Fimages\u002Fbigheadkarngyan.png"},{"property":"twitter:card","content":"\u002Fimages\u002Fbigheadkarngyan.png"},{"property":"twitter:url","content":"undefined"},{"property":"twitter:title","content":"Kaustubh Pardhi | friendly neighborhood developer"},{"property":"twitter:description","content":"An alchemist of backend engineering, I delight in sculpting products from ideation to infinite scalability, With an insatiable appetite for robustness."},{"property":"twitter:image","content":"\u002Fimages\u002Fbigheadkarngyan.png"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"stylesheet","href":"https:\u002F\u002Frsms.me\u002Finter\u002Finter.css"}],"style":[],"script":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_41e34d48 === 'function') {
    await nuxt_plugin_plugin_41e34d48(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_toast_15c28bcc === 'function') {
    await nuxt_plugin_toast_15c28bcc(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_28d933c7 === 'function') {
    await nuxt_plugin_workbox_28d933c7(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_9fd91d72 === 'function') {
    await nuxt_plugin_metaplugin_9fd91d72(app.context, inject)
  }

  if (typeof nuxt_plugin_iconplugin_9689d28a === 'function') {
    await nuxt_plugin_iconplugin_9689d28a(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_7cc624ee === 'function') {
    await nuxt_plugin_pluginrouting_7cc624ee(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_31b89d41 === 'function') {
    await nuxt_plugin_pluginmain_31b89d41(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_pluginclient_60ccc9fe === 'function') {
    await nuxt_plugin_pluginclient_60ccc9fe(app.context, inject)
  }

  if (process.server && typeof nuxt_plugin_pluginserver_72f388f4 === 'function') {
    await nuxt_plugin_pluginserver_72f388f4(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_28ee6d6b === 'function') {
    await nuxt_plugin_axios_28ee6d6b(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vueplausibleclient_0d938bfc === 'function') {
    await nuxt_plugin_vueplausibleclient_0d938bfc(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuetyper_5ed410cf === 'function') {
    await nuxt_plugin_vuetyper_5ed410cf(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_directives_521c0486 === 'function') {
    await nuxt_plugin_directives_521c0486(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_aos_78651e70 === 'function') {
    await nuxt_plugin_aos_78651e70(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vueGtag_5aa65ed4 === 'function') {
    await nuxt_plugin_vueGtag_5aa65ed4(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vueClapButton_4ab98d9d === 'function') {
    await nuxt_plugin_vueClapButton_4ab98d9d(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    router.push(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
