<template>
  <div>
    <h2>Login</h2>
    <p>
      Don't have a account?
      <router-link to="/signup"><button>Sign Up</button></router-link>
    </p>
    <p><input type="text" placeholder="email" v-model="email" /></p>
    <p><input type="password" placeholder="password" v-model="password" /></p>
    <p><button @click="register">Log in</button></p>
    <p><button @click="registerWithGoogle">Continue with Google</button></p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  signInWithEmailAndPassword,
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
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      
      router.push("/cardgame");
    })
    .catch((error) => {
      
      alert(error.message);
    });
};
const registerWithGoogle = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider).then(() => {
    
    router.push("/cardgame");
  });
};
</script>
