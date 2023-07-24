<template>
  <div>
    <div class="sm:w-full w-72 h-[400px] border border-slate-200 rounded-lg">
      <div class="m-3">
        <div class="flex items-center gap-1">
          <p class="font-light text-slate-600">{{ $props.titleCard }}</p>
          <div class="w-2 h-2 rounded-full mt-[-15px]" :class="$props.colorTag"></div>
        </div>
        <div>
          <listCard />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import listCard from '../components/listCard.vue'

const props = withDefaults(
  defineProps<{
    titleCard: string
    colorTag: string
  }>(),
  {
    titleCard: '---'
  }
)
</script>

<style scoped></style>
