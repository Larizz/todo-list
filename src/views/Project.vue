<template>
  <div class="h-screen w-full">
    <div class="w-full h-6 sm:px-20 px-8 py-3 flex justify-between items-center text-white">
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
    <div class="grid grid-cols-2 sm:flex-row justify-between sm:m-20 m-10 my-28 sm:gap-30">
      <div class="flex flex-col flex-1">
        <div>
          <h1 class="font-black leading-[0.9] sm:text-[11.25rem] text-[6rem] text-white">
            TODO <br />
            LIST
          </h1>
        </div>
        <div class="mt-16">
          <button
            class="h-12 w-[12rem] rounded-3xl bg-slate-50 hover:bg-slate-200 text-gray-800 hover:text-gray-950"
          >
            <span class="font-light"><RouterLink to="/login"> Take a Test</RouterLink></span>
          </button>
        </div>
      </div>
      <div class="w-[35rem] h-[30rem] rounded-3xl">
        <img
          src="../assets/ImageTodo5-removebg.png"
          alt=""
          class="rounded-2xl w-full h-[35rem] object-cover"
        />
      </div>
    </div>
    <section>
      <div class="w-full flex justify-center my-72">
        <div class="w-[60rem] text-center">
          <span class="text-[3.2rem] text-slate-50 font-bold">
            A <strong class="text-[4rem] text-black">Todo List</strong> is a project that seeks to
            help you organize your weekly goals to increase productivity
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
    <section>
      <div class="flex justify-center mx-20">
        <div class="grid grid-cols-2 gap-20">
          <div class="text-white">
            <span class="text-[4rem] font-bold leading-[1]">Log your tasks weekly</span>
            <p class="mt-10 text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero illum hic aliquid
              voluptatem exercitationem! Esse assumenda, asperiores ratione perferendis vel modi
              veniam necessitatibus sapiente, ea error deleniti omnis, obcaecati ipsum.
            </p>
            <p class="mt-8 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nesciunt nostrum
              eum maiores laborum, ullam aut unde at nisi eligendi corrupti eius velit
              exercitationem accusamus fugiat officia qui cum deleniti.
            </p>
          </div>
          <div class="w-full h-[30rem] rounded-2xl bg-white">
            <img
              src="../assets/TodoNotes.jpg"
              alt=""
              class="rounded-2xl w-full h-[30rem] object-cover"
            />
          </div>
        </div>
      </div>

      <div class="flex ustify-center mx-20 my-72">
        <div class="grid grid-cols-2 gap-20">
          <div class="w-full h-[30rem] rounded-2xl bg-white">
            <img
              src="../assets/Organization.jpg"
              alt=""
              class="rounded-2xl w-full h-[30rem] object-cover"
            />
          </div>
          <div class="text-white">
            <span class="text-[4rem] font-bold leading-[1]">Build an organized routine</span>
            <p class="mt-10 text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero illum hic aliquid
              voluptatem exercitationem! Esse assumenda, asperiores ratione perferendis vel modi
              veniam necessitatibus sapiente, ea error deleniti omnis, obcaecati ipsum.
            </p>
            <p class="mt-8 text-lg">
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
