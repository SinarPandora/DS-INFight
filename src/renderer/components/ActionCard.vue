<template>
  <v-hover>
    <template #default="{ isHovering, props }">
      <v-card
        :width="width"
        :height="height"
        v-bind="props"
        rounded
        ripple
        border
        :color="isHovering ? prop.hoverColor : prop.color"
        :elevation="isHovering ? 10 : 0"
        :class="`pa-${prop.padding} cursor-pointer`"
      >
        <slot name="default" :is-hovering="isHovering" />
      </v-card>
    </template>
  </v-hover>
</template>

<script setup lang="ts">
const prop = defineProps({
  hoverColor: {
    type: String,
    default: 'primary'
  },
  color: {
    type: String,
    default: undefined
  },
  width: {
    type: String,
    default: undefined
  },
  height: {
    type: String,
    default: undefined
  },
  padding: {
    type: String,
    default: '2'
  }
})
</script>

<style scoped></style>
