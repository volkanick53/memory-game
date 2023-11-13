import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import SpanishCards from "./components/SpanishCards.vue";
import AddCards from "./components/AddCards.vue";
import BaseCard from "./components/UI/BaseCard.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import TheModal from "./components/TheModal.vue";
import HighScore from "./components/HighScore.vue";
import CheatSheets from "./components/CheatSheets.vue";
import TheNavigation from "./components/TheNavigation.vue";
import CardGame from "./components/CardGame.vue";
import SignUp from "./components/SignUp.vue";
import TheLogin from "./components/TheLogin.vue";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmymL9C6VlKsOn7ntlROXHlkGYD6YeuzA",
  authDomain: "memory-game-894da.firebaseapp.com",
  databaseURL:
    "https://memory-game-894da-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "memory-game-894da",
  storageBucket: "memory-game-894da.appspot.com",
  messagingSenderId: "648602171405",
  appId: "1:648602171405:web:93631cd9d239b668d43d44",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const database = getDatabase(firebaseApp);


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/cheatsheets", component: CheatSheets },
    { path: "/cardgame", component: CardGame},
    {path: "/login", component: TheLogin},
    {path: "/signup", component: SignUp},
    
    
  ],
});


const app = createApp(App);
app.use(router);

app.component("spanish-cards", SpanishCards);
app.component("add-cards", AddCards);
app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("the-modal", TheModal);
app.component("high-score", HighScore);
app.component("the-navigation", TheNavigation);
app.component("card-game", CardGame);

app.mount("#app");
