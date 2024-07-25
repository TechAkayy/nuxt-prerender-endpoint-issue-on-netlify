import vuetify, {transformAssetUrls} from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},

  nitro: {
    preset: 'netlify-static',
  },

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    renderJsonPayloads: true,
    payloadExtraction: false,
    sharedPrerenderData: false,
  },

  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins.push(vuetify({autoImport: true}))
      })
    },
    //...
  ],
  vite: {
    server: {
      cors: true, // Only for dev
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    build: {
      minify: false,
    },
  },
  // sourcemap: true,
})
