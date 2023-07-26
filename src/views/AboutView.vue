<template>
  <div class="h-[100vh] w-full m-0">
    <div class="grid sm:grid-cols-2 grid-cols-1 m-14">
      <div class="w-96 m-16">
        <p class="text-xs font-light text-slate-500 tracking-widest">ABOUT US</p>
        <p class="text-[2.5rem] font-bold leading-[2.3rem]">
          We help you succeed in the pursuit of your goals.
        </p>
        <p class="text-xs text-slate-500 font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, ea perspiciatis
          placeat debitis aliquam qui. Cumque cum, voluptate harum laboriosam nam ipsam? Laborum
          maxime neque, cumque inventore error provident rem. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ullam porro non molestiae ipsam! Provident non eius quod earum iure,
          expedita beatae molestias aliquid ea, quis inventore architecto sapiente minima dolore.
        </p>
      </div>
      <div class="m-10">
        <div class="w-60 h-60 bg-gray-200 ml-40 z-0 rounded-full"></div>
        <div class="about-me"></div>
        <div class="w-64 h-64 bg-slate-300 rounded-full mt-[-100px]"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped>
.about-me {
  background: linear-gradient(90deg, #06c8f9, #430de3, #00ffff);
  background-size: 600% 600%;
  animation: color 12s ease-in-out infinite;
  position: relative;
  @apply w-72 h-72 rounded-full mt-[-150px];
}
</style>
