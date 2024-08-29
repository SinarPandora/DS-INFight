<template>
  <v-data-table
    :headers="headers"
    :items="items"
    items-per-page="5"
    class="mb-3"
    hover
    expand-on-click
    @click:row.stop="openDetails"
  >
    <!-- 进度 -->
    <template #[`item.progress`]="{ value }">
      <progress-bar color="warning" unit=" 分钟" :max="20" :value="value" />
    </template>
    <!-- 名称 -->
    <template #[`item.name`]="{ item }">
      <v-sheet color="transparent" class="d-flex align-center">
        <v-avatar :image="`../../assets/graphs/Battlers/Avatars/${item.id}.png`" />
        <span class="ml-4">{{ item.name }}</span>
      </v-sheet>
    </template>
    <!-- 陪练 -->
    <template #[`item.assistant`]="{ value }">
      <v-sheet v-if="value" color="transparent" class="d-flex align-center">
        <v-tooltip :text="value.effect" location="top">
          <template #activator="{ props }">
            <v-sheet color="transparent" v-bind="props">
              <v-avatar :image="`../../assets/graphs/Battlers/Avatars/${value.id}.png`" />
              <span class="ml-4">{{ value.name }}</span>
            </v-sheet>
          </template>
        </v-tooltip>
      </v-sheet>
      <span v-else>无</span>
    </template>
    <!-- 材料 -->
    <template #[`item.material`]="{ value }">
      <v-sheet v-if="value" color="transparent"></v-sheet>
      <span v-else>无</span>
    </template>
    <!-- 去掉底栏 -->
    <template #bottom></template>
  </v-data-table>
  <v-btn block color="warning">创建新训练计划</v-btn>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ProgressBar from '../../components/ProgressBar.vue'

type TrainingMetric = {
  id: number
  name: string
  type: string
  assistant?: {
    id: number
    name: string
    effect: string
  }
  material: {
    id: number
    name: string
    effect: string
  }[]
  progress: number
}

const headers = ref([
  { title: '龙魂', key: 'name' },
  { title: '类型', key: 'type' },
  { title: '陪练', key: 'assistant', sortable: false },
  { title: '进度', key: 'progress', width: '30%' }
])

const items = ref([
  {
    id: 1,
    name: '测试1',
    type: '攻击训练',
    progress: 0.5
  },
  {
    id: 2,
    name: '测试2',
    type: '敏捷训练',
    assistant: {
      id: 6,
      name: '测试6',
      effect: '训练效果x1.5'
    },
    progress: 0.8
  },
  {
    id: 3,
    name: '测试3',
    type: '敏捷训练',
    progress: 0.9
  },
  {
    id: 4,
    name: '测试4',
    type: '体力训练',
    progress: 0.1
  },
  {
    id: 5,
    name: '测试5',
    type: '防御训练',
    progress: 0.6
  }
] as TrainingMetric[])

const openDetails = (_, { item }: { item: TrainingMetric }) => {
  console.log(item)
}
</script>

<style scoped></style>
