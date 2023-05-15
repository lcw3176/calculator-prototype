<template>
  <v-container>

    <v-app-bar dark :elevation="1">
      <v-toolbar-title class="font-weight-black">밀거래</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click="this.dialog = true">
        <v-badge :content="dietStore.getSelectedLength" color="info">
          <v-icon icon="mdi-cart" size="x-large"></v-icon>
        </v-badge>
      </v-btn>
    </v-app-bar>

    <v-dialog v-model="dialog" scrollable>
      <v-card>
        <v-card-title>재료 목록</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
          <v-list v-for="item in dietStore.selected" lines="two" active-color="primary">
            <v-list-item>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
              <v-list-item-subtitle>
                {{ item.subtitle }}
              </v-list-item-subtitle>

              <template v-slot:append>
                <v-btn icon="mdi-minus" size="small" @click="dietStore.removeSelected(item)"></v-btn>
              </template>

             
            </v-list-item>
            
          </v-list>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


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

      <v-list v-for="item in dietStore.items" lines="two" select-strategy="classic" @click="dietStore.addFood(item)"
        active-color="primary">

        <v-list-item :value="item.value">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <v-list-item-subtitle>
            {{ item.subtitle }}
          </v-list-item-subtitle>
        </v-list-item>


      </v-list>
    </v-card>
  </v-container>
</template>

<script>
import { useDietStore } from '@/store/diet';

export default {
  name: 'CalculateView',

  data() {
    return {
      dialog: false,
    }
  },

  setup() {
    const dietStore = useDietStore();

    return {
      dietStore
    }
  },

}
</script>
