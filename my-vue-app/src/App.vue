<template>
    <div id = "app">
      <h1>Global Counter</h1>
      <Counter />
      <GlobalCounterDisplay />
    </div>
</template>

<script setup>
import Counter from './components/Counter.vue';
import GlobalCounterDisplay from './components/GlobalCounterDisplay.vue';


</script>