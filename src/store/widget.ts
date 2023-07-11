// import { defineStore } from 'pinia'
// import { useStorage } from '@vueuse/core'
// import { getAuth, GoogleAuthProvider, signInWithPopup, type User } from 'firebase/auth'
// import { app } from '../services/firebase'
// import { ref, computed } from 'vue'

// export const AuthGoogleProvider = defineStore('AuthGoogleProvider', () => {
//   const user = ref<User | null>(null)

//   const storageUser = useStorage('@AuthFirebase:user', '')
//   const storageToken = useStorage('@AuthFirebase:token', '')
//   if (storageToken && storageUser) {
//     user.value = JSON.parse(storageUser as any)
//   }
// })
