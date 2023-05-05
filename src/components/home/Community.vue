<template>
    <v-container fluid>
        <v-card class="mx-auto">

            <v-card-title class="text-h5">
                커뮤니티
            </v-card-title>


            <v-container fluid>
                <v-row dense>
                    <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
                        <v-card>
                            <v-img :src="card.src" class="align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                height="200px" cover>
                                <v-card-title class="text-white" v-text="card.title"></v-card-title>
                            </v-img>

                            <v-card-actions>
                                <v-spacer></v-spacer>

                                <v-btn size="small" color="surface-variant" variant="text" icon="mdi-heart"></v-btn>
                                <v-btn size="small" color="surface-variant" variant="text" icon="mdi-share-variant"></v-btn>
                            </v-card-actions>
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
        cards: [
            { title: 'hello (벌크업)', src: 'https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_960_720.jpg', flex: 6 },
            { title: 'good (다이어트)', src: 'https://cdn.pixabay.com/photo/2016/09/15/19/24/salad-1672505_960_720.jpg', flex: 6 },
            { title: 'dosa (유지, 건강)', src: 'https://cdn.pixabay.com/photo/2014/12/11/02/55/cereals-563796_960_720.jpg', flex: 6 },
            { title: 'bachu (유지, 건강)', src: 'https://cdn.pixabay.com/photo/2016/03/26/18/23/bread-1281053_960_720.jpg', flex: 6 },
        ],

    }),
}


</script>