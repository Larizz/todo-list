import { defineStore } from 'pinia'
import { getAuth, GoogleAuthProvider, signInWithPopup, type User } from 'firebase/auth'
import { app } from '../services/firebase'
import Cookies from 'js-cookie'
import { ref, computed } from 'vue'
import router from '@/router'
import decode from 'jwt-decode'

const provider = new GoogleAuthProvider()
const auth = getAuth(app)

interface userProps {
  name: string
  email: string
  picture: string
}

export const AuthGoogleProvider = defineStore('AuthGoogleProvider', () => {
  async function signInGoogle() {
    try {
      const result = await signInWithPopup(auth, provider)
      const token = (await result.user.getIdTokenResult()).token

      Cookies.set('token', token, {
        expires: 2,
        sameSite: 'lax'
      })
      //o primeiro parâmetro passado é o nome do cookie e o segundo é o valor do cookie, expires é o tempo de expiração do token

      if (Cookies.get('token') && token) {
        router.push({ path: '/base' })
      } else {
        console.log('erro aff')
      }
      // verifica se o cookie com o nome token existe e se o valor não é indefinido
    } catch (error) {
      throw new Error('error')
    }
  }

  function getUser() {
    const token = Cookies.get('token')

    if (!token) {
      console.log('error :)')
    }

    const user: userProps = decode(token as string)

    return user
  }

  async function signOut() {
    const token = Cookies.get('token')
    try {
      Cookies.remove('token')
      if (!token) {
        router.push({ path: '/login' })
      }
    } catch (error) {
      throw new Error('error')
    }
  }

  // Se a autenticação for bem-sucedida, o token de acesso e o usuário autenticado são extraídos e armazenados no estado user e no armazenamento de sessão do navegador.

  const isSigned = computed(() => !!Cookies.get('token'))
  // A store possui um getter chamado isSigned, que retorna true se o estado user não for null, indicando que o usuário está autenticado.
  return {
    getUser,
    signInGoogle,
    signOut,
    isSigned
  }
})
