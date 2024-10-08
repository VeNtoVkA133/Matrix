<template>
  <TitleMatrix title="Определитель матрицы 3х3" />
  <main class="determinant">
    <figure class="determinant-matrix">
      <div class="determinant-matrix-column">
        <input class="determinant-matrix-column-inp" v-model="op1" type="number" @input="onChangeMatrix"
          placeholder="k" />
        <input class="determinant-matrix-column-inp" v-model="op2" type="number" @input="onChangeMatrix"
          placeholder="k" />
        <input class="determinant-matrix-column-inp" v-model="op3" type="number" @input="onChangeMatrix"
          placeholder="k" />
      </div>
      <div class="determinant-matrix-column">
        <input class="determinant-matrix-column-inp" v-model="op4" type="number" @input="onChangeMatrix"
          placeholder="k" />
        <input class="determinant-matrix-column-inp" v-model="op5" type="number" @input="onChangeMatrix"
          placeholder="k" />
        <input class="determinant-matrix-column-inp" v-model="op6" type="number" @input="onChangeMatrix"
          placeholder="k" />
      </div>      <div class="determinant-matrix-column">
        <input class="determinant-matrix-column-inp" v-model="op7" type="number" @input="onChangeMatrix"
          placeholder="k" />
        <input class="determinant-matrix-column-inp" v-model="op8" type="number" @input="onChangeMatrix"
          placeholder="k" />
        <input class="determinant-matrix-column-inp" v-model="op9" type="number" @input="onChangeMatrix"
          placeholder="k" />
      </div>
    </figure>
    <div class="determinant-result">
      = {{ determination }}
    </div>
  </main>
    <Footer />
</template>

<script setup>

import { ref } from 'vue'; // Переменные состояния
import TitleMatrix from '../components/TitleMatrix.vue'
import { resultDeterminationMatrix } from '../components/HomeView.vue'
import Footer from "../components/Footer.vue" // Компонент, используемый в вёрстке
name: "ThreeDimension";

// Перменные взаимосвязанные с input, при помощи v-model
const op1 = ref(0);
const op2 = ref(0);
const op3 = ref(0);
const op4 = ref(0);
const op5 = ref(0);
const op6 = ref(0);
const op7 = ref(0);
const op8 = ref(0);
const op9 = ref(0);
const determination = ref(0);

/**
 * Функция определения нового массива (функция - реакция на состояние)
 * Присваивание результата определеителя матрицы 2 на 2 переменной состояния
 */
const onChangeMatrix = () => {
  // console.log(op1.value, op2.value, op3.value, op4.value);
  const matrixArray = [
    [op1.value, op2.value, op3.value],
    [op4.value, op5.value, op6.value],
    [op7.value, op8.value, op9.value]
   ];
  // console.log(matrixArray);
  determination.value = resultDeterminationMatrix(matrixArray);
}



const resultDeterminationMatrix = (matrixMass) => {
    let operator = [];
    let c = [
        [],
        []
    ];
    let op;
    let a = matrixMass;
    for (let i = 1; i < a.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if (j == k) {
                op = a[j][i-1];
            } else if (j < k) {
                c[j][i-1] = a[j][i];
            } else if (j > k) {
                c[j-1][i-1] = a[j][i];
            }
            operator.push(op * resultMinor2to2(c));
        }
    }
    let opp = operator[0]-operator[1]+operator[2];
    return opp;
}

</script>

<style></style>