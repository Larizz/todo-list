<template>
  <div>
    <div
      class="text-slate-500 hover:bg-slate-200 rounded-md transition ease-in-out duration-200 px-2"
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
import { ref } from 'vue'

const newTask = ref(false)

function handleNewTask() {
  newTask.value = !newTask.value
}
</script>

<style scoped></style>
