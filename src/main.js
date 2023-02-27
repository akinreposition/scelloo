import { createApp } from 'vue'
import store from './stores/store.js'
import App from './App.vue'

import './assets/main.css'
// import AdminTables from './components/AdminTables.vue'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
}) 


const app = createApp(App)
// app.component('AdminTables', AdminTables)

app.use(store).use(vuetify)

app.mount('#app')
