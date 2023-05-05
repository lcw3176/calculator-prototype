<template>
  <v-app>
    <v-bottom-navigation grow color="primary">
      <v-btn :to="diet.path">
        <v-icon>mdi-home</v-icon>
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
    </v-bottom-navigation>

    <v-main>
      <router-view />
    </v-main>

  </v-app>
</template>


<script>


export default {
  data: () => ({
    diet: {
      name: "홈",
      path: "/home",
    },

    cart: {
      name: "장바구니",
      path: "/cart",
    },

    setting: {
      name: "설정",
      path: "/setting",
    }
  }),
  mounted() {

  },
}
</script>
