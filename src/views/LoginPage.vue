<template>
  <div class="h-screen w-full">
    <div class="w-full h-6 sm:px-20 px-8 py-3 flex justify-between items-center">
      <div>
        <p class="font-light sm:text-[1.625rem] text-[1.4rem]">Todo List</p>
      </div>
      <div>
        <ul class="flex sm:gap-12 gap-7 sm:text-[1.375rem] text-[0.9rem] font-extralight">
          <li class="hover:font-light"><RouterLink to="/about">About Us</RouterLink></li>
          <li class="hover:font-light">Project</li>
          <li class="hover:font-light">Services</li>
        </ul>
      </div>
    </div>
    <div class="flex flex-col sm:flex-row justify-between sm:m-20 m-10 my-28 sm:gap-40 gap-20">
      <div class="flex flex-col flex-1">
        <div class="flex">
          <h1 class="font-black leading-[0.9] sm:text-[11.25rem] text-[6rem]">
            TODO <br />
            LIST
          </h1>
          <img
            src="../assets/calendar-schedule-svgrepo-com.svg"
            alt=""
            class="sm:ml-[-4rem] ml-[13.5rem] sm:mt-44 mt-[-5.5rem] sm:w-28 w-16"
          />
        </div>
        <div
          class="bg-white sm:w-full w-76 mt-8 rounded-xl sm:h-[31.875rem] h-[25rem] flex justify-center"
        >
          <div class="sm:m-12 m-6 rounded-xl pt-0 p-4">
            <h4 class="title">Why is it important to list your tasks?</h4>
            <div class="w-full sm:h-32 h-28 sm:mt-10 mt-5 bg-[#F6E8F0] rounded-lg">
              <div class="flex flex-col p-4 pb-10">
                <div>
                  <div class="flex justify-between items-center">
                    <div class="flex gap-2">
                      <div
                        class="bg-brand-main rounded-full sm:w-7 sm:h-7 w-5 h-5 flex justify-center"
                      >
                        <img src="../assets/bell.svg" alt="" class="sm:w-6 w-4 sm:h-6" />
                      </div>
                      <h5 class="text-slate-600 font-light sm:text-lg text-sm">Notification</h5>
                    </div>
                    <div>
                      <img src="../assets/x.svg" alt="" class="w-5 hover:w-5" />
                    </div>
                  </div>
                  <div class="border-b border-brand-main m-1 border-opacity-10" />
                </div>
                <div>
                  <p class="py-2 sm:px-4 px-2 sm:text-base text-xs text-slate-600">
                    How about doing the tasks you planned for this week? They are waiting for you!
                  </p>
                </div>
              </div>
            </div>
            <p class="m-5 sm:mt-8 mt-4 sm:text-base font-light text-xs text-black text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perferendis
              eveniet hic ducimus ea placeat corrupti voluptatum ad iste odio aliquid rerum id
              quisquam, obcaecati eos magnam est voluptas fuga.
            </p>
          </div>
        </div>
      </div>
      <div class="flex sm:flex-col flex-row">
        <div
          class="sm:w-[26.875rem] w-[21rem] sm:h-[33.125rem] h-[25rem] bg-black rounded-lg sm:py-24 py-12 sm:px-12 px-7 flex flex-col"
        >
          <div>
            <h5 class="flex justify-center font-bold text-white sm:text-[2rem] text-[1.3rem]">
              Acess your account
            </h5>
          </div>
          <div>
            <p class="text-white sm:text-sm text-xs sm:mt-10 mt-8 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ut recusandae dolor
              eveniet commodi vero, dicta et veniam temporibus, aut quia. Enim deserunt inventore
              placeat iste asperiores soluta eaque veritatis.
            </p>
            <button
              @click="signInGoogle()"
              class="text-white w-full flex justify-center items-center border-2 border-brand-main gap-2 sm:mt-10 mt-8 p-2 hover:bg-slate-950"
            >
              <img src="../assets/google.svg" alt="" class="w-6" /> Login with Google
            </button>
          </div>
          <div>
            <p class="text-white w-full flex justify-end sm:mt-10 mt-8 hover:text-slate-300">
              <a
                href="https://accounts.google.com/signup/v2/createaccount?flowName=GlifWebSignIn&flowEntry=SignUp"
                >Don't have a google account?</a
              >
            </p>
          </div>
        </div>
        <div
          class="sm:w-[26.875rem] w-[21rem] h-[19.375rem] bg-white rounded-lg py-10 px-12 flex flex-col mt-7"
        >
          <h5 class="font-bold">Contact Us</h5>
          <div class="border-b border-slate-300 mt-2" />
          <p class="flex items-center text-lg gap-2 mt-5">
            <img src="../assets/github.svg" alt="" />
            <a href="https://github.com/Larizz" class="hover:text-brand-main" target="_blank">
              Larizz</a
            >
          </p>
          <p class="flex items-center text-lg gap-2 mt-2">
            <img src="../assets/linkedin.svg" alt="" />
            <a
              href="https://www.linkedin.com/in/larissa-lima-53a976206/"
              class="hover:text-brand-main"
              target="_blank"
            >
              Larissa Lima</a
            >
          </p>
          <p class="flex items-center text-lg gap-2 mt-2">
            <img src="../assets/insta.svg" alt="" />
            <a href="" class="hover:text-brand-main"> lari.alvesl</a>
          </p>
        </div>
      </div>
    </div>
    <div class="mt-8 bg-black h-8 text-white flex flex-1 justify-center items-center">
      <footer>&copy; 2023 todolist</footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import { AuthGoogleProvider } from '@/store/authGoogle'

const { user, signInGoogle, signOut, loadStorageData } = AuthGoogleProvider()

onMounted(() => {
  loadStorageData()
})

// import { GoogleAuthProvider, getAuth } from 'firebase/auth'
// import { AuthGoogleProvider } from '@/store/widget'
// import { signInWithPopup } from 'firebase/auth'

// const provider = new GoogleAuthProvider()

// const store = AuthGoogleProvider()

// const auth = getAuth()

// // // esse app são as credenciais disponibilizadas pelo firebase que estão na pasta services

// function handleGoogleSignIn() {
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       const credential = GoogleAuthProvider.credentialFromResult(result)
//       const token = credential ? credential.accessToken : null

//       const user = result.user
//       console.log(result)
//     })
//     .catch((error) => {
//       const errorCode = error.code
//       const errorMessage = error.message
//       const email = error.customData.email
//       const credential = GoogleAuthProvider.credentialFromError(error)
//     })
// }

// interface firebaseUser {
//   email: any
// }

// function handleGoogleSignIn() {
//   const provider = new GoogleAuthProvider()

//   signInWithPopup(auth, provider)
//     .then((result) => {
//       const user: firebaseUser = {
//         email: result.user.email
//       }
//       console.log(result)
//     })
//     .catch((error) => {
//       console.log(error)
//     })
// }
</script>

<style scoped>
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
