<template>
  <v-app>
    <v-bottom-navigation grow color="primary">
      <v-btn v-for="item in nav" 
          v-bind:key="item.name" 
          :to="item.path">
        <v-icon>{{item.icon}}</v-icon>
        {{ item.name }}
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
    nav:{
      home: {
        name: "홈",
        path: "/home",
        icon: "mdi-home",
      },

      // diet: {
      //   name: "계산하기",
      //   path: "/calculate",
      //   icon: "mdi-calculator",
      // },

      community: {
        name: "메뉴 추천",
        path: "/recommend",
        icon: "mdi-bulletin-board",
      },


      cart: {
        name: "장바구니",
        path: "/cart",
        icon: "mdi-basket",
      },

      // setting: {
      //   name: "설정",
      //   path: "/setting",
      //   icon: "mdi-menu",
      // }
    }
    
  }),
  mounted() {

  },
}
</script>
