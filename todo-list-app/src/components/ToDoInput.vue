<template>
    <div>
      <input v-model="newTask" placeholder="Add a new task" @keyup.enter="addTask" />
      <button @click="addTask">Add</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useToDoStore } from '../stores/useToDoStore';
  
  const newTask = ref('');
  const todoStore = useToDoStore();
  
  function addTask() {
    if (newTask.value.trim()) {
      todoStore.addToDo(newTask.value);
      newTask.value = '';
    }
  }
  </script>
  
  <style scoped>
  input {
    padding: 8px;
    margin-right: 5px;
  }
  button {
    padding: 8px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  