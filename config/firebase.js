import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyARzCHi_wrFyMKtNuEwoB4iu64_PgjhjRc',
  authDomain: 'blueder-7eb9e.firebaseapp.com',
  projectId: 'blueder-7eb9e',
  storageBucket: 'blueder-7eb9e.appspot.com',
  messagingSenderId: '1054621303263',
  appId: '1:1054621303263:web:e0ea8ca8812862f9dc046a'
}

const FIREBASE_APP = initializeApp(firebaseConfig)
const FIREBASE_AUTH = getAuth(FIREBASE_APP)
const FIREBASE_DB = getFirestore(FIREBASE_APP)

export { FIREBASE_APP, FIREBASE_AUTH, FIREBASE_DB }

