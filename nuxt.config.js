const pkg = require('./package')

const nodeExternals = require('webpack-node-externals')

const axios = require('axios')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'index, follow'},
      { name: 'revisit-after' , content: '7 days'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [
    'vuetify/src/stylus/main.styl',
    '~/css/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify',
    { src: '~plugins/ga.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    //'@nuxtjs/axios',
    //UA-131273258-1
    [
      'storyblok-nuxt', {accessToken: process.env.NODE_ENV == 'production' ? '67GZvvfGg8yzLMcJ0DlHsQtt' : 't92zCPag4MAU3OsnmQPJYAtt'}
    ]

  ],
  generate:{
    routes: function(){
      return axios.get('https://api.storyblok.com/v1/cdn/stories?version=published&token=67GZvvfGg8yzLMcJ0DlHsQtt&cv='+ Math.floor(Date.now() / 1e3))
      .then( res => {
        const blogPosts = res.data.stories.map(bp => bp.full_slug)
        return [
          '/',
          'blog',
          'about',
          ...blogPosts
        ]
      })
    }
  },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  serverMiddleware: [
    '~api/app'
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
      }
    }
  }
}
