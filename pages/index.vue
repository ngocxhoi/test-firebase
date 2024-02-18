<template>
  <div>
    <div style="display: flex">
      <input type="text" placeholder="Email..." v-model="email" />
      <input type="password" placeholder="Password..." v-model="pass" />
    </div>
    <button @click="signin()">Click me to sign in</button>
  </div>
  <div>
    <button @click="signout()">Click me to sign out</button>
  </div>
  <h1 v-if="!credentials">There are no user sign in</h1>
  <pre v-else style="color: red">{{ credentials }}</pre>
</template>

<script setup lang="ts">
// import { getAuth } from "firebase/auth";

let email = ref("");
let pass = ref("");

let credentials = ref();

const signin = async () => {
  credentials.value = await signInUser(email.value, pass.value);
  console.log("Sign In User: ", credentials.value);
};

const signout = async () => {
  credentials.value = await signOutUser();
  console.log("Sign Out User: ", credentials);
};
</script>

<style></style>
