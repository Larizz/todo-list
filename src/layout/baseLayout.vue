<template>
  <div class="bg-white h-screen m-6 rounded-2xl flex">
    <div class="flex flex-1 flex-col">
      <div>
        <Header />
      </div>

      <div class="flex flex-1 mt-1 h-screen">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Menu from '../layout/components/menu.vue'
import Header from '../layout/components/Header.vue'
</script>

<style scoped></style>
