<template>

  <v-app>

    
    <v-bottom-navigation color="teal" grow>
      <v-btn>
        <v-icon>mdi-food-drumstick</v-icon>

         <v-router-link to="/about">
          재료 계산
        </v-router-link>

      </v-btn>

      <v-btn>
        <v-icon>mdi-message-alert</v-icon>

        추천 받기
      </v-btn>

      <v-btn>
        <v-icon>mdi-basket</v-icon>

        장바구니
      </v-btn>
    </v-bottom-navigation>



    <v-content>
      <v-container> <router-view /></v-container>
    </v-content>

 
  </v-app>
</template>


<script>
  export default {
    data: () => ({
      overlay: true,
    }),
    mounted() {
      // hide the overlay when everything has loaded
      // you could choose some other event, e.g. if you're loading
      // data asynchronously, you could wait until that process returns
      this.overlay = true
    }, 
  }
</script>
