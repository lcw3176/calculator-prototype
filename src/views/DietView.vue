<template>
  <v-card>
  
    <v-card-text>
      
      <p class="text-h6 text--primary">

        <v-avatar color="white">
                        <v-icon>mdi-food-turkey</v-icon>
                    </v-avatar>
        밀거래
      </p>
    </v-card-text>

    </v-card>

  <my-diet>

  </my-diet>
</template>

<script>
import { useDietStore } from '@/store/diet';
import MyDiet from '@/components/diet/MyDiet.vue';

export default {
  components: { MyDiet },
  name: 'DietView',

  setup() {
    const dietStore = useDietStore();

    return {
      dietStore
    }
  },

}
</script>
