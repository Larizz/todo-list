<template>
  <component :is="icons[name]" v-bind="$props" />
</template>

<script setup lang="ts">
import { Loading } from 'quasar'
import Schedule from './Schedule.vue'

const icons = {
  Schedule
} as any

defineProps<{
  name: string
}>()
</script>
