<template>
  <div class="w-72 h-[100vh] flex flex-col p-3 bg-slate-100">
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
        <img :src="picture" alt="" class="w-9 h-9 rounded-full" />
      </div>
      <div class="flex flex-col">
        <p class="mt-3 text-sm font-bold">{{ name }}</p>
        <p class="mt-[-20px] text-[0.67rem] font-light">{{ email }}</p>
      </div>
    </div>
    <div class="p-3 mt-10">
      <div class="flex justify-between">
        <p class="text-lg text-slate-600 font-light mb-[-5px]">Menu</p>
        <q-icon name="keyboard_arrow_down" class="mt-[4px] text-slate-600" size="1.5em"></q-icon>
      </div>
      <div class="mt-7">
        <ul class="flex flex-col gap-5">
          <li class="text-slate-600 hover:text-slate-900 flex items-center">
            <router-link to="/home">
              <q-icon name="home" size="2em" class="pr-3"></q-icon><span>Home</span></router-link
            >
          </li>
          <li class="text-slate-600 hover:text-slate-900 flex items-center">
            <router-link to="/about">
              <q-icon name="book" size="2em" class="pr-3"></q-icon
              ><span>About us</span></router-link
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="absolute left-0 bottom-0 p-3">
      <button @click="signOut()">
        <span class="text-slate-600 hover:text-slate-900">Sign Out </span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AuthGoogleProvider } from '../../store/authGoogle'

const { getUser, signOut } = AuthGoogleProvider()

const { name, email, picture } = getUser()
</script>

<style scoped></style>
