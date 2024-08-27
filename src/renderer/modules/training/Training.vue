<template>
  <v-sheet color="transparent" class="d-flex fill-height align-center">
    <v-row>
      <v-col v-for="i in [1, 2, 3]" :key="i" cols="12">
        <training-status />
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script setup lang="ts">
import TrainingStatus from './TrainingStatus.vue'
</script>

<style scoped></style>
