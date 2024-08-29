<template>
  <v-progress-linear :model-value="props.value" max="1" height="20" :color="color" striped>
    <span class="font-weight-bold text-shadow text-white opacity-90" :class="isDarkTheme ? '' : 'text-shadow-light'">
      剩余 {{ Math.round(props.max * (1 - props.value)) }}{{ props.unit }}
    </span>
  </v-progress-linear>
</template>

<script setup lang="ts">
import { useDarkTheme } from '../helpers/themeHelper'

const props = withDefaults(
  defineProps<{
    value: number
    unit: string
    max: number
    color: 'primary' | 'success' | 'warning' | 'error' | 'info' | 'secondary'
  }>(),
  {
    color: 'success'
  }
)

const isDarkTheme = useDarkTheme()
</script>

<!--suppress CssUnusedSymbol -->
<style scoped>
.text-shadow-light {
  text-shadow: gray 1px 1px 5px;
}
</style>
