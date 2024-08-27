<template>
  <v-app style="user-select: none">
    <!-- 顶栏 -->
    <v-app-bar
      style="-webkit-app-region: drag"
      density="compact"
      :color="isDarkTheme() ? 'deep-purple-darken-1' : 'deep-purple-darken-3'"
    >
      <v-app-bar-title>{{ pageTitle }}</v-app-bar-title>
      <v-spacer />
      <v-btn class="mr-1" style="-webkit-app-region: no-drag" icon="mdi-theme-light-dark" @click.stop="toggleTheme" />
      <v-btn
        class="mr-1"
        style="-webkit-app-region: no-drag"
        :icon="isOnTop ? 'mdi-pin' : 'mdi-pin-outline'"
        @click.stop="switchOnTop"
      />
      <v-hover>
        <template #default="{ isHovering, props }">
          <v-btn
            icon="mdi-close"
            style="-webkit-app-region: no-drag"
            :color="isHovering ? 'error' : undefined"
            v-bind="props"
            @click.stop="closeApp"
          />
        </template>
      </v-hover>
    </v-app-bar>

    <!-- 侧边导航 -->
    <v-hover>
      <template #default="{ isHovering, props }">
        <v-navigation-drawer v-bind="props" width="150" permanent :rail="!isHovering" expand-on-hover>
          <v-list density="compact" nav>
            <v-list-item
              v-for="(item, i) in navs"
              :key="i"
              link
              :prepend-icon="item.icon"
              :title="item.title"
              @click.stop="gotoPage(item)"
            />
          </v-list>
        </v-navigation-drawer>
      </template>
    </v-hover>

    <!-- 路由视图 -->
    <v-main>
      <v-container width="744" height="400">
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue'
import { router } from './router'
import { useTheme } from 'vuetify'
import { useDarkTheme } from './helpers/themeHelper'

type NavItem = {
  icon: string
  alt?: string
  page: string
  title: string
}
const navs: Ref<NavItem[]> = ref([
  { icon: 'mdi-view-dashboard-outline', title: '总览', alt: '龙魂无限斗', page: 'dashboard' },
  { icon: 'mdi-list-box-outline', title: '编队', page: 'party' },
  { icon: 'mdi-fencing', title: '战斗', alt: '无限斗', page: 'fight' },
  { icon: 'mdi-compass-outline', title: '探索', page: 'explorer' },
  { icon: 'mdi-compost', title: '训练', page: 'training' },
  { icon: 'mdi-vector-combine', title: '合成', page: 'synthesize' },
  { icon: 'mdi-cog-outline', title: '自定义', alt: '契约者自定义', page: 'settings' }
] as NavItem[])

const pageTitle = ref('龙魂无限斗')

const isDarkTheme = useDarkTheme()
const theme = useTheme()

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

const gotoPage = (item: NavItem) => {
  router.push({ name: item.page })
  pageTitle.value = item.alt ?? item.title
}

const closeApp = () => window.api.quitApp()
const isOnTop = ref(false)
const switchOnTop = () => {
  window.api.mainWindow.switchOnTop()
  isOnTop.value = !isOnTop.value
}

onMounted(async () => {
  isOnTop.value = await window.api.mainWindow.getIsOnTop()
})
</script>

<style scoped></style>
