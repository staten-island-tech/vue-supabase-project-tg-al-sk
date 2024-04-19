import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('loggedin', () => {
  const loggedin = ref(false);
  // const doubleCount = computed(() => count.value * 2);
  return { loggedin}
})
