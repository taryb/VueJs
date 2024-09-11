<template>
    <ul>
      <ToDoItem
        v-for="todo in todoStore.todos"
        :key="todo.id"
        :todo="todo"
        @toggle="todoStore.toggleToDo"
        @remove="todoStore.removeToDo"
      />
    </ul>
  </template>
  
  <script setup lang="ts">
import { useToDoStore } from '@/stores/useToDoStore'; // Using '@' alias
import ToDoItem from '@/components/ToDoItem.vue'; 

  
  const todoStore = useToDoStore(); // Accessing the to-do store
  </script>
  
  <style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }
  </style>
  