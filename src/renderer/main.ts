import { createPinia } from 'pinia'
import { createApp } from 'vue'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

import App from './App.vue'
import { useDark } from '@vueuse/core'
import { router } from './router'
import { themes } from './assets/themes'

const isDark = useDark()

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: isDark.value ? 'dark' : 'light',
    themes
  }
})

export const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(vuetify)
app.mount('#app')
