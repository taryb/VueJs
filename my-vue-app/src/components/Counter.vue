<template>
    <div>
        <h2>Counter: {{ count }}</h2>
        <button @click="increment">Increment</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    intialCount: {
        type: Number,
        default: 0,
    },
})

const count = ref(props.intialCount)

function increment() {
    count.value++;
}
</script>

<style scoped>
button {
    background-color: #42b983;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

}
</style>