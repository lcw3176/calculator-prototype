<template>
  <v-container>

    <v-row dense>
      <v-col cols="10">
        <v-text-field label="재료 이름을 입력하세요" hide-details="auto" v-model="dietStore.keyword"
        @keyup.enter="dietStore.searchFood()">

        </v-text-field>

      </v-col>

      <v-col cols="2">
        <v-btn type="submit" icon="mdi-magnify" @click="dietStore.searchFood()">
        </v-btn>
      </v-col>
    </v-row>


    <v-card class="mx-auto">

      <v-list :items="dietStore.items" 
      item-props 
      lines="two"
        @click="dietStore.addFood({ value })"
        active-color="primary">
     

        <template v-slot:subtitle="{ subtitle }">
        <div v-html="subtitle" class="mb-2"></div>
      </template>

      </v-list>
    </v-card>
  </v-container>
</template>

<script>
import { useDietStore } from '@/store/diet';

export default {
  name: 'CalculateView',

  setup() {
    const dietStore = useDietStore();

    return {
      dietStore
    }
  },

}
</script>
