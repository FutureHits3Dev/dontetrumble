<template>
    <v-container grid-list-lg class="bg-white">
        <h1 class="text-xs-center display-3 font-weight-black pa-3">Blog</h1>
        <v-flex >
            <v-layout row wrap align-center>
                <BlogPreview  
                v-for="post in posts"
                :key="post.id"
                :title="post.title"
                :excerpt="post.previewText"
                :thumbnailImage="post.thumbnailUrl"
                :id="post.id"/>
            </v-layout>
        </v-flex>
        
    </v-container>
</template>

<script>
    import BlogPreview from '@/components/BlogPreview/BlogPreview'
    export default {
        components: {
            BlogPreview
        },
        
        asyncData(context){
            return context.app.$storyapi.get('cdn/stories', {
                version: context.isDev ? 'draft' : 'published',
                starts_with: 'blog/'
            })
            .then( res => {
                return {
                    posts: res.data.stories.map( bp => {
                        return {
                            id: bp.full_slug,
                            title: bp.content.title,
                            previewText: bp.content.summarySmall,
                            thumbnailUrl: bp.content.thumbnail
                        };
                        
                    })
                }
            })
        },
        head(){
            return{
                title: 'Blog | dontetrumble.com',
                meta : [
                    { hid: 'description', name: 'description', content: "Keeping in touch with Donte Trumble and what's he thinking/working on."},
                    { hid: 'keywords', name: 'keywords' , content: 'Donte Trumble, Donte Trumble Blog, Trumble'},
                ]
            }
        },
        data(){
            return{

            }
        }
    }
</script>

<style scoped>

</style>