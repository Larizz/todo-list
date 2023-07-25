<template>
  <div>
    <div class="w-full min-h-20 bg-slate-200 rounded-lg mb-3 p-2">
      <ul>
        <li class="text-slate-600">{{ $props.task }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    task: string
    completed: boolean
  }>(),
  {}
)
</script>

<style scoped>
.tasks ::before {
  border: none;
}
</style>
