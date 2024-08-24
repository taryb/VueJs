<template>
    <div>
      <h2>Global Counter: {{ counterStore.count }}</h2>
      <button @click="counterStore.increment">Increment</button>
      <button @click="counterStore.reset">Reset</button>
    </div>
  </template>
  
  <script setup>
  import { useCounterStore } from '../stores/counterStore';
  
  // Access the counter store
  const counterStore = useCounterStore();
  </script>
  

<style scoped>
button {
    background-color: #42b983;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

}
</style>