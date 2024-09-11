<template>
  <div id="app">
    <h1>To-Do List</h1>
    <ToDoInput />
    <ToDoList />
  </div>
</template>

<script setup>
import ToDoInput from '@/components/ToDoInput.vue';
import ToDoList from '@/components/ToDoList.vue';

</script>

<style scoped>
#app {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  color: #42b983;
}

ul {
  list-style-type: none;
  padding: 0;
}
</style>
