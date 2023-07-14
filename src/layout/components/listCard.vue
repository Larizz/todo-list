<template>
  <div>
    <div class="w-72 sm-96 flex flex-col items-center">
      <div>
        <p class="text-xl text-brand-main font-light flex w-full justify-center">
          {{ props.title }}
        </p>
        <ul class="">
          <li class="mb-6"><q-input v-model="newTask" :dense="true" color="black"></q-input></li>
          <li>
            <button
              class="rounded-sm text-white h-7 w-14 bg-brand-main hover:h-8 hover:w-16"
              @click="AddingNewTask()"
            >
              Add
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Services from '../../services'

const newTask = ref('')
const dense = ref(false)

const props = withDefaults(
  defineProps<{
    title: string
  }>(),
  {
    title: '---'
  }
)

const AddingNewTask = async () => {
  const data = await Services.tasks.addTask(newTask.value)
  console.log(data)
}
</script>

<style scoped>
.tasks ::before {
  border: none;
}
</style>
