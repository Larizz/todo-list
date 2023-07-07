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
        <div class="bg-white w-full mt-8 rounded-xl h-[510px] flex justify-center">
          <div class="bg-brand-main w-full m-12 rounded-xl">
            <h4 class="title">Why is it important to list your tasks?</h4>
            <p class="m-5 text-base text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto pariatur quod rem,
              repudiandae illum ipsam maxime, labore expedita quam exercitationem dignissimos
              explicabo quos! Tempore doloribus officiis commodi fuga maiores autem?
            </p>
            <p class="m-5 text-base text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi dolorem facilis non
              quia cumque dolorum facere possimus quos suscipit vitae esse aspernatur pariatur
              debitis odit minima, soluta vel autem aliquam.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div class="w-[430px] h-[530px] bg-black rounded-lg py-24 px-12 flex flex-col">
          <div>
            <h5 class="flex justify-center font-bold text-white">Acess your account</h5>
          </div>
          <div>
            <p class="text-white mt-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ut recusandae dolor
              eveniet commodi vero, dicta et veniam temporibus, aut quia. Enim deserunt inventore
              placeat iste asperiores soluta eaque veritatis.
            </p>
            <button
              @click="handleGoogleSignIn()"
              class="text-white w-full flex justify-center items-center border-2 border-brand-main gap-2 mt-10 p-2 hover:bg-slate-950"
            >
              <img src="../assets/google.svg" alt="" class="w-6" /> Login with Google
            </button>
          </div>
          <div>
            <p class="text-white w-full flex justify-end mt-10 hover:text-slate-300">
              <a
                href="https://accounts.google.com/signup/v2/createaccount?flowName=GlifWebSignIn&flowEntry=SignUp"
                >Don't have a google account?</a
              >
            </p>
          </div>

          <!-- <div>
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
              <a href="" class="text-white flex justify-end">Forgot Password?</a>
            </div>
            <div class="mt-8 flex">
              <button class="button" type="submit" @click="handleGoogleSignIn()">Login</button>
              <div class="flex items-center gap-1">
                <img src="../assets/google.svg" alt="" class="text-white w-4" />
                <button class="text-white mt-2">Login with Google</button>
              </div>
            </div>
          </div> -->
        </div>
        <div class="w-[430px] h-[310px] bg-white rounded-lg py-10 px-12 flex flex-col mt-7">
          <h5 class="font-bold">Contact Us</h5>
          <p class="flex items-center text-lg gap-2 mt-5">
            <img src="../assets/github.svg" alt="" />
            <a href="https://github.com/Larizz"> Larizz</a>
          </p>
          <p class="flex items-center text-lg gap-2 mt-2">
            <img src="../assets/linkedin.svg" alt="" />
            <a href="https://www.linkedin.com/in/larissa-lima-53a976206/"> Larissa Lima</a>
          </p>
          <p class="flex items-center text-lg gap-2 mt-2">
            <img src="../assets/insta.svg" alt="" /> lari.alvesl
          </p>
        </div>
      </div>
    </div>
    <div class="mt-8 bg-black w-full h-8 text-white flex justify-center items-center">
      <footer>&copy; 2023 todolist</footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../services/firebase'

interface firebaseUser {
  email: any
}

function handleGoogleSignIn() {
  const provider = new GoogleAuthProvider()

  signInWithPopup(auth, provider)
    .then((result) => {
      const user: firebaseUser = {
        email: result.user.email
      }
      console.log(result)
    })
    .catch((error) => {
      console.log(error)
    })
}
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
