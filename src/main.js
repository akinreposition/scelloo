import { createApp } from 'vue'
import store from './stores/store'
import App from './App.vue'

import './assets/main.css'
// import ExpandableRow from './components/ExpandableRow.vue'

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
// app.component('ExpandableRow', ExpandableRow)

app.use(store).use(vuetify)
// app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('v-');
app.mount('#app')
