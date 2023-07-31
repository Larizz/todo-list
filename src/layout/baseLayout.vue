<template>
  <div class="h-[100vh]">
    <div class="flex bg-white">
      <div class="fixed">
        <Menu />
      </div>
      <div class="flex flex-1 flex-col">
        <div class="ml-72" :class="{ 'ml-5': state.miniState }">
          <Header />
        </div>

        <div class="flex flex-1 mt-1 h-screen ml-72" :class="{ 'ml-5': state.miniState }">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Menu from '../layout/components/menu.vue'
import Header from '../layout/components/Header.vue'
import { SidebarMenuControl } from '@/store/utilities'

const { state } = SidebarMenuControl()
</script>

<style scoped></style>
