<template>
  <div>
    <div v-if="newTask" class="flex items-center gap-2">
      <div>
        <button
          class="bg-white rounded-full w-5 h-5 flex justify-center items-center border border-slate-200"
          @click="createNewTask()"
        >
          <q-icon name="adding" size="1em" class="text-brand-main"></q-icon>
        </button>
      </div>
    </div>
    <div
      class="hover:bg-slate-200 text-brand-main rounded-md transition ease-in-out duration-200 px-2"
    >
      <div class="w-full flex items-center justify-between">
        <button @click="handleNewTask()" class="text-xs p-2 px-1 gap-2">
          <q-icon name="adding" size="1.2em"></q-icon>
          <span>Add new task</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const newTask = ref(false)

const props = defineProps<{
  task: string
  tasks: string[]
}>()

function handleNewTask() {
  newTask.value = !newTask.value
}
</script>

<style scoped></style>
