<template>
  <div>
    <div class="title">
      <h2>Players</h2>
      <hr />
      <h2>HighScores</h2>
    </div>
    <ul v-for="point in points" :key="point.id">
      <ul>
        {{
          point.user
        }}
        {{
          point.score
        }}
      </ul>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      points: [],
    };
  },
  methods: {
    fetchScores() {
      const apiUrl =
        "https://memory-game-894da-default-rtdb.europe-west1.firebasedatabase.app/scores.json";
      axios.get(apiUrl).then((response) => {
        const scores = Object.values(response.data);
        scores.sort((a, b) => b.score - a.score);

        this.points = scores;
      });
    },
  },

  created() {
    this.fetchScores();
  },
};
</script>

<style>
.title {
  display: flex;
}
</style>
