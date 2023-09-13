<template>
  <div class="modal-overlay">
    <div class="modal-content">
      <h4 class="game-over">Game Over</h4>
      <p>
        The answer is: <span>{{ englishWord }} </span>
      </p>
      <p>Your Score is {{ point }}</p>
      <slot></slot>

      <button @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["englishWord", "point"],
  methods: {
    closeModal() {
      window.location.reload(); // Emit an event to indicate closing the modal
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}
span {
  font-weight: bold;
  color: green;
}
.game-over {
  font-size: 1.25 rem;
  color: red;
}
</style>
