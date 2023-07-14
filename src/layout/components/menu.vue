<template>
  <div class="w-[4rem] h-screen border border-slate-200 flex flex-col justify-between">
    <div>
      <ul class="m-4">
        <li class="mb-8">
          <img src="../../assets/calendar-schedule-svgrepo-com.svg" alt="" />
        </li>
        <li class="mb-6">
          <router-link to="/home" replace
            ><img src="../../assets/botao-home.svg" alt=""
          /></router-link>
          <q-tooltip anchor="center right" self="center left" :offset="[10, 10]">
            <strong>Home</strong>
          </q-tooltip>
        </li>
        <li class="mb-6">
          <router-link to="/about"><img src="../../assets/aboutMe.svg" alt="" /></router-link>
          <q-tooltip anchor="center right" self="center left" :offset="[10, 10]">
            <strong>About me</strong>
          </q-tooltip>
        </li>
        <li>
          <a href="">
            <img src="../../assets/idea.svg" alt="" />
            <q-tooltip anchor="center right" self="center left" :offset="[10, 10]">
              <strong>Project</strong>
            </q-tooltip>
          </a>
        </li>
      </ul>
    </div>

    <div>
      <button class="m-3">
        <img src="../../assets/logOut.svg" alt="" />
        <q-tooltip anchor="center right" self="center left" :offset="[10, 10]">
          <strong>Logout</strong>
        </q-tooltip>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
