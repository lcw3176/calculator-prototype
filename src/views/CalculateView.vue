<template>
  <v-container>

    <v-app-bar dark :elevation="0">

      <v-btn icon :to="'/home'">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>

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
              <v-list-item-subtitle class="pb-2">
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
            닫기
          </v-btn>

          <v-btn color="red-darken-1" variant="text" :to="'/chart'">
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

      <v-list v-for="item in dietStore.items" lines="two" select-strategy="classic" @click="dietStore.selectFood(item)"
        active-color="primary">

        <v-list-item :value="item.no">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <v-list-item-subtitle class="pb-2">
            {{ item.subtitle }}
          </v-list-item-subtitle>
        </v-list-item>


      </v-list>
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
