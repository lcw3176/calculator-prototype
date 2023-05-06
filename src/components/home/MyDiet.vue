<template>
    <v-container fluid>

        <v-card class="mx-auto">
            <v-card-title class="text-h5">
                식단
            </v-card-title>

            <v-container>

                <v-row dense>
                    <v-col cols="12">
                        <v-card color="blue-grey-darken-2" theme="dark">
                            <v-card-title class="text-h5">
                                추천받기
                            </v-card-title>

                            <v-card-subtitle>
                                목적에 맞는 다양한 식단 추천, 재료 구매까지 한번에
                            </v-card-subtitle>

                             <v-card-actions>
                                <v-btn class="ma-2" variant="outlined">
                                    벌크업
                                </v-btn>

                                <v-btn class="ma-2" variant="outlined">
                                    다이어트
                                </v-btn>

                                <v-btn class="ma-2" variant="outlined">
                                    유지, 건강
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>

                    <v-col cols="12">
                        <v-card color="#1F7087" theme="dark">
                            <div class="d-flex flex-no-wrap justify-space-between">
                                <div>
                                    <v-card-title class="text-h5">
                                        등록하기
                                    </v-card-title>

                                    <v-card-subtitle>나만의 식단 or 모두의 식단</v-card-subtitle>

                                    <v-card-actions>
                                        <v-btn class="ma-2" variant="outlined">
                                            개인
                                        </v-btn>

                                        <v-btn class="ma-2" variant="outlined">
                                            커뮤니티
                                        </v-btn>
                                    </v-card-actions>
                                </div>
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-container>
</template>

<script>

export default {
    data: () => ({

    }),
}


</script>