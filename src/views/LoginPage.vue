<template>
  <div class="h-screen w-full">
    <div class="w-full h-6 px-16 py-3 flex justify-between">
      <div>
        <p class="font-light text-[26px]">Todo List</p>
      </div>
      <div>
        <ul class="flex gap-12 text-[22px] font-extralight">
          <li class="hover:font-light"><RouterLink to="/about">About Us</RouterLink></li>
          <li class="hover:font-light">Project</li>
          <li class="hover:font-light">Services</li>
        </ul>
      </div>
    </div>
    <div class="flex justify-between m-16 my-28 gap-40">
      <div class="flex flex-col flex-1">
        <div class="flex">
          <h1 class="font-black leading-[0.9] text-[180px]">
            TODO <br />
            LIST
          </h1>
          <img
            src="../assets/calendar-schedule-svgrepo-com.svg"
            alt=""
            class="ml-[-64px] mt-44 w-28"
          />
        </div>
        <div class="bg-white w-full mt-8 rounded-xl h-[500px] flex justify-center">
          <div class="bg-brand-main w-full m-12 rounded-xl">
            <h4 class="title">Why is it important to list your tasks?</h4>
          </div>
        </div>
      </div>
      <div>
        <div class="w-[430px] h-[530px] bg-black rounded-lg py-10 px-12 flex flex-col">
          <div><p class="flex justify-center text-white font-bold text-4xl">Login</p></div>
          <div>
            <div class="flex flex-col gap-2 mt-8">
              <label for="email" class="text-white text-xl font-medium">E-mail:</label>
              <input
                required
                type="email"
                placeholder="     joedoe@gmail.com"
                label="E-mail"
                class="font-light text-sm rounded-full h-10"
                v-model="email"
              />
            </div>
            <div class="flex flex-col gap-2 mt-8">
              <label for="password" class="text-white text-xl font-medium">Password:</label>
              <input
                required
                type="password"
                placeholder="     ********"
                label="Password"
                class="font-light text-sm rounded-full h-10"
                v-model="password"
              />
            </div>
            <div class="mt-16">
              <button class="button" type="submit" @submit.prevent="">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import http from '@/services/http.js'

async function Login() {
  console.log('Login')
}

const email = ref('')
const password = ref('')
</script>

<style scoped>
.title {
  font-weight: bold;
  color: white;
  font-size: 28px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  margin: 25px;
}

.button {
  background: linear-gradient(to right, #ffffff, #b2b2b2);
  @apply h-10 w-full rounded-xl font-bold text-base;
}

.button:hover {
  background: #b2b2b2;
}
</style>
