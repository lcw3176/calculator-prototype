<template>
  <v-overlay v-model="onPreparing" class="align-center justify-center">

    <v-progress-circular :size="70" color="purple" indeterminate></v-progress-circular>
  </v-overlay>

  <MyDiet />
  <Community />
</template>

<script>
import MyDiet from '@/components/home/MyDiet.vue';
import Community from '@/components/home/Community.vue';
import { useDietStore } from '@/store/diet';

export default {
  name: 'HomeView',
  components: {
    MyDiet,
    Community
  },

  data() {
    return {
      onPreparing: true,
    }
  },

  setup() {
    const dietStore = useDietStore();

    return {
      dietStore
    }
  },

  mounted() {
    this.onPreparing = false;
  }

}
</script>
