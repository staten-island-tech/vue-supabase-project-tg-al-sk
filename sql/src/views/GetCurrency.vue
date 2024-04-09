<template>
  <h1>Get currency by solving math problems</h1>
  <Fieldset legend="Directions" :toggleable="true">
    <p class="m-0">
      You will be shown questions consisting of addition, subtraction, multiplication, and division.
      Solve them correctly to gain Golden Seagulls! You may increase the difficulty of the questions to gain more Golden Seagulls.
    </p>
    <br>
    <p>For division, please round to the nearest whole number.</p>
  </Fieldset>
  <div>
    <p>{{ num1 }}</p>
    <p>{{ op }}</p>
    <p>{{ num2 }}</p>
    <p>Enter Answer</p>
    <InputNumber v-model="value" inputId="integeronly"/>
    <button @click="checkAns()">Enter</button>
  </div>
  <p>{{ yn }}</p>
  <button @click="randomize()">Next Question</button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Fieldset from 'primevue/fieldset';
import InputNumber from 'primevue/inputnumber';

const value = ref()
const yn = ref('')

const num1 = ref(0)
const num2 = ref(0)
const op = ref('')
const opList = ['+', '-', '*', '/']

//initial random values 
num1.value = Math.floor(Math.random() * 100)
num2.value = Math.floor(Math.random() * 100)
op.value = opList[Math.floor(Math.random()*opList.length)];

function randomize() {
  num1.value = Math.floor(Math.random() * 100)
  num2.value = Math.floor(Math.random() * 100)
  op.value = opList[Math.floor(Math.random()*opList.length)];
  yn.value = ''
}

function checkAns() {
  let ans = 0
  if (op.value == '+') {
    ans = Number(num1.value + num2.value)
  } else if (op.value == '-') {
    ans = Number(num1.value - num2.value)
  } else if (op.value == '*') {
    ans = Number(num1.value * num2.value) 
  } else if (op.value == '/') {
    ans = Number(Math.round(num1.value / num2.value))
  }

  if (ans == value.value) {
    yn.value = 'you are correct!'
  } else {
    yn.value = 'you are incorrect.'
  }
};

// setTimeout()

</script>

<style lang="scss" scoped>

</style>
