<template>
  <div>
    <SidebarMenu />
  </div>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { AuthGoogleProvider } from './store/authGoogle'

const authStore = AuthGoogleProvider()

console.log(authStore)

authStore.signInGoogle()
</script>

<style scoped></style>
