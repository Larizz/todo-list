<template>
  <div class="flex flex-1 flex-col m-8 mb-10">
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
import { computed, onMounted, ref } from 'vue'
import services from '../services'

const tasks = ref<unknown>([])
const current = ref({
  page: 1,
  rowPerPage: 5
})

onMounted(() => {
  getAllTasks()
})

interface TodoItem {
  id: number
  todo: string
  completed: boolean
  userId: number
}

const getAllTasks = async () => {
  const { data } = await services.tasks.getAllTasks({ limit: 10, skip: 10 })
  const task = (tasks.value = data.todos)
  console.log(tasks.value)
}

const titleListTasks1 = [
  {
    title: 'Sunday'
  },
  {
    title: 'Monday'
  }
]

const titleListTask2 = [
  {
    title: 'Tuesday'
  },
  {
    title: 'Wednesday'
  }
]

const titleListTask3 = [
  {
    title: 'Thursday'
  },
  {
    title: 'Friday'
  }
]

const titleListTask4 = [
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
