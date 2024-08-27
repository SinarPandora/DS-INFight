<template>
  <v-row>
    <!-- 调和列表 -->
    <v-col cols="4">
      <v-row>
        <v-col cols="12">
          配方：能量饮
          <v-icon size="smail" icon="mdi-pencil" />
        </v-col>
        <!-- 选中的素材 -->
        <v-col cols="12">
          <v-sheet height="200">
            <v-list lines="one">
              <v-list-item>
                <template #prepend>
                  <v-icon icon="mdi-water" />
                </template>
                <v-list-item-title> 水</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <template #prepend>
                  <v-icon icon="mdi-numeric-1-circle-outline" />
                </template>
                <v-list-item-title> 龙薄荷</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <template #prepend>
                  <v-icon icon="mdi-numeric-2-circle-outline" />
                </template>
                <v-list-item-title> 巧克力</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-sheet>
        </v-col>
        <!-- 合成效果 -->
        <v-col cols="12">
          <v-row dense>
            <v-col cols="12">
              <v-chip color="warning" variant="flat"> 强效增益：训练时间减半</v-chip>
            </v-col>
            <v-col cols="12">
              <v-chip color="primary" variant="flat"> 增益：额外获得 3 点攻击</v-chip>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="8">
      <v-row>
        <!-- 搜索条 -->
        <v-col cols="12">
          <v-text-field variant="outlined" label="搜索" hide-details />
        </v-col>
        <!-- 素材列表 -->
        <v-col cols="12">
          <v-sheet height="410" border rounded class="pa-2 overflow-y-scroll">
            <v-row dense>
              <v-col v-for="i in [1, 2, 3, 4, 5, 6, 7, 8, 9]" :key="i" cols="6">
                <action-card padding="1">
                  <template #default>
                    <v-card-title class="text-body-1">
                      <v-icon icon="mdi-water" />
                      测试素材 {{ i }} x {{ i }}
                    </v-card-title>
                    <v-container fluid class="pa-2">
                      <v-chip size="small" variant="flat" color="primary" class="mr-2"> 液体</v-chip>
                      <v-chip size="small" variant="flat"> 净化</v-chip>
                    </v-container>
                  </template>
                </action-card>
              </v-col>
            </v-row>
          </v-sheet>
        </v-col>
        <!-- 配方 -->
        <v-col cols="12">
          <v-sheet height="100" class="pa-4" border rounded>
            <p>
              配方参考：
              <v-chip color="primary" variant="flat"> 液体</v-chip>
              +
              <v-chip color="primary" variant="flat"> 提神</v-chip>
              +
              <v-chip variant="flat"> 任意素材</v-chip>
            </p>
            <p class="mt-2">基础效果：减少训练所需时间</p>
          </v-sheet>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import ActionCard from '../../components/ActionCard.vue'

onMounted(() => window.api.mainWindow.resizeTo(800, 700))
onUnmounted(() => window.api.mainWindow.resizeTo(800, 450))
</script>

<style scoped></style>
