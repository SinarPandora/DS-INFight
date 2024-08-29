<template>
  <!-- max height: 380 -->
  <v-tabs v-model="tab" fixed-tabs>
    <v-tab value="p1" append-icon="mdi-pencil">队伍 1</v-tab>
    <v-tab value="p2">队伍 2</v-tab>
    <v-tab value="p3">队伍 3</v-tab>
  </v-tabs>

  <v-tabs-window v-model="tab" class="fill-height">
    <v-tabs-window-item value="p1">
      <v-row class="mt-1" dense>
        <!-- 三条龙 -->
        <v-col v-for="i in [1, 2, 3]" :key="i" cols="3">
          <v-hover>
            <template #default="{ isHovering, props }">
              <v-card
                v-bind="props"
                :elevation="isHovering ? 10 : 0"
                rounded
                ripple
                border
                :color="isHovering ? 'primary' : undefined"
                class="fill-height pa-2"
              >
                <v-img height="220" src="../../assets/graphs/Battlers/d_7.png" />
                <v-card-title>
                  测试龙魂
                  <v-icon class="float-end" icon="mdi-weather-windy-variant" />
                </v-card-title>
                <v-card-subtitle>LV：20</v-card-subtitle>
              </v-card>
            </template>
          </v-hover>
        </v-col>
        <!-- 召唤师技能 -->
        <v-col cols="3">
          <v-row>
            <v-col v-for="i in [1, 2, 3]" :key="i" cols="12">
              <v-hover>
                <template #default="{ isHovering, props }">
                  <v-card
                    v-bind="props"
                    :elevation="isHovering ? 10 : 0"
                    rounded
                    ripple
                    border
                    :color="isHovering ? 'primary' : undefined"
                  >
                    <v-card-title>
                      燃烧之魂
                      <v-icon class="float-end" icon="mdi-fire" />
                    </v-card-title>
                    <v-card-text>效果 xxxx</v-card-text>
                  </v-card>
                </template>
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-tabs-window-item>
    <v-tabs-window-item value="p2">待补充</v-tabs-window-item>
    <v-tabs-window-item value="p3">待补充</v-tabs-window-item>
  </v-tabs-window>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const tab = ref(null)
</script>

<style scoped></style>
