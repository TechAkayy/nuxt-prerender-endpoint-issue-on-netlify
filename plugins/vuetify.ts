import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    components,
    ssr: true,
  })
  app.vueApp.use(vuetify)
})
