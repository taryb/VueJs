<template>
    <div id = "app">
      <h1>Multiple Counters</h1>
      <Counter :intialCount = "5"/>
      <Counter :intialCount = "10"/>
      <Counter :intialCount = "15"/>
    </div>
</template>

<script setup>
import Counter from './components/Counter.vue'
</script>