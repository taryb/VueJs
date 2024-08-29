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
  import { useToDoStore } from '../stores/useToDoStore'; // Importing the to-do store
  import ToDoItem from './ToDoItem.vue'; // Importing the ToDoItem component
  
  const todoStore = useToDoStore(); // Accessing the to-do store
  </script>
  
  <style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }
  </style>
  