<template>
  <div class="h-screen w-full flex justify-center items-center py-10">
    <div
      class="bg-white w-[28rem] h-[37rem] rounded-lg flex flex-col items-center p-5 px-16 m-5 sm:m-0"
    >
      <div class="text-slate-600 font-light text-3xl mt-8">
        <span>Login</span>
      </div>
      <div class="w-full my-12 text-slate-500">
        <div>
          <q-input
            bottom-slots
            label="E-mail"
            input-style="{background-color: #430de3}
            "
            color="brand-main"
          >
            <template v-slot:prepend>
              <q-icon name="email"></q-icon>
            </template>
          </q-input>
        </div>
        <div class="mt-6">
          <q-input bottom-slots type="password" label="Password">
            <template v-slot:prepend>
              <q-icon name="lock"></q-icon>
            </template>
          </q-input>
          <a href="#" class="flex justify-end hover:text-black">Forgot password?</a>
        </div>
        <div class="mt-8 flex justify-center">
          <button type="submit" class="button-login">Login</button>
        </div>
      </div>
      <div class="flex flex-col justify-center gap-3">
        <span class="text-slate-600">Or Sign Up Using</span>
        <div class="flex justify-center gap-3">
          <div class="rounded-full bg-[#171515] w-10 h-10 flex justify-center items-center">
            <img src="../assets/github.svg" alt="" class="w-4 h-4 hover:w-5 hover:h-5" />
          </div>
          <div class="rounded-full bg-[#db4a39] w-10 h-10 flex justify-center items-center">
            <button @click="signInGoogle()">
              <img src="../assets/google.svg" alt="" class="w-4 h-4 hover:w-5 hover:h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AuthGoogleProvider } from '@/store/authGoogle'

const { signInGoogle } = AuthGoogleProvider()
</script>

<style scoped>
.button-login {
  background: linear-gradient(45deg, #06c8f9, #430de3);
  @apply w-full h-10 text-white font-bold rounded-3xl;
}

.button-login:hover {
  background: linear-gradient(45deg, #1ecdf9, #5525e5);
}

.title {
  font-weight: bold;
  color: black;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  margin: 25px;
  @apply text-[1.2rem] sm:text-[1.75rem] leading-5 sm:leading-8;
}

.button {
  background: linear-gradient(to right, #ffffff, #b2b2b2);
  @apply h-10 w-full rounded-xl font-bold text-base;
}

.button:hover {
  background: #b2b2b2;
}
</style>
