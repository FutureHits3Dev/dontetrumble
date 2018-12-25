<template>
    <div>
        <v-footer
    height="auto"
    color="primary darken-1"
  >
    <v-layout
      justify-center
      row
      wrap
    >
      <v-btn
        v-for="link in links"
        :key="link.linkName"
        color="white"
        flat
        round
        :href="link.linkRoute"
      >
        {{ link.linkName }}
      </v-btn>
      <v-flex
        primary
        lighten-1
        py-3
        text-xs-center
        white--text
        xs12
      >
        &copy;2018 — <strong>Donte Trumble</strong>
      </v-flex>
    </v-layout>
  </v-footer>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                fixed: true,
                links: [
                  {
                    'linkName' : 'Home',
                    'linkRoute' : '/' 
                  },
                  {
                    'linkName' : 'Blog',
                    'linkRoute' : '/blog/' 
                  }
                ]
            }
        }
    }
</script>

<style scoped>

</style>