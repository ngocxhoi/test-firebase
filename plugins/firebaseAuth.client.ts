import { initializeApp } from "firebase/app";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const firebaseConfig = {
    apiKey: config.public.firebase_api,
    authDomain: "shoplus-clone-f0fe5.firebaseapp.com",
    projectId: "shoplus-clone-f0fe5",
    storageBucket: "shoplus-clone-f0fe5.appspot.com",
    messagingSenderId: "5907270193",
    appId: "1:5907270193:web:9b78b86385fe1e23dda310",
    measurementId: "G-JRJ74EYMNZ",
  };

  const app = initializeApp(firebaseConfig);

  // console.log(app);
});
