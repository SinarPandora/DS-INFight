<template>
  <v-data-table class="mb-3" hover expand-on-click :headers="headers" :items="items" items-per-page="5">
    <!-- 进度 -->
    <template #[`item.progress`]="{ value }">
      <progress-bar color="info" :value="value" :max="20" unit=" 分钟" />
    </template>
    <!-- 名称 -->
    <template #[`item.name`]="{ item }">
      <v-sheet color="transparent" class="d-flex align-center">
        <v-avatar :image="`../../assets/graphs/Battlers/Avatars/${item.id}.png`" />
        <span class="ml-4">{{ item.name }}</span>
      </v-sheet>
    </template>
    <!-- 去掉底栏 -->
    <template #bottom />
  </v-data-table>
  <map-selector>
    <template #default="{ activatorProps }">
      <v-btn block v-bind="activatorProps" text="开始新的探索" color="info" />
    </template>
  </map-selector>
</template>

<script setup lang="ts">
import MapSelector from './MapSelector.vue'
import { ref } from 'vue'
import ProgressBar from '../../components/ProgressBar.vue'

type ExplorerMetric = {
  id: number
  name: string
  area: string
  progress: number
}

const headers = ref([
  { title: '龙魂', key: 'name' },
  { title: '区域', key: 'area' },
  { title: '进度', key: 'progress', width: '30%' }
])

const items = ref([
  {
    id: 1,
    name: '测试1',
    area: '森林',
    progress: 0
  },
  {
    id: 2,
    name: '测试2',
    area: '湖泊',
    progress: 0.6
  },
  {
    id: 3,
    name: '测试3',
    area: '地牢',
    progress: 0.8
  },
  {
    id: 4,
    name: '测试4',
    area: '地牢',
    progress: 0.5
  },
  {
    id: 5,
    name: '测试5',
    area: '地牢',
    progress: 0.2
  }
] as ExplorerMetric[])
</script>
