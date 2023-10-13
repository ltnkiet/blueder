import {initializeApp } from "firebase/app";
import {initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyARzCHi_wrFyMKtNuEwoB4iu64_PgjhjRc",
  authDomain: "blueder-7eb9e.firebaseapp.com",
  projectId: "blueder-7eb9e",
  storageBucket: "blueder-7eb9e.appspot.com",
  messagingSenderId: "1054621303263",
  appId: "1:1054621303263:web:e0ea8ca8812862f9dc046a"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export { app, auth };