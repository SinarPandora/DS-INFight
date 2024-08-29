<template>
  <v-row>
    <v-col cols="12">
      <v-card>
        <v-card-title class="d-flex align-center">
          喵君
          <v-icon size="small" icon="mdi-pencil" />
          <v-spacer />
          <v-chip>天梯排名：1200</v-chip>
        </v-card-title>
        <v-container fluid>
          <v-row>
            <v-col cols="2">
              <canvas ref="canvasElm" width="96" height="96" />
              <div class="d-none">
                <img ref="avatarElm" src="../../assets/graphs/Faces/BigZhang.png" alt="头像绘画素材" />
              </div>
            </v-col>
            <v-col cols="10">
              <v-textarea
                label="个人签名"
                variant="outlined"
                rows="2"
                counter
                :rules="[(v) => !v || v.length <= 200 || '签名只支持 200 字以内']"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
    <v-col cols="4">
      <v-switch label="开启战斗语音播报" density="compact" inset color="success" hide-details />
    </v-col>
    <v-col cols="4">
      <v-switch label="允许系统通知" density="compact" :model-value="true" inset color="success" hide-details />
    </v-col>
  </v-row>
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
    ctx.arc(48, 48, 48, 0, Math.PI * 2, false)
    ctx.clip()
    ctx.drawImage(avatarElm.value, 0, 0, 96, 96, 0, 0, 96, 96)
    ctx.restore()
  }
})
</script>

<style scoped></style>
