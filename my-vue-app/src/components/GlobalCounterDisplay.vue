<template>
    <div>
      <h2>Global Counter Display: {{ counterStore.count }}</h2>
    </div>
  </template>
  
  <script setup>
  import { useCounterStore } from '../stores/counterStore';
  
  // Access the same counter store
  const counterStore = useCounterStore();
  </script>
  