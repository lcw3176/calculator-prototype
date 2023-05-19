<template>
  <v-container>

    <v-app-bar dark :elevation="0">

      <v-btn icon :to="'/'">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>

      <v-toolbar-title class="font-weight-black">밀거래</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click="this.dialog = true">
        
        <v-badge :content="dietStore.getSelectedLength" color="info">
          <v-icon v-if="dietStore.getSelectedLength == 0" icon="mdi-cart" size="x-large"></v-icon>
          <v-icon v-else icon="mdi-cart" color="warning" size="x-large"></v-icon>
        </v-badge>
        
      </v-btn>
    </v-app-bar>

    <v-dialog v-model="dialog" scrollable>
      <v-card>
        <v-card-title>재료 목록</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
          <v-list v-for="item in dietStore.selected" active-color="primary">
            <v-list-item>
              <v-list-item-title>{{ item.title }}</v-list-item-title>

              <template v-slot:append>
                <v-btn icon="mdi-minus" size="small" @click="dietStore.removeSelected(item)"></v-btn>
              </template>


            </v-list-item>

          </v-list>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
            닫기
          </v-btn>

          <v-spacer></v-spacer>
          <v-btn color="success" variant="text" :to="'/chart'">
            다음 단계
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


    <v-row dense>
      <v-col cols="12">
        <v-text-field label="재료 이름을 입력하세요" hide-details="auto" v-model="dietStore.keyword"
          v-on:update:model-value="dietStore.searchFood()">

        </v-text-field>

      </v-col>
    </v-row>


    <v-card class="mx-auto mt-5">

      <v-list v-for="item in dietStore.items" select-strategy="classic" @click="dietStore.selectFood(item); this.snackbar = true;"
        active-color="primary">

        <v-list-item :value="item.no">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>


      </v-list>

      
    <v-snackbar
      v-model="snackbar"
    >
      {{ text }}

      <template v-slot:actions>
        <v-btn
          color="success"
          variant="text"
          @click="this.dialog = true"
        >
          이동
        </v-btn>
      </template>
    </v-snackbar>
    </v-card>


    <InfiniteLoading v-show="dietStore.getSearchResultLength >= 10" @infinite="dietStore.infiniteHandler" />

  </v-container>
</template>

<script>
import InfiniteLoading from 'v3-infinite-loading';
import { useDietStore } from '@/store/diet';

export default {
  name: 'CalculateView',

  components: {
    InfiniteLoading,
  },

  data() {
    return {
      dialog: false,
      snackbar: false,
      text: `다음 단계로 가려면 카트를 눌러 주세요`,
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
