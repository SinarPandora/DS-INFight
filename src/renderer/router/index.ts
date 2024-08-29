import { createRouter, createWebHashHistory } from 'vue-router'
import Dashboard from '../modules/dashboard/Dashboard.vue'
import PartyOverview from '../modules/party/PartyOverview.vue'
import FightOverview from '../modules/fight/FightOverview.vue'
import ExplorerOverview from '../modules/explorer/ExplorerOverview.vue'
import TrainingOverview from '../modules/training/Training.vue'
import SynthesizeOverview from '../modules/synthesize/SynthesizeOverview.vue'
import Settings from '../modules/settings/Settings.vue'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'dashboard', component: Dashboard },
    { path: '/party', name: 'party', component: PartyOverview },
    { path: '/fight', name: 'fight', component: FightOverview },
    { path: '/explorer', name: 'explorer', component: ExplorerOverview },
    { path: '/training', name: 'training', component: TrainingOverview },
    { path: '/synthesize', name: 'synthesize', component: SynthesizeOverview },
    { path: '/settings', name: 'settings', component: Settings },
    { path: '/:catchAll(.*)*', name: '404', redirect: '/' }
  ]
})
