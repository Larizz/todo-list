<template>
  <div class="flex gap-2 mb-8">
    <div>
      <input
        type="text"
        class="focus:outline-none border border-slate-200 p-2 px-3 rounded-lg"
        placeholder="Add new task.."
        v-model="newTask"
      />
    </div>
    <div>
      <button
        class="p-2 px-3 rounded-lg bg-brand-main hover:bg-blue-800"
        @click="handleCreateNewTask()"
      >
        <q-icon name="adding" size="1.2em" class="text-white"></q-icon>
      </button>
    </div>
    <q-dialog v-model="noticeNewTask" persistent>
      <div class="w-80 h-24 bg-white p-4">
        <div class="flex justify-center">
          <p class="text-base font-light">New task addeg!!!</p>
        </div>
        <div class="flex justify-end">
          <button
            class="bg-brand-main hover:bg-blue-800 text-white px-2 py-1 rounded-lg"
            @click="noticeNewTask = false"
          >
            Close
          </button>
        </div>
      </div>
    </q-dialog>
  </div>
  <div class="grid sm:grid-cols-4 grid-cols-1 q-px-md q-pt-md rounded-lg gap-3 border-none">
    <div class="w-full bg-slate-100 rounded-lg p-4 h-[500px]">
      <div class="flex items-center gap-1">
        <p class="font-light text-slate-600 text-base">Backlog</p>
        <div class="w-2 h-2 rounded-full mt-[-15px] bg-brand-info"></div>
      </div>
      <q-scroll-area
        style="height: 425px; max-width: 500px"
        :thumb-style="{
          right: '0px',
          borderRadius: '5px',
          width: '5px'
        }"
        class="p-3"
      >
        <draggable v-model="backlog" tag="ul" group="todos" :animation="300" class="min-h-[100px]">
          <template #item="{ element: todo }">
            <li
              class="my-3 p-3 rounded-lg bg-white text-slate-600 shadow-md min-h-[70px] flex justify-between items-start"
            >
              {{ todo }}
              <button class="text-black">...</button>
            </li>
          </template>
        </draggable>
      </q-scroll-area>
    </div>
    <div class="w-full bg-slate-100 rounded-lg p-4 h-[500px]">
      <div class="flex items-center gap-1">
        <p class="font-light text-slate-600 text-base">Todo</p>
        <div class="w-2 h-2 rounded-full mt-[-15px] bg-brand-danger"></div>
      </div>
      <q-scroll-area
        style="height: 425px; max-width: 500px"
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
    </div>

    <div class="w-full bg-slate-100 rounded-lg p-4 h-[500px]">
      <div class="flex items-center gap-1">
        <p class="font-light text-slate-600 text-base">InProgress</p>
        <div class="w-2 h-2 rounded-full mt-[-15px] bg-brand-purple"></div>
      </div>
      <q-scroll-area
        style="height: 425px; max-width: 500px"
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
    </div>

    <div class="w-full bg-slate-100 rounded-lg p-4 h-[500px]">
      <div class="flex items-center gap-1">
        <p class="font-light text-slate-600 text-base">Completed</p>
        <div class="w-2 h-2 rounded-full mt-[-15px] bg-brand-warning"></div>
      </div>
      <q-scroll-area
        style="height: 425px"
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

const backlog = ref([])

const todos = ref([])

const inProgress = ref([])

const completed = ref([])

const newTask = ref('')

const noticeNewTask = ref(false)

onMounted(() => {
  getAllTasks()

  const backlogData = localStorage.getItem('backlog')
  const todosData = localStorage.getItem('todos')
  const inProgressData = localStorage.getItem('inProgress')
  const completedData = localStorage.getItem('completed')
  const newTaskData = localStorage.getItem('newTask')

  if (backlogData) backlog.value = JSON.parse(backlogData)
  if (todosData) todos.value = JSON.parse(todosData)
  if (inProgressData) inProgress.value = JSON.parse(inProgressData)
  if (completedData) completed.value = JSON.parse(completedData)
  if (newTaskData) newTask.value = newTaskData
})

// Watch for changes in todos, inProgress, and completed arrays and update localStorage
watch(
  [todos, inProgress, completed, newTask],
  ([newTodos, newInProgress, newCompleted, newTask]) => {
    localStorage.setItem('backlog', JSON.stringify(newTodos))
    localStorage.setItem('todos', JSON.stringify(newTodos))
    localStorage.setItem('inProgress', JSON.stringify(newInProgress))
    localStorage.setItem('completed', JSON.stringify(newCompleted))
    localStorage.setItem('newTask', newTask)
  }
)

const tasks = ref<string[]>([])

const getAllTasks = async () => {
  const { data } = await services.tasks.getAllTasks({ limit: 10, skip: 10 })
  const task = (tasks.value = data.todos)
  backlog.value = tasks.value = data.todos.map((task: any) => task.todo)
  console.log(tasks.value)
}

function handleCreateNewTask() {
  if (newTask.value) {
    tasks.value.push(newTask.value)
    newTask.value = ''
    noticeNewTask.value = true
  }
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
