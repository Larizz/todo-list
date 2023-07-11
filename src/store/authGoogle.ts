// import { createPinia, defineStore } from 'pinia'
// import { getAuth, GoogleAuthProvider, signInWithPopup, type User } from 'firebase/auth'
// import { app } from '../services/firebase'
// import { ref, computed } from 'vue'

// const provider = new GoogleAuthProvider()

// export const AuthGoogleProvider = defineStore('AuthGoogleProvider', () => {
//   const user = ref<User | null>(null)
//   // se o user for autenticado recebe User, se não, recebe null

//   // loadStorageData: carrega os dados do armazenamento de sessão do navegador (sessionStorage) e atualiza o estado user com os dados armazenados, se existirem.
//   function loadStorageData() {
//     const storageUser = sessionStorage.getItem('@AuthFirebase:user')
//     const storageToken = sessionStorage.getItem('@AuthFirebase:token')
//     if (storageToken && storageUser) {
//       user.value = JSON.parse(storageUser)
//     }
//   }

//   async function signInGoogle() {
//     const auth = getAuth(app)
//     try {
//       const result = await signInWithPopup(auth, provider)
//       const credential = GoogleAuthProvider.credentialFromResult(result)
//       const token = credential ? credential.accessToken : null
//       const user = result.user
//     } catch (error) {
//       const errorCode = (error as any).code
//       const errorMessage = (error as any).message
//       const email = (error as any).email
//       const credential = GoogleAuthProvider.credentialFromError(error as any)
//     }
//   }

//   async function signOut() {
//     const auth = getAuth(app)
//     try {
//       await auth.signOut()
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   // Se a autenticação for bem-sucedida, o token de acesso e o usuário autenticado são extraídos e armazenados no estado user e no armazenamento de sessão do navegador.

//   const isSigned = computed(() => !!user.value)
//   // A store possui um getter chamado isSigned, que retorna true se o estado user não for null, indicando que o usuário está autenticado.
//   return {
//     user,
//     loadStorageData,
//     signInGoogle,
//     signOut,
//     isSigned
//   }
// })

// export const pinia = createPinia()

// export function setupStore() {
//   pinia.use(() => AuthGoogleProvider)
// }

// export function provideStore() {
//   return pinia
// }
