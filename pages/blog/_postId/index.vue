<template>
    <v-container v-editable="blok">
        <v-card>
            <v-flex>
            <v-container fill-height>
                <v-layout align-center>
                    <v-flex class="text-xs-center">
                        <h3 class="display-2 font-weight-medium">{{title}}</h3>

                        <span class="subheading pa-3">{{summary}}</span>
                    </v-flex>
                </v-layout>
        </v-container>
            
        </v-flex>
            <v-container>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 >
                        <v-container>
                                <img :src="image" :alt="title" class="pb-5" v-if="image">
                                <div class="body-2 body" v-html="body"> </div>

                                <v-card-actions>
                                    <v-btn large color="accent" to="/blog/">Go back</v-btn>
                                </v-card-actions>
                        </v-container>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card> 
    </v-container>
    
</template>

<script>
    import marked from 'marked'
    export default {
        
        asyncData(context){
            return context.app.$storyapi.get('cdn/stories/blog/'+ context.params.postId, {
                version: context.isDev ? 'draft' : 'published'
            })
            .then( res => {
                return {
                    blok: res.data.story.content,
                    image: res.data.story.content.mainImage,
                    title: res.data.story.content.title,
                    summary: res.data.story.content.summary,
                    summarySmall: res.data.story.content.summarySmall,
                    content: res.data.story.content.content,
                    keywords: res.data.story.content.keywords
                }
            })
        },
        head(){
            return{
                title: `${this.title} | dontetrumble.com`,
                meta : [
                    { hid: 'description', name: 'description', content: this.summarySmall},
                    { hid: 'keywords', name: 'keywords' , content: this.keywords},
                ]
            }
        },
        data(){
            return{
                image: 'Hello'
            }
        },
        mounted(){
            this.$storyblok.init()
            this.$storyblok.on('change', () => {
                location.reload(true)
            })
        },
        computed:{
            body(){
                if(this.content){
                    return marked(this.content)
                }
                
            }
        }
    }
</script>

<style scoped>
    p{
        line-height: 2.4em;
        white-space: pre-wrap;
    }
    img{
        max-width: 70%;
        display: block;
        margin: 0 auto;
    }
    .subheading{
        text-transform: uppercase;
        display: block;
    }
    .v-card__actions{
        padding: 8px 0;
    }
</style>