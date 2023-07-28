<template>
  <div class="grid sm:grid-cols-4 grid-cols-1 q-px-md q-pt-md rounded-lg gap-3 border-none">
    <div class="w-full bg-slate-100 rounded-lg p-4">
      <div class="flex items-center gap-1">
        <p class="font-light text-slate-600 text-base">Backlog</p>
        <div class="w-2 h-2 rounded-full mt-[-15px] bg-brand-info"></div>
      </div>
      <q-scroll-area
        style="height: 475px; max-width: 500px"
        :thumb-style="{
          right: '0px',
          borderRadius: '5px',
          width: '5px'
        }"
        class="p-3"
      >
        <draggable v-model="backlog" tag="ul" group="todos" :animation="300" class="min-h-[100px]">
          <template #item="{ element: todo }">
            <li class="my-3 p-3 rounded-lg bg-white text-slate-600 shadow-md min-h-[70px]">
              {{ todo }}
            </li>
          </template>
        </draggable>
      </q-scroll-area>
      <InputNewTask />
    </div>
    <div class="w-full bg-slate-100 rounded-lg p-4 min-h-[100px]">
      <div class="flex items-center gap-1">
        <p class="font-light text-slate-600 text-base">Todo</p>
        <div class="w-2 h-2 rounded-full mt-[-15px] bg-brand-danger"></div>
      </div>
      <q-scroll-area
        style="height: 475px; max-width: 500px"
        :thumb-style="{
          right: '0px',
          borderRadius: '5px',
          width: '5px'
        }"
        class="p-3"
      >
        <draggable v-model="todos" tag="ul" group="todos" :animation="300" class="min-h-[500px]">
          <template #item="{ element: todo }">
            <li class="my-3 p-3 rounded-lg bg-white text-slate-600 shadow-md min-h-[70px]">
              {{ todo }}
            </li>
          </template>
        </draggable>
      </q-scroll-area>
      <InputNewTask />
    </div>

    <div class="w-full bg-slate-100 rounded-lg p-4">
      <div class="flex items-center gap-1">
        <p class="font-light text-slate-600 text-base">InProgress</p>
        <div class="w-2 h-2 rounded-full mt-[-15px] bg-brand-purple"></div>
      </div>
      <q-scroll-area
        style="height: 475px; max-width: 500px"
        :thumb-style="{
          right: '0px',
          borderRadius: '5px',
          width: '5px'
        }"
        class="p-3"
      >
        <draggable
          v-model="inProgress"
          tag="ul"
          group="todos"
          :animation="300"
          class="min-h-[500px]"
        >
          <template #item="{ element: todo }">
            <li class="my-3 p-3 rounded-lg bg-white text-slate-600 shadow-md min-h-[70px]">
              {{ todo }}
            </li>
          </template>
        </draggable>
      </q-scroll-area>
      <InputNewTask />
    </div>

    <div class="w-full bg-slate-100 rounded-lg p-4 min-h-[100px]">
      <div class="flex items-center gap-1">
        <p class="font-light text-slate-600 text-base">Completed</p>
        <div class="w-2 h-2 rounded-full mt-[-15px] bg-brand-warning"></div>
      </div>
      <q-scroll-area
        style="height: 475px"
        :thumb-style="{
          right: '0px',
          borderRadius: '5px',
          width: '5px'
        }"
        class="p-3"
      >
        <draggable
          v-model="completed"
          tag="ul"
          group="todos"
          :animation="300"
          class="min-h-[500px]"
        >
          <template #item="{ element: todo }">
            <li class="my-3 p-3 rounded-lg bg-white text-slate-600 shadow-md min-h-[70px]">
              {{ todo }}
            </li>
          </template>
        </draggable>
      </q-scroll-area>

      <InputNewTask />
    </div>
  </div>
</template>

<!--  <ul>
          <li v-for="(item, index) in tasks" :key="index" class="text-slate-600 font-light">
            {{ (item as TodoItem).todo }}
          </li>
        </ul> -->

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import services from '../../services'
import draggable from 'vuedraggable'
import InputNewTask from './InputNewTask.vue'

const backlog = ref([])

const todos = ref([])

const inProgress = ref([])

const completed = ref([])

onMounted(() => {
  getAllTasks()

  const backlogData = localStorage.getItem('backlog')
  const todosData = localStorage.getItem('todos')
  const inProgressData = localStorage.getItem('inProgress')
  const completedData = localStorage.getItem('completed')

  if (backlogData) backlog.value = JSON.parse(backlogData)
  if (todosData) todos.value = JSON.parse(todosData)
  if (inProgressData) inProgress.value = JSON.parse(inProgressData)
  if (completedData) completed.value = JSON.parse(completedData)
})

// Watch for changes in todos, inProgress, and completed arrays and update localStorage
watch([todos, inProgress, completed], ([newTodos, newInProgress, newCompleted]) => {
  localStorage.setItem('backlog', JSON.stringify(newTodos))
  localStorage.setItem('todos', JSON.stringify(newTodos))
  localStorage.setItem('inProgress', JSON.stringify(newInProgress))
  localStorage.setItem('completed', JSON.stringify(newCompleted))
})

const tasks = ref<unknown>([])

const getAllTasks = async () => {
  const { data } = await services.tasks.getAllTasks({ limit: 10, skip: 10 })
  const task = (tasks.value = data.todos)
  backlog.value = tasks.value = data.todos.map((task: any) => task.todo)
  console.log(tasks.value)
}
</script>

<style scoped>
.drop-target {
  height: 400px;
  width: 200px;
  min-width: 200px;
  background-color: gainsboro;
}

.drag-enter {
  outline-style: dashed;
}

.box {
  width: 100px;
  height: 100px;
  float: left;
  cursor: pointer;
}

@media only screen and (max-width: 500px) {
  .drop-target {
    height: 200px;
    width: 100px;
    min-width: 100px;
    background-color: gainsboro;
  }
}
</style>
