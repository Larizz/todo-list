import { defineStore } from 'pinia'
import { getAuth, GoogleAuthProvider, signInWithPopup, type User } from 'firebase/auth'
import { app } from '../services/firebase'
import Cookies from 'js-cookie'
import { ref, computed } from 'vue'
import router from '@/router'

const provider = new GoogleAuthProvider()
const auth = getAuth(app)

export const AuthGoogleProvider = defineStore('AuthGoogleProvider', () => {
  const user = ref<User | null>(null)
  // se o user for autenticado recebe User, se não, recebe null

  // loadStorageData: carrega os dados do armazenamento de sessão do navegador (sessionStorage) e atualiza o estado user com os dados armazenados, se existirem.
  function loadStorageData() {
    const storageUser = sessionStorage.getItem('@AuthFirebase:user')
    const storageToken = sessionStorage.getItem('@AuthFirebase:token')
    if (storageToken && storageUser) {
      user.value = JSON.parse(storageUser)
    }
  }

  async function signInGoogle() {
    try {
      const result = await signInWithPopup(auth, provider)
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential?.accessToken ?? ''
      const loggedInUser = result.user

      Cookies.set('token', token, {
        expires: 7
      })
      //o primeiro parâmetro passado é o nome do cookie e o segundo é o valor do cookie, expires é o tempo de expiração do token

      if (Cookies.get('token') && token) {
        router.push({ path: '/home' })
      } else {
        console.log('erro aff')
      }
      // verifica se o cookie com o nome token existe e se o valor não é indefinido

      console.log(credential?.accessToken)
    } catch (error) {
      const errorCode = (error as any).code
      const errorMessage = (error as any).message
      const email = (error as any).email
      const credential = GoogleAuthProvider.credentialFromError(error as any)
    }
  }

  async function signOut() {
    const auth = getAuth(app)
    try {
      await auth.signOut()
    } catch (error) {
      console.error(error)
    }
  }

  // Se a autenticação for bem-sucedida, o token de acesso e o usuário autenticado são extraídos e armazenados no estado user e no armazenamento de sessão do navegador.

  const isSigned = computed(() => !!user.value)
  // A store possui um getter chamado isSigned, que retorna true se o estado user não for null, indicando que o usuário está autenticado.
  return {
    user,
    loadStorageData,
    signInGoogle,
    signOut,
    isSigned
  }
})
