<template>
  <base-card>
    <form @submit.prevent="submitData">
      <div>
        <label>Spanish Word</label>
        <input type="text" v-model="formData.enteredSpanish" />
      </div>
      <div>
        <label>English Word</label>
        <input type="text" v-model="formData.enteredEnglish" />
      </div>

      <base-button>Add Word</base-button>
    </form>
  </base-card>
</template>
<script>
import { getDatabase, ref, set, push } from "firebase/database";
import { getAuth } from "firebase/auth";

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
      const auth = getAuth();
      const english = this.formData.enteredEnglish;
      const spanish = this.formData.enteredSpanish;
      const db = getDatabase();
      const itemRef = ref(db, "words");
      const addedItem = push(itemRef);

      if (!auth.currentUser) {
        window.alert("You need to be logged in to add words");
      } else {
        set(addedItem, {
          ...{
            english: english,
            spanish: spanish,
          },
        });
      }

      this.formData.enteredSpanish = "";
      this.formData.enteredEnglish = "";
    },
  },
};
</script>
