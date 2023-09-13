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
import TheNavigation from "./components/TheNavigation.vue"
import CardGame from "./components/CardGame.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/cheatsheets', component: CheatSheets },
{path:'/cardgame', component:CardGame}],
});

const app = createApp(App);
app.use(router);

app.component("spanish-cards", SpanishCards);
app.component("add-cards", AddCards);
app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("the-modal", TheModal);
app.component("high-score", HighScore);
app.component("the-navigation", TheNavigation)
app.component("card-game", CardGame)



app.mount("#app");
