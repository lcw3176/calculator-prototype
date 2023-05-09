<template>
    <v-container fluid>


        <v-row dense>
            <v-col cols="12">
                <v-card>
                    <v-card-title class="text-h5">
                        내 식단
                    </v-card-title>

                    <v-card-subtitle>
                        식단에 맞는 재료 추천, 기간 계산, 구매까지 한번에
                    </v-card-subtitle>
                    <v-list>

                        <v-list-item v-for="(item, i) in items" :key="i" :value="item" active-color="primary">
                            <template v-slot:prepend>
                                <v-icon :icon="item.icon"></v-icon>
                            </template>

                            <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-list-item>
                    </v-list>


                </v-card>
            </v-col>

        </v-row>
    </v-container>
</template>

<script>

export default {
    data: () => ({
        items: [
            { text: '식단 추가', icon: 'mdi-playlist-plus' },
            { text: '목록 확인', icon: 'mdi-file-check-outline' },
        ],
    }),
}


</script>