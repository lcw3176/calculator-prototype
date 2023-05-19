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
      <v-card-title>재료 목록</v-card-title>
      <v-divider></v-divider>
      <v-card-text style="height: 300px;" class="scroll">
        <v-list v-for="item in dietStore.selected" lines="two" active-color="primary">
          <v-list-item>

            <v-list-item-title>
              {{ item.title }}

            </v-list-item-title>


            <!-- <v-text-field label="용량을 입력해 주세요"></v-text-field> -->
            <template v-slot:prepend>

              <v-btn icon="mdi-plus" class="mr-5" size="small" @click="dietStore.addCount(item)"></v-btn>
              <v-badge color="success" :content=item.quantity inline class="mr-5"></v-badge>

            </template>

            <template v-slot:append>

              <v-btn icon="mdi-minus" size="small" @click="dietStore.minusCount(item)"></v-btn>
            </template>


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
        {{dietStore.getTotalSelectedKcal + " kcal"}}
      </v-card-subtitle>

      <v-card-item>
        <Pie :data="dietStore.chart" :options="options" />
      </v-card-item>

    </v-card>
  </v-container>
</template>


<script>
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

    dietStore.refreshChart();

    return {
      dietStore,
    }
  },

}
</script>

<style scoped>
.scroll {
  overflow-y: scroll
}
</style>