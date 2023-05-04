<template>
  <v-app>
    <component :is="this.$vuetify.display.mobile ? 'v-bottom-navigation' : 'v-app-bar'"
               :grow="this.$vuetify.display.mobile ? true : false">      
      <v-btn :to="diet.path">
        <v-icon>mdi-food-drumstick</v-icon>
        {{ diet.name }}
      </v-btn>

      <v-btn :to="cart.path">
        <v-icon>mdi-basket</v-icon>
        {{ cart.name }}
      </v-btn>

      <v-btn :to="setting.path">
        <v-icon>mdi-menu</v-icon>
        {{ setting.name }}
      </v-btn>
    </component>

    <v-main >
      <router-view />
    </v-main>

  </v-app>
</template>


<script>


export default {
  data: () => ({
      diet: {
        name: "식단",
        path: "/diet",
      },

      cart: {
        name: "장바구니", 
        path: "/cart",
      },

      setting : {
        name: "설정",
        path: "/setting",
      }
  }),
  mounted() {

  },
}
</script>
