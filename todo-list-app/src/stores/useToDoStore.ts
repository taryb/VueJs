import { defineStore } from 'pinia';

export interface ToDo {
  id: number;
  text: string;
  completed: boolean;
}

export const useToDoStore = defineStore('todo', {
  state: () => ({
    todos: [] as ToDo[],  // This is where all the to-do items will be stored
    nextId: 1,            // This keeps track of the next ID to assign to a new to-do item
  }),

  actions: {
    addToDo(text: string) {
      this.todos.push({ id: this.nextId++, text, completed: false });
    },
    toggleToDo(id: number) {
      const todo = this.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeToDo(id: number) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
});
