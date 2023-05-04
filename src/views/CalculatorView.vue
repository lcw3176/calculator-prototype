<template>
  <v-container>
    <p class="text-h6">한 끼 식단을 입력해 주세요</p>
    <p class="font-weight-bold">예: 닭가슴살 100</p>
  </v-container>

  <v-container class="text-center">
    <div v-for="(food, index) in calculatorStore.getFoods" :key="index">
      <v-row>
        <v-col cols="8">
          <v-text-field hide-details="auto" label="재료" v-model="food.name" />
        </v-col>

        <v-col cols="4">
          <v-text-field hide-details="auto" label="용량 (g)" v-model="food.gram" />
        </v-col>

      </v-row>


    </div>


    <v-btn density="compact" icon="mdi-plus" class="mt-5" @click="calculatorStore.addFood()"></v-btn>
  </v-container>
</template>

<script>
import { useCalculatorStore } from '@/store/calculator'

export default {
  name: 'HomeView',

  setup() {
    const calculatorStore = useCalculatorStore();

    calculatorStore.addFood();

    return {
      calculatorStore
    }
  },
}
</script>
