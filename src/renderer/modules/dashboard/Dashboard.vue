<template>
  <v-row>
    <!--左展示栏-->
    <v-col cols="5">
      <v-row>
        <!-- 姓名 -->
        <v-col cols="12">
          <span class="text-h6">契约者：喵君</span>
        </v-col>
        <!-- 看板龙 -->
        <v-col cols="12">
          <v-img max-height="300" src="../../assets/graphs/Battlers/d_7.png" />
        </v-col>
      </v-row>
    </v-col>
    <!--右展示栏-->
    <v-col cols="7">
      <!-- 编队-->
      <v-sheet color="transparent" height="140" class="d-flex flex-column">
        <span class="font-weight-bold">编队</span>
        <v-row class="flex-grow-1" justify="center" align="center">
          <v-window class="flex-grow-1" show-arrows="hover" direction="horizontal">
            <!-- TODO 替换循环 -->
            <v-window-item>
              <v-row dense justify="space-around">
                <v-col cols="2">
                  <v-img src="../../assets/graphs/Battlers/d_7.png" />
                </v-col>
                <v-col cols="2">
                  <v-img src="../../assets/graphs/Battlers/d_7.png" />
                </v-col>
                <v-col cols="2">
                  <v-img src="../../assets/graphs/Battlers/d_7.png" />
                </v-col>
                <v-col cols="2">
                  <v-img src="../../assets/graphs/Battlers/d_7.png" />
                </v-col>
                <v-col cols="2">
                  <v-img src="../../assets/graphs/Battlers/d_7.png" />
                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item>
              <v-row dense justify="space-around">
                <v-col cols="2">
                  <v-img src="../../assets/graphs/Battlers/d_7.png" />
                </v-col>
                <v-col cols="2">
                  <v-img src="../../assets/graphs/Battlers/d_7.png" />
                </v-col>
                <v-col cols="2">
                  <v-img src="../../assets/graphs/Battlers/d_7.png" />
                </v-col>
                <v-col cols="2">
                  <v-img src="../../assets/graphs/Battlers/d_7.png" />
                </v-col>
                <v-col cols="2">
                  <v-img src="../../assets/graphs/Battlers/d_7.png" />
                </v-col>
                <v-col cols="2">
                  <v-img src="../../assets/graphs/Battlers/d_7.png" />
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-row>
      </v-sheet>
      <!-- 战斗成就-->
      <v-sheet height="90" color="transparent" class="d-flex flex-column">
        <span class="font-weight-bold">战斗成就</span>
        <fight-metric />
      </v-sheet>
      <!-- 进度-->
      <v-sheet height="140" color="transparent">
        <v-row>
          <!-- 训练进度 -->
          <v-col cols="7">
            <span class="font-weight-bold">训练进度</span>
            <v-row dense class="fill-height" align="center">
              <v-col cols="4">
                <tiny-training-circle />
              </v-col>
              <v-col cols="4">
                <tiny-training-circle />
              </v-col>
              <v-col cols="4">
                <tiny-training-circle />
              </v-col>
            </v-row>
          </v-col>
          <!-- 探索进度 -->
          <v-col cols="5">
            <span class="font-weight-bold">探索进度</span>
            <v-row dense>
              <v-col cols="12">
                <p>1. 森林探索</p>
                <v-progress-linear height="10" class="mt-1" model-value="60" color="success" />
              </v-col>
              <v-col cols="12">
                <p>2. 草原探索</p>
                <v-progress-linear height="10" class="mt-1" model-value="80" color="success" />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import TinyTrainingCircle from './TinyTrainingCircle.vue'
import FightMetric from '../../components/FightMetric.vue'
</script>

<style scoped></style>
