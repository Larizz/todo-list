<template>
  <div class="grid sm:grid-cols-3 grid-cols-1 q-px-md q-pt-md rounded-lg h-full gap-3 border-none">
    <div
      v-mutation="handler1"
      @dragenter="onDragEnter"
      @dragleave="onDragLeave"
      @dragover="onDragOver"
      @drop="onDrop"
      class="bg-white border border-slate-200 rounded-lg mb-4"
    >
      <div class="m-3">
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
      class="rounded-lg border border-slate-200 mb-4 p-3"
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
      class="rounded-lg border border-slate-200 mb-4 p-3"
    >
      <div class="m-3 mr-6">
        <div class="flex items-center gap-1">
          <p class="font-light text-slate-600">Completed</p>
          <div class="w-2 h-2 rounded-full mt-[-15px] bg-brand-warning"></div>
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
import { onMounted, ref, ReactiveFlags } from 'vue'
import listCard from '../components/listCard.vue'
import services from '../../services'

onMounted(() => {
  getAllTasks()

  const elements = document.querySelectorAll<HTMLElement>('.draggable')

  elements.forEach((element) => {
    const savedPosition = localStorage.getItem(element.id)

    if (savedPosition) {
      const position = JSON.parse(savedPosition)
      element.style.position = 'absolute'
      element.style.left = `${position.left}px`
      element.style.top = `${position.top}px`
    }
  })
})

const draggedId = ref('')
const draggedEl = ref(null)

const status1 = ref<any>([])
const status2 = ref<any>([])

localStorage.setItem('status1', JSON.stringify(status1.value))
localStorage.setItem('status2', JSON.stringify(status2.value))

status1.value = JSON.parse(localStorage.getItem('status1')!)
status2.value = JSON.parse(localStorage.getItem('status2')!)

console.log(status1.value)

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
  if (draggedEl) {
    draggedEl.parentNode?.removeChild(draggedEl)
    e.target.appendChild(draggedEl)
  }
  e.target.classList.remove('drag-enter')

  const { left, top } = e.target.getBoundingClientRect()
  // getBoundingClientRect é um método js que retorna um objeto DOMRect que fornece info sobre a posição do elemento na página

  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  // obtendo a quantidade de pixels que a página foi rolada na direção vertical

  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft

  const position = {
    left: left + scrollLeft,
    top: top + scrollTop
  }
  // somando a posição do elemento em relação à janela de visualização com a quantidade de rolagem da página para obter a posição do elemento em relação à página inteira

  localStorage.setItem(draggedId, JSON.stringify(position))
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
