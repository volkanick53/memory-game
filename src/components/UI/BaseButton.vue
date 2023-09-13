<template>
  <button :type="type" :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["type", "mode"],
};
</script>

<style scoped>
button {
  padding: 0.75rem 1.5rem;
  margin: 0.75rem 1rem;
  font-family: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
}

.flat {
  background-color: #0964a1;
  color: #ecf2f5;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
  color: #270041;
}

.top {
  padding: 0.75rem 1.5rem;
  margin: 0.75rem 1rem;
  font-family: inherit;
  background-color: #da3908;
  border: 1px solid #da3908;
  color: white;
  cursor: pointer;
}
.top:active {
  background-color: #0964a1;
}
</style>
