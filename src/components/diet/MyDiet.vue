<template>
    <v-card class="mx-auto">

        <v-list lines="two" select-strategy="classic">
            
            <v-container fluid>
                <v-list-header  class="text-h5">내 식단</v-list-header>
            </v-container>
            
            <v-container fluid>
                
                <v-spacer></v-spacer>
                <v-list-item active-color="primary" rounded="xl" value="list">
                    <template v-slot:prepend>
                    <v-avatar color="white">
                        <v-icon>mdi-fridge</v-icon>
                    </v-avatar>
                    </template>

                    <v-list-item-title>목록 보기</v-list-item-title>
                </v-list-item>

                <v-list-item active-color="primary" rounded="xl" value="register">
                    <template v-slot:prepend>
                    <v-avatar color="white">
                        <v-icon>mdi-plus</v-icon>
                    </v-avatar>
                  </template>   

                    <v-list-item-title>등록하기</v-list-item-title>
                </v-list-item>

                <v-list-item active-color="primary" rounded="xl" value="calculate">
                    <template v-slot:prepend>
                    <v-avatar color="white">
                        <v-icon>mdi-calculator</v-icon>
                    </v-avatar>
                  </template>   

                    <v-list-item-title>영양 계산</v-list-item-title>
                </v-list-item>

                <v-list-item active-color="primary" rounded="xl" value="recommend">
                    <template v-slot:prepend>
                    <v-avatar color="white">
                        <v-icon>mdi-cart-outline</v-icon>
                    </v-avatar>
                  </template>   

                    <v-list-item-title>추천 상품</v-list-item-title>
                </v-list-item>
            </v-container>
        </v-list>
    </v-card>
</template>

<script>

export default {
    data: () => ({

    }),
}


</script>