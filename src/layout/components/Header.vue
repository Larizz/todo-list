<template>
  <div class="header">
    <div class="px-5 py-4 flex justify-between items-center">
      <div class="flex gap-10 items-center">
        <div class="flex gap-2">
          <div class="w-5 h-5 rounded-full bg-brand-purple"></div>
          <div class="w-5 h-5 rounded-full bg-brand-danger"></div>
          <div class="w-5 h-5 rounded-full bg-brand-main"></div>
        </div>
        <div class="flex gap-3">
          <a href=""><img src="../../assets/aboutMe.svg" alt="" /></a>
          <a href=""><img src="../../assets/botao-home.svg" alt="" /></a>
        </div>
      </div>
      <div>
        <q-input v-model="text">
          <template v-slot:prepend>
            <q-icon name="search"></q-icon>
          </template>
        </q-input>
      </div>
      <div class="flex items-center gap-3">
        <p class="text-lg font-light flex mt-3">{{ user?.displayName }}</p>
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
    <!-- <div>
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
    </div> -->
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

<style scoped>
.header {
  width: 100%;
  height: 5.5rem;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  @apply bg-brand-warning;
}
</style>
