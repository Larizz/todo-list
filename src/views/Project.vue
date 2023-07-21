<template>
  <div class="h-screen w-full">
    <!-- inicial page -->
    <section v-motion-fade :delay="1200">
      <div class="w-full h-6 sm:px-28 px-8 py-3 flex justify-between items-center text-white">
        <div>
          <p class="font-light sm:text-[1.625rem] text-[1.4rem]">Todo List</p>
        </div>
        <div>
          <ul class="flex sm:gap-12 gap-7 sm:text-[1.375rem] text-[0.9rem] font-extralight">
            <li class="hover:font-light"><RouterLink to="/login">Home</RouterLink></li>
            <li class="hover:font-light"><RouterLink to="/about">About Us</RouterLink></li>
            <li class="hover:font-light"><RouterLink to="/login">Login</RouterLink></li>
          </ul>
        </div>
      </div>
      <div
        class="grid sm:grid-cols-2 grid-cols-1 sm:flex-row justify-between sm:mt-20 sm:mx-28 mx-10 mt-24 sm:my-28 sm:gap-30"
      >
        <div class="flex flex-col flex-1">
          <div>
            <h1 class="font-black leading-[0.9] sm:text-[13.25rem] text-[7rem] text-white">
              TODO <br />
              LIST
            </h1>
          </div>
          <div class="mt-16">
            <button
              class="h-12 w-[12rem] rounded-3xl bg-slate-50 hover:bg-slate-200 text-gray-800 hover:text-gray-950"
            >
              <span class="font-light"><RouterLink to="/login"> Login</RouterLink></span>
            </button>
          </div>
        </div>
        <div
          v-motion
          :initial="{
            y: 0,
            opacity: 0
          }"
          :enter="{
            y: 10,
            opacity: 1,
            transition: {
              duration: 300,
              type: 'keyframes',
              ease: 'easeIn'
            }
          }"
          class="md:w-[40rem] sm:w-[640px] w-[256px] sm:h-[30rem] h-[15rem]"
        >
          <img
            src="../assets/mainPage.svg"
            alt=""
            class="rounded-2xl w-full md:h-[700px] sm:h-[640px] object-cover"
          />
        </div>
      </div>
    </section>

    <section v-motion-slide-bottom :delay="3000">
      <div class="w-full flex justify-center sm:my-96 my-52">
        <div class="w-[60rem] text-center mx-10">
          <span class="sm:text-[3.2rem] text-[1.7rem] text-slate-50 font-bold">
            A <strong class="sm:text-[4rem] text-[2rem] text-black">Todo List</strong> is a project
            that seeks to help you organize your weekly goals to increase productivity
          </span>
          <p class="mt-8 font-light text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, omnis dolorum rerum
            laudantium delectus voluptas. Debitis sed cumque asperiores, eveniet tempore autem porro
            et, illum doloremque praesentium fuga quam. Impedit! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Quibusdam sapiente blanditiis similique explicabo quam quo
            illum labore consectetur odit, laborum delectus adipisci saepe iusto temporibus officia
            culpa beatae magnam quia! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deleniti velit similique odit labore explicabo vero, nisi odio officiis itaque officia
            accusantium quas saepe? Commodi ratione laudantium dolorum voluptate maxime corporis?
          </p>
        </div>
      </div>
    </section>
    <section v-motion-fade>
      <div class="flex justify-center mx-20">
        <div class="grid sm:grid-cols-2 grid-cols-1 gap-20">
          <div class="text-white">
            <span class="sm:text-[4rem] text-[2.2rem] font-bold leading-[1]"
              >Log your tasks weekly</span
            >
            <p class="mt-10 sm:text-lg text-base">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero illum hic aliquid
              voluptatem exercitationem! Esse assumenda, asperiores ratione perferendis vel modi
              veniam necessitatibus sapiente, ea error deleniti omnis, obcaecati ipsum.
            </p>
            <p class="mt-8 sm:text-lg text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nesciunt nostrum
              eum maiores laborum, ullam aut unde at nisi eligendi corrupti eius velit
              exercitationem accusamus fugiat officia qui cum deleniti.
            </p>
          </div>
          <div class="w-full sm:h-[30rem] h-[20rem] rounded-2xl bg-white">
            <img
              src="../assets/TodoNotes.jpg"
              alt=""
              class="rounded-2xl w-full sm:h-[500px] object-cover"
            />
          </div>
        </div>
      </div>

      <div class="flex justify-center mx-20 sm:my-72 my-40">
        <div class="grid sm:grid-cols-2 grid-cols-1 gap-20">
          <div class="w-full sm:h-[30rem] h-[20rem] rounded-2xl bg-white">
            <img
              src="../assets/Organization.jpg"
              alt=""
              class="rounded-2xl w-full sm:h-[500px] object-cover"
            />
          </div>
          <div class="text-white">
            <span class="sm:text-[4rem] text-[2.2rem] font-bold leading-[1]"
              >Build an organized routine</span
            >
            <p class="mt-10 sm:text-lg text-base">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero illum hic aliquid
              voluptatem exercitationem! Esse assumenda, asperiores ratione perferendis vel modi
              veniam necessitatibus sapiente, ea error deleniti omnis, obcaecati ipsum.
            </p>
            <p class="mt-8 sm:text-lg text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nesciunt nostrum
              eum maiores laborum, ullam aut unde at nisi eligendi corrupti eius velit
              exercitationem accusamus fugiat officia qui cum deleniti.
            </p>
          </div>
        </div>
      </div>
    </section>

    <div class="h-72 bg-white flex flex-col justify-between pt-16">
      <div class="flex justify-center gap-8">
        <div class="w-12 h-12 bg-black rounded-full flex justify-center items-center">
          <a href="https://www.linkedin.com/in/larissa-lima-53a976206/"
            ><img src="../assets/linkedin.svg" alt=""
          /></a>
        </div>
        <div class="w-12 h-12 bg-black rounded-full flex justify-center items-center">
          <a href="https://github.com/Larizz"><img src="../assets/github.svg" alt="" /></a>
        </div>
        <div class="w-12 h-12 bg-black rounded-full flex justify-center items-center">
          <a href=""><img src="../assets/insta.svg" alt="" /></a>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="flex flex-col text-gray-600">
          <div class="flex justify-center gap-8">
            <p>Info</p>
            <p>Support</p>
            <p>Marketing</p>
          </div>
          <div class="flex justify-center gap-8">
            <p>Terms Of Use</p>
            <p>Privace Policy</p>
          </div>
        </div>
      </div>
      <div class="flex justify-center text-gray-600">
        <footer>&copy;2023 Larizz</footer>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
