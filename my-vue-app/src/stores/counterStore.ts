import { defineStore } from 'pinia';


export const useCounterStore = defineStore('counter',{

    state: () => ({
        count: 0, //initial
    }),
    actions: {
        increment(){
            this.count++;
        },
        reset() {
            this.count = 0;
        },
    },
    
    
});