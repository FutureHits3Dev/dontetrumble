<template>
        <v-flex xs12 md4 my-3>
            <v-card :to="'/'+id">
                <v-card-media
                    :src="thumbnailImage"
                    height="200px"
                    :alt="title"
                ></v-card-media>
                <v-card-title primary-title>
                    <div class="headlineWrapper">
                        <h2 class="title mb-0">{{title}}</h2>
                        <div>{{excerpt}}</div>
                    </div>
                </v-card-title>
                
            </v-card>
        </v-flex>
    
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                required: true
            },
            thumbnailImage: {
                type: String,
                required: true
            },
            id: {
                type: String,
                required: true
            },
            excerpt: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped>
    .headlineWrapper{
        text-align: center;
        width: 100%;
    }
    .headlineWrapper div{
        max-width: 547.25px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 300;
    }
    .headlineWrapper h2{
        font-weight: 700;
    }
</style>