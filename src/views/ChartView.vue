<template>
  <v-app-bar dark :elevation="0">

    <v-btn icon :to="'/calculate'">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>

    <v-toolbar-title class="font-weight-black">밀거래</v-toolbar-title>
    <v-spacer></v-spacer>

  </v-app-bar>

  <v-container>

    <v-card>
      <v-card-title>1회 섭취량 (g, mL)</v-card-title>
      <v-divider></v-divider>
      <v-card-text style="height: 300px;" class="scroll">
        <v-list v-for="item in selected" active-color="primary" density="compact">
          <v-list-item>


            <v-text-field :label="item.title"
            v-model="item.quantity"
            @update:model-value="dietStore.refreshChart"
            variant="underlined"
            ></v-text-field>

          </v-list-item>


        </v-list>
      </v-card-text>
    </v-card>
  </v-container>

  <v-container>
    <v-card>
      <v-card-title>
        총 칼로리
      </v-card-title>

      <v-card-subtitle>
        {{getTotalSelectedKcal + " kcal"}}
      </v-card-subtitle>

      <v-card-item>
        <Pie :data="kcalChart" :options="options" />
      </v-card-item>

    </v-card>
  </v-container>


  <v-container>
    <v-card>
      <v-card-title>
        영앙소 구성
      </v-card-title>

      <v-card-item>
        <Pie :data="nutrientChart" :options="options" />
      </v-card-item>

    </v-card>
  </v-container>
</template>


<script>
import { storeToRefs } from 'pinia'
import { useDietStore } from '@/store/diet';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)


export default {
  name: 'ChartView',

  components: {
    Pie
  },

  data() {
    const options = {
      responsive: true,
      maintainAspectRatio: false
    };

    return {
      options
    }
  },

  setup() {
    const dietStore = useDietStore();

    const {
      kcalChart,
      selected,
      getTotalSelectedKcal,
      nutrientChart
    } = storeToRefs(dietStore)

    dietStore.refreshChart();

    return {
      kcalChart,
      dietStore,
      selected,
      nutrientChart,
      getTotalSelectedKcal
    }
  },

}
</script>

<style scoped>
.scroll {
  overflow-y: scroll
}
</style>