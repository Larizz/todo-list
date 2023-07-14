<template>
  <div class="flex flex-1 h-[3.5rem] justify-between p-1 px-4">
    <div>
      <p class="text-2xl font-light mt-3">Week Todo List</p>
    </div>
    <div class="flex items-center gap-3">
      <p class="text-lg font-light flex mt-3">Olá, {{ user?.displayName }}</p>
      <div
        class="w-[2.8rem] h-[2.8rem] border-2 border-brand-main rounded-full flex justify-center items-center"
      >
        <img
          :src="user && user.photoURL ? user.photoURL : undefined"
          alt=""
          class="w-[2.2rem] h-[2.2rem] rounded-full"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import { AuthGoogleProvider } from '../../store/authGoogle'

const { user, signInGoogle, signOut, loadStorageData } = AuthGoogleProvider()

onMounted(() => {
  loadStorageData()
})

console.log(user?.displayName)
</script>

<style scoped></style>
