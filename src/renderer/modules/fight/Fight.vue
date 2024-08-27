<template>
  <v-row class="fill-height" align="center">
    <!-- 功能 -->
    <v-col cols="4">
      <v-row>
        <v-col v-for="(btn, i) in functionBtn" :key="i" cols="12">
          <action-card>
            <template #default>
              <v-card-title>
                <v-icon :icon="btn.icon" />
                {{ btn.name }}
              </v-card-title>
              <v-card-text>{{ btn.description }}</v-card-text>
            </template>
          </action-card>
        </v-col>
      </v-row>
    </v-col>
    <!-- PVP -->
    <v-col cols="4">
      <v-row>
        <v-col cols="12">
          <action-card hover-color="warning" height="165">
            <template #default>
              <v-card-title>
                <v-icon icon="mdi-fencing" />
                随机匹配
              </v-card-title>
              <v-card-text> 随机寻找「旗鼓相当」的契约者</v-card-text>
            </template>
          </action-card>
        </v-col>

        <v-col cols="12">
          <action-card height="170">
            <template #default>
              <v-card-title>
                <v-icon icon="mdi-rodent" />
                PVE 自由对战
              </v-card-title>
              <v-card-text> 与模拟对手对战，检验你的配队思路，同时还能获得合成素材</v-card-text>
            </template>
          </action-card>
        </v-col>
      </v-row>
    </v-col>
    <!-- PVE -->
    <v-col cols="4">
      <action-card height="360" hover-color="red-darken-4" color="error">
        <template #default>
          <v-card-title>
            <v-icon icon="mdi-trophy" />
            挑战天梯
          </v-card-title>
          <v-card-text>
            向世界第一发起挑战！
            <v-chip class="mt-4"> 当前排名：1200</v-chip>
          </v-card-text>
        </template>
      </action-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ActionCard from '../../components/ActionCard.vue'

const functionBtn = ref([
  {
    name: '战斗记录',
    icon: 'mdi-history',
    description: '查看近期战斗记录'
  },
  {
    name: '队伍上传',
    icon: 'mdi-cloud-upload-outline',
    description: '上传/更新队伍'
  },
  {
    name: '队伍检索',
    icon: 'mdi-magnify-expand',
    description: '检索其他人的队伍'
  }
])
</script>

<style scoped></style>
