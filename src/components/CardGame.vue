<template>
  <div class="addCard">
    <base-button mode="top" @click="ToggleForm">
      {{ detailsAreVisible ? "Hide" : "Show" }} Add Word
    </base-button>
    <ul v-if="detailsAreVisible">
      <add-cards></add-cards>
    </ul>
  </div>
  <div class="highscore">
    <high-score></high-score>
  </div>
  <spanish-cards></spanish-cards>
</template>

<script>
import AddCards from "./AddCards.vue";
import HighScore from "./HighScore.vue";
import SpanishCards from "./SpanishCards.vue";
export default {
  components: {
    AddCards,
    HighScore,
    SpanishCards
  },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    ToggleForm() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
};
</script>

<style>
.addCard {
  padding: 50px;
}
.active {
  background-color: #1edb1e;
}
.container {
  position: relative;
}
.highscore {
  position: absolute;
  top: 0;
  right: 5%;
}
</style>
