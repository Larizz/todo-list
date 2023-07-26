<template>
  <div class="header">
    <div class="flex justify-end items-center">
      <div class="flex gap-10 items-center">
        <div class="flex gap-2">
          <div class="w-5 h-5 rounded-full bg-brand-purple"></div>
          <div class="w-5 h-5 rounded-full bg-brand-danger"></div>
          <div class="w-5 h-5 rounded-full bg-brand-warning"></div>
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-end mx-4">
      <p class="font-normal text-white mb-1 text-xs">Tasks / <strong>My Tasks</strong></p>
      <div class="flex items-center gap-2">
        <p class="font-light text-white text-3xl">My Tasks</p>
        <div class="mt-[-10px]">
          <q-icon name="keyboard_arrow_down" class="text-white" size="2em"></q-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.header {
  width: 100%;
  background: linear-gradient(90deg, #06c8f9, #430de3, #00ffff);
  background-size: 600% 600%;
  animation: color 12s ease-in-out infinite;
  @apply h-44 p-3 flex flex-col gap-20;
}
</style>
