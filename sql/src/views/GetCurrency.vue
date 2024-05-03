<template>
  
  <h1>Get currency by solving math problems</h1>
  
  <Fieldset legend="Directions" :toggleable="true" :collapsed="collapsed">
    <p class="m-0">
      You will be shown questions consisting of addition, subtraction, multiplication, and division.
      Solve them correctly to gain Golden Seagulls! You may increase the difficulty of the questions to gain more Golden Seagulls.
    </p>
    <br>
    <p>For division, please round to the nearest whole number.</p>
    <div class="card flex justify-content-center">
    </div>
    <Button label="Got it!" @click="collapsed = true" v-if="collapsed === false"></Button>
  </Fieldset>
  <div style="display: flex; align-items: center; flex-direction: column;">
  <Button label="Adjust Difficulty" @click="dialogVisible = true" />
        <Dialog v-model:visible="dialogVisible" modal header="Adjust Difficulty" :style="{ width: '50rem' }">
          <div class="flex-auto">
            <InputNumber v-model="value2" inputId="minmax-buttons" mode="decimal" showButtons :min="1" :max="4" @click="randomize()" />
        </div>
        </Dialog>
  <div class="flex px-5 py-5 gap-4" style="width: 100vw; align-items: center; display: block; display: flex;">
    <span style="font-size: 1.5rem;">{{ num1 }}</span>
    <span style="font-size: 1.5rem;" class="pi pi-plus" v-if="op==='+'"></span>
    <span style="font-size: 1.5rem;" class="pi pi-minus" v-if="op==='-'"></span>
    <span style="font-size: 1.5rem;" class="pi pi-times" v-if="op==='*'"></span>
    <span style="font-size: 1.5rem;" v-if="op==='/'">➗</span>
    <span style="font-size: 1.5rem;">{{ num2 }}</span>
    
    <span style="font-size: 1.5rem;" class="pi pi-equals"></span>
    <InputNumber v-model="value" showButtons buttonLayout="vertical" style="width: 3rem">
    <template #incrementbuttonicon>
        <span class="pi pi-plus" />
    </template>
    <template #decrementbuttonicon>
        <span class="pi pi-minus" />
    </template>
</InputNumber>
  </div>
  <Message :sticky="false" :life="3000" v-if="yn != ''" :severity="severity">{{ yn }}</Message>
  <Button @click="checkAns()" label="Enter"/>
  <Button @click="randomize()" label="Next Question"/>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Fieldset from 'primevue/fieldset';
import InputNumber from 'primevue/inputnumber';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import Message from 'primevue/message';

// @ts-ignore
import increaseCurrency from '/db/currency/increaseCurrency';
// @ts-ignore
import getCurrency from '/db/currency/getCurrency';

const collapsed = ref(false);
const value2 = ref(1)
const dialogVisible = ref(false);
const value = ref()
const yn = ref('')
const severity = ref('');

const num1 = ref(0)
const num2 = ref(0)
const op = ref('')
const opList = ['+', '-', '*', '/']

//initial random values 
num1.value = Math.floor(Math.random() * (value2.value *100))
num2.value = Math.floor(Math.random() * (value2.value *100))
op.value = opList[Math.floor(Math.random()*opList.length)];

function randomize() {
  num1.value = Math.floor(Math.random() * (value2.value *100))
  num2.value = Math.floor(Math.random() * (value2.value *100))
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
    severity.value = 'success';
    increaseCurrency({golden_seagulls: 10, diamond_seagulls: 0});
    getCurrency();
  } else {
    yn.value = 'you are incorrect.'
    severity.value = 'error'
    getCurrency();
  }
  value.value = null;
};

</script>

<style scoped>
.p-message{
  width: fit-content;
  margin-right: 0px;
}
</style>
