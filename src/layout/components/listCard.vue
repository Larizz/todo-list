<template>
  <div>
    <div class="w-full h-20 bg-slate-200 rounded-2xl"></div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    task: string
  }>(),
  {}
)
</script>

<style scoped>
.tasks ::before {
  border: none;
}
</style>
