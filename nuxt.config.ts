// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  // modules: ["nuxt-vuefire"],

  // vuefire: {
  //   config: {
  //     apiKey: "AIzaSyCDR3U4--dl3gm7Ki8e1XBDD_NHZFcViRA",
  //     authDomain: "shoplus-clone-f0fe5.firebaseapp.com",
  //     projectId: "shoplus-clone-f0fe5",
  //     storageBucket: "shoplus-clone-f0fe5.appspot.com",
  //     messagingSenderId: "5907270193",
  //     appId: "1:5907270193:web:9b78b86385fe1e23dda310",
  //     measurementId: "G-JRJ74EYMNZ",
  //   },
  // },

  runtimeConfig: {
    public: {
      firebase_api: process.env.FIREBASE_API,
    },
  },
});
