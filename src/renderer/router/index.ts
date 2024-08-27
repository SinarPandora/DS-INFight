import { createRouter, createWebHashHistory } from 'vue-router'
import Dashboard from '../modules/dashboard/Dashboard.vue'
import Party from '../modules/party/Party.vue'
import Fight from '../modules/fight/Fight.vue'
import Explorer from '../modules/explorer/Explorer.vue'
import Training from '../modules/training/Training.vue'
import Synthesize from '../modules/synthesize/Synthesize.vue'
import Settings from '../modules/settings/Settings.vue'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'dashboard', component: Dashboard },
    { path: '/party', name: 'party', component: Party },
    { path: '/fight', name: 'fight', component: Fight },
    { path: '/explorer', name: 'explorer', component: Explorer },
    { path: '/training', name: 'training', component: Training },
    { path: '/synthesize', name: 'synthesize', component: Synthesize },
    { path: '/settings', name: 'settings', component: Settings },
    { path: '/:catchAll(.*)*', name: '404', redirect: '/' }
  ]
})
