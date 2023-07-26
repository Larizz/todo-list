<template>
  <div class="flex flex-1 flex-col m-7 mb-10 h-full">
    <div>
      <div class="flex gap-16">
        <p class="font-light">Priority</p>
        <div class="bg-gray-200 p-1 px-5 h-7 rounded-3xl font-light">Medium</div>
      </div>
      <div class="flex gap-16">
        <p class="font-light">Tags</p>
        <div class="flex gap-2">
          <div class="bg-brand-info p-1 px-5 h-7 rounded-3xl font-light">Development</div>
          <div class="bg-brand-purple p-1 px-5 h-7 rounded-3xl font-light">Goals</div>
          <div class="bg-brand-warning p-1 px-5 h-7 rounded-3xl font-light">Dreams</div>
        </div>
      </div>
    </div>
    <div class="mt-20">
      <button class="new-task">
        New Task
        <q-icon name="keyboard_arrow_down" size="2em" class="text-white rounded-full ml-1"></q-icon>
      </button>

      <div class="">
        <div class="mt-8 border-none gap-5">
          <fieldTasks />
        </div>
      </div>
      <!-- v-for="(item, index) in titleCards"
          :key="index"
          :title-card="item.title"
          :color-tag="item.colorTag" -->
    </div>
    <!-- <div class="q-pa-md">
      <div class="q-gutter-md "> -->
    <!-- <ul>
          <li v-for="(item, index) in tasks" :key="index" class="text-slate-600 font-light">
            {{ (item as TodoItem).todo }}
          </li>
        </ul> -->
  </div>
  <!-- </div>
  </div> -->
</template>

<script setup lang="ts">
import fieldTasks from '../layout/components/fieldTasks.vue'
import { onMounted, ref } from 'vue'
import services from '../services'

const tasks = ref<unknown>([])

onMounted(() => {
  getAllTasks()
})

const getAllTasks = async () => {
  const { data } = await services.tasks.getAllTasks({ limit: 10, skip: 10 })
  const task = (tasks.value = data.todos)
  console.log(tasks.value)
}
</script>

<style scoped>
.new-task {
  background: linear-gradient(90deg, #06c8f9, #430de3, #00ffff);
  background-size: 600% 600%;
  animation: color 12s ease-in-out infinite;
  @apply text-white rounded-3xl px-3;
}
</style>
