<template>
  <div>
    <SidebarMenu />
  </div>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { AuthGoogleProvider } from './contexts/authGoogle'

const authStore = AuthGoogleProvider()

console.log(authStore)

authStore.signInGoogle()
</script>

<style scoped></style>
