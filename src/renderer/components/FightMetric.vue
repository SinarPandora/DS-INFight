<script setup lang="ts"></script>

<template>
  <v-row class="flex-grow-1" align="center">
    <!-- 累积战胜 -->
    <v-col cols="4">
      <v-row>
        <v-col cols="4">
          <v-icon icon="mdi-trophy" color="warning" size="40" />
        </v-col>
        <v-col cols="8">
          <p class="font-weight-bold">累积战胜</p>
          <p>10</p>
        </v-col>
      </v-row>
    </v-col>
    <!-- 近期战胜 -->
    <v-col cols="4">
      <v-row>
        <v-col cols="4">
          <v-icon icon="mdi-trophy-outline" color="warning" size="40" />
        </v-col>
        <v-col cols="8">
          <p class="font-weight-bold">近期战胜</p>
          <p>7</p>
        </v-col>
      </v-row>
    </v-col>
    <!-- 近期惜败 -->
    <v-col cols="4">
      <v-row>
        <v-col cols="4">
          <v-icon icon="mdi-trophy-broken" color="secondary" size="40" />
        </v-col>
        <v-col cols="8">
          <p class="font-weight-bold">近期惜败</p>
          <p>1</p>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<style scoped></style>
