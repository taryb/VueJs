<template>
    <div id = "app">
      <h1>Track Counters</h1>
      <Counter :intialCount = "5" @update="handleUpdate"/>
      <Counter :intialCount = "10" @update="handleUpdate"/>
      <Counter :intialCount = "15" @update="handleUpdate"/>
      <p> Last update count: {{ lastCount }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Counter from './components/Counter.vue';

const lastCount = ref(0);

function handleUpdate(newCount) {
  lastCount.value = newCount;
}

</script>