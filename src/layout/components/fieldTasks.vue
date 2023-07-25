<template>
  <div class="h-[100vh]">
    <div class="row no-wrap justify-around q-px-md q-pt-md rounded-lg h-full gap-3 border-none">
      <div
        v-mutation="handler1"
        @dragenter="onDragEnter"
        @dragleave="onDragLeave"
        @dragover="onDragOver"
        @drop="onDrop"
        class="bg-white border border-slate-200 rounded-lg w-1/3 mb-4"
      >
        <div class="m-3 mr-6">
          <div class="flex items-center gap-1">
            <p class="font-light text-slate-600">Todo</p>
            <div class="w-2 h-2 rounded-full mt-[-15px] bg-brand-info"></div>
          </div>
        </div>
        <q-scroll-area
          style="height: 500px"
          :thumb-style="{
            right: '0px',
            borderRadius: '5px',
            width: '6px',
            margin: '-3px'
          }"
        >
          <div v-for="(item, index) in tasks" :key="index" class="m-3">
            <div :id="index" draggable="true" @dragstart="onDragStart" class="w-full">
              <listCard :task="item.todo" />
            </div>
          </div>
        </q-scroll-area>
      </div>

      <div
        v-mutation="handler2"
        @dragenter="onDragEnter"
        @dragleave="onDragLeave"
        @dragover="onDragOver"
        @drop="onDrop"
        class="rounded-lg xl:w-1/3 w-full border border-slate-200 mb-4 p-3"
      >
        <div class="m-3 mr-6">
          <div class="flex items-center gap-1">
            <p class="font-light text-slate-600">InProgress</p>
            <div class="w-2 h-2 rounded-full mt-[-15px] bg-brand-purple"></div>
          </div>
        </div>
      </div>

      <div
        v-mutation="handler2"
        @dragenter="onDragEnter"
        @dragleave="onDragLeave"
        @dragover="onDragOver"
        @drop="onDrop"
        class="rounded-lg w-1/3 border border-slate-200 mb-4 p-3"
      >
        <div class="m-3 mr-6">
          <div class="flex items-center gap-1">
            <p class="font-light text-slate-600">Completed</p>
            <div class="w-2 h-2 rounded-full mt-[-15px] bg-brand-warning"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!--  <ul>
          <li v-for="(item, index) in tasks" :key="index" class="text-slate-600 font-light">
            {{ (item as TodoItem).todo }}
          </li>
        </ul> -->

<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'
import listCard from '../components/listCard.vue'
import services from '../../services'

onMounted(() => {
  getAllTasks()
})

const status1 = ref<any>([])
const status2 = ref<any>([])

const handler1 = (mutationRecords: any) => {
  status1.value = []
  for (const index in mutationRecords) {
    const record = mutationRecords[index]
    const info = `type: ${record.type}, nodes added: ${
      record.addedNodes.length > 0 ? 'true' : 'false'
    }, nodes removed: ${record.removedNodes.length > 0 ? 'true' : 'false'}, oldValue: ${
      record.oldValue
    }`
    status1.value.push(info)
  }
}

const handler2 = (mutationRecords: any) => {
  status2.value = []
  for (const index in mutationRecords) {
    const record = mutationRecords[index]
    const info = `type: ${record.type}, nodes added: ${
      record.addedNodes.length > 0 ? 'true' : 'false'
    }, nodes removed: ${record.removedNodes.length > 0 ? 'true' : 'false'}, oldValue: ${
      record.oldValue
    }`
    status2.value.push(info)
  }
}

// store the id of the draggable element
const onDragStart = (e: any) => {
  e.dataTransfer.setData('text', e.target.id)
  e.dataTransfer.dropEffect = 'move'
}

const onDragEnter = (e: any) => {
  // don't drop on other draggables
  if (e.target.draggable !== true) {
    e.target.classList.add('drag-enter')
  }
}

const onDragLeave = (e: any) => {
  e.target.classList.remove('drag-enter')
}

const onDragOver = (e: any) => {
  e.preventDefault()
}

const onDrop = (e: any) => {
  e.preventDefault()

  // don't drop on other draggables
  if (e.target.draggable === true) {
    return
  }

  const draggedId = e.dataTransfer.getData('text')
  const draggedEl = document.getElementById(draggedId)

  // check if the original parent node
  if (draggedEl?.parentNode === e.target) {
    e.target.classList.remove('drag-enter')
    return
  }

  // make the exchange
  draggedEl.parentNode.removeChild(draggedEl)
  e.target.appendChild(draggedEl)
  e.target.classList.remove('drag-enter')
}

const props = withDefaults(
  defineProps<{
    titleCard: string
    colorTag: string
  }>(),
  {
    titleCard: '---'
  }
)

const tasks = ref<unknown>([])

const getAllTasks = async () => {
  const { data } = await services.tasks.getAllTasks({ limit: 10, skip: 10 })
  const task = (tasks.value = data.todos)
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
