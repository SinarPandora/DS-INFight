<template>
  <v-row>
    <v-col v-for="(area, i) in areas" :key="i" class="position-relative" cols="4">
      <action-card padding="0">
        <template #default>
          <v-img :src="area.img" cover />
          <v-card-subtitle class="text-center mt-1">
            {{ area.name }}
          </v-card-subtitle>
        </template>
      </action-card>

      <div v-if="area.badgeColor" style="position: absolute; top: 5px; right: 5px">
        <v-chip variant="flat" size="x-small" rounded :color="area.badgeColor">
          {{ area.badgeText }}
        </v-chip>
      </div>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ActionCard from '../../components/ActionCard.vue'

const getImgPath = (name: string) => new URL(`../../assets/graphs/System/MapPictures/${name}.png`, import.meta.url).href

const areas = ref([
  // assets/graphs/System/MapPictures/flying26.png
  {
    name: '废弃矿洞',
    img: getImgPath('flying26'),
    badgeColor: 'primary',
    badgeText: '自动探索中'
  },
  {
    name: '森林',
    img: getImgPath('flying11')
  },
  {
    name: '燃烧地牢',
    img: getImgPath('flying15')
  },
  {
    name: '雪山',
    img: getImgPath('flying18')
  },
  {
    name: '寒冰地牢',
    img: getImgPath('flying19'),
    badgeColor: 'success',
    badgeText: '新增'
  },
  {
    name: '采购',
    img: getImgPath('flying2')
  }
])
</script>

<style scoped></style>
