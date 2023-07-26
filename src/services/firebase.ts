import { initializeApp } from 'firebase/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyC2n62JlnebHJv1FEanTa3ZE5Zwxi2rrac',
  authDomain: 'todo-list-b0307.firebaseapp.com',
  projectId: 'todo-list-b0307',
  storageBucket: 'todo-list-b0307.appspot.com',
  messagingSenderId: '1035304871032',
  appId: '1:1035304871032:web:1a95020a72ec86b3fcf98d',
  measurementId: 'G-B5FYZV5Y9E'
}

export const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
