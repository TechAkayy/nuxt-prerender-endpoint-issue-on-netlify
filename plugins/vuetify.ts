import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    components,
    ssr: import.meta.server,
  })
  app.vueApp.use(vuetify)
})
