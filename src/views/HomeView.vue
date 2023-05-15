<template>
  <MyDiet/>
  <Community/>
</template>

<script>
import MyDiet from '@/components/home/MyDiet.vue';
import Community from '@/components/home/Community.vue';
import { useDietStore } from '@/store/diet';

export default {
  name: 'HomeView',
  components :{
    MyDiet,
    Community
  },
  
  setup() {
    const dietStore = useDietStore();

    return {
      dietStore
    }
  },

}
</script>
