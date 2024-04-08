import { initializeApp } from "firebase/app";

const firebaseApp = initializeApp({
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "canteen-app-0270.firebaseapp.com",
  projectId: "canteen-app-0270",
  storageBucket: "canteen-app-0270.appspot.com",
  messagingSenderId: "609856473319",
  appId: "1:609856473319:web:b8ba149c0989b187baba42",
  measurementId: "G-4SSKQTF394",
});

// https://canteen-app-0270.firebaseapp.com/__/auth/handler

export default firebaseApp;
