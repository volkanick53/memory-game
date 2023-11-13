<template>
  <div>
    <base-button @click="showRandomWord">Show Random Words</base-button>
    <base-card v-if="spanishWord">
      <h3>Spanish Word</h3>
      <p>{{ spanishWord }}</p>

      <div>
        <input type="text" v-model="inputValue" />
        <base-button mode="flat" @click="checkAnswer">Answer</base-button>
      </div>

      <p>Your Score:{{ point }}</p>
    </base-card>

    <the-modal v-if="isModalVisible" :englishWord="englishWord" :point="point">
    </the-modal>
  </div>
</template>

<script>
import axios from "axios";
import { getDatabase, ref, set, push } from "firebase/database";
import {  getAuth  } from 'firebase/auth';



export default {
  
  data() {
    return {
      words: [],
      spanishWord: null,
      englishWord: null,
      inputValue: "",
      enteredWord: "",
      point: 0,
      isModalVisible: false,
      auth: getAuth()
    };
  },
  methods: {
    fetchWords() {
      const apiUrl =
        "https://memory-game-894da-default-rtdb.europe-west1.firebasedatabase.app/words.json";

      axios.get(apiUrl).then((response) => {
        this.words = Object.values(response.data);
        console.log(response.data);
      });
    },
    showRandomWord() {
      if (this.words.length > 0) {
        const randomIndex = Math.floor(Math.random() * this.words.length);
        this.spanishWord = this.words[randomIndex].spanish;
        this.englishWord = this.words[randomIndex].english;
        this.words.splice(randomIndex, 1);
      } else if (this.words.length == 0) {
        window.alert("no more word left");
        window.location.reload();
      }
      this.inputValue = "";
    },

    checkAnswer() {
      if (!this.auth.currentUser){
        window.alert("You need to be logged in to play")
      } else{

        this.enteredWord = this.inputValue;
        if (this.enteredWord === this.englishWord) {
          this.point++;
  
          this.showRandomWord();
          if (this.words.length === 0) {
            this.postScoreToDatabase(this.point);
          }
        } else {
          this.postScoreToDatabase(this.point);
          this.isModalVisible = true;
        }
      }
    },
    async postScoreToDatabase() {
      const db = getDatabase();
      
      const itemRef = ref(db, "scores");
      const addedScore = await push(itemRef);
      
      set(addedScore, {
        ...{
          score: this.point,
          user: this.auth.currentUser.email
        },
      });
    },
  },
  created() {
    this.fetchWords(); 
  },
  provide() {
    return {
      word: this.spanishWord,
      englishWord: this.englishWord,
    };
  },
};
</script>

<style scoped></style>
