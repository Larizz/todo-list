<template>
  <div class="w-72 h-[100vh] flex flex-col p-3 bg-slate-200">
    <div>
      <p class="text-[2rem] text-slate-black font-bold mb-0">
        <strong class="text-brand-main text-[2.5rem]">Todo</strong>list
      </p>
      <p class="text-slate-600 text-sm font-light mt-[-13px]">Focus. Prioritize. Execute.</p>
    </div>
    <div class="border border-slate-300 pr-3 rounded-lg mt-5 flex">
      <div
        class="rounded-full w-10 h-10 border border-brand-main m-2 mx-4 flex justify-center items-center"
      >
        <img
          :src="user && user.photoURL ? user.photoURL : undefined"
          alt=""
          class="w-9 h-9 rounded-full"
        />
      </div>
      <div class="flex flex-col">
        <p class="mt-3 text-sm font-bold">{{ user?.displayName }}</p>
        <p class="mt-[-20px] text-xs font-light">{{ user?.email }}</p>
      </div>
    </div>
    <div class="grid-cols-3"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, createApp } from 'vue'
import { AuthGoogleProvider } from '../../store/authGoogle'

const { user, loadStorageData } = AuthGoogleProvider()
const savedUser = ref(null)

onMounted(() => {
  const savedUser = sessionStorage.getItem('user')
  loadStorageData()

  if (savedUser) {
    console.log('user do local storage')
    console.log(JSON.parse(savedUser))
  }
})
</script>

<style scoped></style>
