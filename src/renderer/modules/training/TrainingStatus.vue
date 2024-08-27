<template>
  <v-row>
    <v-col cols="6">
      <action-card hover-color="success" height="100">
        <v-row align="center">
          <!-- 被训练者 -->
          <v-col cols="4" offset="1">
            <tiny-training-circle class="mt-3" />
          </v-col>
          <!-- 训练效果 -->
          <v-col>
            <v-card-title> 力量训练</v-card-title>
            <v-card-subtitle> +3（加速中）</v-card-subtitle>
          </v-col>
        </v-row>
      </action-card>
    </v-col>
    <!-- 陪练 -->
    <v-col cols="2">
      <action-card height="100">
        <!-- TODO -->
      </action-card>
    </v-col>
    <v-col v-for="i in [1, 2]" :key="i" cols="2">
      <action-card height="100">
        <template #default="{ isHovering }">
          <div class="fill-height d-flex justify-center align-center">
            <v-icon size="60" :color="emptyIconColor(isHovering)" icon="mdi-plus-circle-outline" />
          </div>
        </template>
      </action-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import TinyTrainingCircle from '../dashboard/TinyTrainingCircle.vue'
import ActionCard from '../../components/ActionCard.vue'
import { useDarkTheme } from '../../helpers/themeHelper'

const isDarkTheme = useDarkTheme()

const emptyIconColor = (isHovering: boolean) => {
  if (isDarkTheme()) {
    return isHovering ? 'white' : 'grey-lighten-2'
  } else {
    return isHovering ? 'white' : 'grey'
  }
}
</script>

<style scoped></style>
