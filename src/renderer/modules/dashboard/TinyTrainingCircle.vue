<template>
  <v-sheet color="transparent" class="position-relative" width="60" height="60">
    <!-- 头像 -->
    <canvas ref="canvasElm" width="60" height="60" />

    <v-progress-circular
      size="70"
      width="6"
      color="success"
      model-value="50"
      style="position: absolute; top: -5px; left: -5px; z-index: 10"
    />

    <!-- 资源 -->
    <div class="d-none">
      <img ref="avatarElm" src="../../assets/graphs/Battlers/d_1.png" alt="头像" />
    </div>
  </v-sheet>
</template>

<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue'

const canvasElm: Ref<HTMLCanvasElement> = ref(null!)
const avatarElm: Ref<HTMLImageElement> = ref(null!)

onMounted(() => {
  avatarElm.value.onload = () => {
    const canvas = canvasElm.value
    const ctx = canvas.getContext('2d')!

    ctx.beginPath()
    ctx.arc(30, 30, 30, 0, Math.PI * 2, false)
    ctx.clip()
    ctx.drawImage(avatarElm.value, 170, 10, 60, 60, 0, 0, 60, 60)
    ctx.restore()
  }
})
</script>

<style scoped></style>
