// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},

  nitro: {
    preset: 'netlify-static',
  },

  vite: {
    mode: 'development',
    server: {
      cors: true, // Only for dev
    },
    build: {
      minify: false,
    },
  },

  sourcemap: true,

  // future: {
  //   compatibilityVersion: 4,
  // },

  modules: ['@nuxtjs/tailwindcss'],
})
