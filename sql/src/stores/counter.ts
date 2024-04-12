import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('currency', () => {
  const currency = ref(0);
  // const doubleCount = computed(() => count.value * 2);
  function increment() {
    currency.value++;
  }

  return { currency, increment }
})
