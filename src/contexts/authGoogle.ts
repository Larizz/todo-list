import { createPinia, defineStore } from 'pinia'
import { getAuth, GoogleAuthProvider, signInWithPopup, type User } from 'firebase/auth'
import { app } from '../services/firebase'

const provider = new GoogleAuthProvider()

export const AuthGoogleProvider = defineStore('AuthGoogleProvider', {
  //state
  state: () => ({
    user: null as User | null
  }),
  //actions
  actions: {
    async loadStorageData() {
      const storageUser = sessionStorage.getItem('@AuthFirebase:user')
      const storageToken = sessionStorage.getItem('@AuthFirebase:token')
      if (storageToken && storageUser) {
        this.user = JSON.parse(storageUser)
      }
    },
    async signInGoogle() {
      const auth = getAuth(app)
      try {
        const result = await signInWithPopup(auth, provider)
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential ? credential.accessToken : null
        const user = result.user
        this.user = user
        // o sessionStorage é uma API do JS que fornece um mecanismo de armazenamento no navegador para armazenar dados de forma temporária durante a sessão do user(são excluidos quando a janela do navegador é fechada)
        //essa api oferece métodos como setItem, getItem, removeItem e clear, p manipular dados armazenados
        sessionStorage.setItem('@AuthFirebase:token', token ?? '')
        // nesse caso o @AuthFirebase:token é uma chave e  token é o tokn de autenticação
        // 'token ?? ''' irá verificar se 'token' é undefined ou null. Se for, ele será substituído por uma string vazia
        // pode ser utilizado quando o valor de algo puder ser nulo ou indefinido
        sessionStorage.setItem('@AuthFirebase:user', JSON.stringify(user))
        // nesse caso como o user é um objeto é necessário converter o arquivo para JSON
      } catch (error) {
        const errorCode = (error as any).code
        const errorMessage = (error as any).message
        const email = (error as any).email
        const credential = GoogleAuthProvider.credentialFromError(error as any)
      }
    },
    async signOut() {
      sessionStorage.clear()
      this.user = null
    }
  },
  //getters
  getters: {
    isSigned: (state) => !!state.user
  }
})

export const pinia = createPinia()

export function setupStore() {
  pinia.use(() => AuthGoogleProvider)
}

export function provideStore() {
  return pinia
}
