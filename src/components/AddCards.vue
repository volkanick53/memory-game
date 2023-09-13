<template>
  <base-card>
    <form @submit="submitData">
      <div>
        <label>Spanish Word</label>
        <input type="text" v-model="enteredSpanish" />
      </div>
      <div>
        <label>English Word</label>
        <input type="text" v-model="enteredEnglish" />
      </div>

      <base-button>Add Word</base-button>
    </form>
  </base-card>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      formData: {
        enteredSpanish: "",
        enteredEnglish: "",
      },
    };
  },

  methods: {
    submitData() {
      axios.post(
        "https://memory-game-894da-default-rtdb.europe-west1.firebasedatabase.app/words.json",
        {
          spanish: this.enteredSpanish,
          english: this.enteredEnglish,
        }
      );
      this.formData.enteredSpanish = "";
      this.formData.enteredEnglish = "";
    },
  },
};
</script>
