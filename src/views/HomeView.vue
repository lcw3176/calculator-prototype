<template>
    <v-app-bar
      dark
      :elevation="1"
    >
      <v-toolbar-title class="font-weight-black">밀거래</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon  color="orange-darken-2">
        <v-icon>mdi-bell</v-icon>
      </v-btn>
    </v-app-bar>

  <my-diet/>
  <community/>

</template>

<script>
import { useDietStore } from '@/store/diet';
import MyDiet from '@/components/home/MyDiet.vue';
import Community from '@/components/home/Community.vue';

export default {
  components: { MyDiet , Community},
  name: 'DietView',

  setup() {
    const dietStore = useDietStore();

    return {
      dietStore
    }
  },

}
</script>
