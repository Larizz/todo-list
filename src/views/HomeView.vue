<template>
  <div class="flex flex-1 flex-col m-8 mb-10">
    <div class="q-pa-md">
      <div class="q-gutter-md">
        <q-carousel
          v-model="slide"
          transition-prev="scale"
          transition-next="scale"
          swipeable
          animated
          control-color="black"
          navigation
          arrows
          height="500px"
          class="bg-white text-black shadow-1 rounded-borders"
        >
          <q-carousel-slide name="style" class="column no-wrap flex-center">
            <div class="q-mt-md text-center flex">
              <list-card
                v-for="(item, index) in titleListTasks1"
                :key="index"
                :title="item.title"
              ></list-card>
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="tv" class="column no-wrap flex-center">
            <div class="q-mt-md text-center flex">
              <list-card
                v-for="(item, index) in titleListTask2"
                :key="index"
                :title="item.title"
              ></list-card>
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="layers" class="column no-wrap flex-center">
            <div class="q-mt-md text-center">
              <list-card
                v-for="(item, index) in titleListTask3"
                :key="index"
                :title="item.title"
              ></list-card>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
  </div>
  <div>
    <!-- <div class="grid grid-cols-4 mt-6">
      <list-card
        v-for="(item, index) in titleListTasks"
        :key="index"
        :title="item.title"
      ></list-card>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import listCard from '../layout/components/listCard.vue'
import { ref } from 'vue'

const slide = ref('style')

const titleListTasks1 = [
  {
    title: 'Sunday'
  },
  {
    title: 'Monday'
  },
  {
    title: 'Tuesday'
  }
]

const titleListTask2 = [
  {
    title: 'Wednesday'
  },
  {
    title: 'Thursday'
  },
  {
    title: 'Friday'
  }
]

const titleListTask3 = [
  {
    title: 'Saturday'
  }
]
</script>

<style scoped>
.menu-sidebar {
  border-right: none;
}
</style>
