<template>
  <div>
    <h2>Sign Up</h2>
    <p><input type="text" placeholder="email" v-model="email" /></p>
    <p><input type="password" placeholder="password" v-model="password" /></p>
    <p><button @click="register">Sign Up</button></p>
    <p><button @click="registerWithGoogle">Continue with Google</button></p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();

const register = () => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      
      router.push("/cardgame");
    })
    .catch((error) => {
      
      alert(error.message);
    });
};
const registerWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider).then(() => {
    router.push("/cardgame");
  });
};
</script>
