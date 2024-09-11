<template>
    <li :class="{ completed: todo.completed }">
      <input type="checkbox" v-model="todo.completed" @change="emitToggle" />
      <span>{{ todo.text }}</span>
      <button @click="emitRemove">Delete</button>
    </li>
  </template>
  
  <script setup lang="ts">
  import { defineProps, defineEmits } from 'vue';
  import { ToDo } from '@/stores/useToDoStore';
  
  const props = defineProps<{ todo: ToDo }>();
  const emits = defineEmits(['toggle', 'remove']);
  
  function emitToggle() {
    emits('toggle', props.todo.id);
  }
  
  function emitRemove() {
    emits('remove', props.todo.id);
  }
  </script>
  
  <style scoped>
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }
  
  .completed span {
    text-decoration: line-through;
    color: #888;
  }
  
  button {
    background-color: red;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 5px;
  }
  
  button:hover {
    background-color: darkred;
  }
  </style>
  