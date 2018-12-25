<template>
  <div>
      <v-parallax src="/material_design-wallpaper-3840x2160.jpg">
      <v-container fill-height>
        <v-layout align-center justify-center>
          <v-flex md7>
            <h3 class="display-3 font-weight-black">Front End Developer.</h3>

            <p class="subheading mt-3">Based out of Augusta, GA. Specializing in Front end Development. Looking for a application to better help your business? Or a nice website for online presence? Or  you're an Employer looking to hire me. You can get in touch with me <a href="mailto:donte@dontetrumble.com?subject=Looking to hire Donte Trumble" class="white--text">here</a>.</p>
          </v-flex>
        </v-layout>
      </v-container>
      </v-parallax>
      <v-container grid-list-lg>
        <v-layout mb-3 row wrap>
          <v-flex xs12 sm5 md3 mb-3>
            <v-card>
              <v-card-media
                src="/finance-634901_960_720.png"
                height="200px"
              >
              </v-card-media>

              <v-card-title primary-title>
                <div>
                  <div class="headline">Wallstreet Ticker Bot</div>
                  <span class="grey--text">Discord Bot</span>
                </div>
              </v-card-title>

              <v-card-actions>
                <v-btn color="primary" dark href="https://discordapp.com/oauth2/authorize?client_id=470446617376456715&scope=bot" target="_blank">Invite Bot</v-btn>
                <v-spacer></v-spacer>
                <v-btn icon @click="show2 = !show2">
                  <v-icon>{{ show2 ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-slide-y-transition>
                <v-card-text v-show="show2">
                  <h3>Overview</h3>
                  <p>The bot gives you realtime updated information about a stock that's traded on the NYSE and Nasdaq.</p>
                  <h3>How to use the bot?</h3>
                  <p>After you have allowed the bot to join your server. The command to use the bot is !tick ${name of stock ticker} (!tick $AMD).</p>
                </v-card-text>
              </v-slide-y-transition>
            </v-card>
          </v-flex>
          <v-flex xs12 sm5 md3 mb-3>
            <v-card>
              <v-card-media
                src="/future-hits-emblem.png"
                height="200px"
              >
              </v-card-media>

              <v-card-title primary-title>
                <div>
                  <div class="headline">Future Hits 3</div>
                  <span class="grey--text">Online Shopping</span>
                </div>
              </v-card-title>

              <v-card-actions>
                <v-btn color="primary" dark href="https://futurehits3.com/#/" target="_blank">Go</v-btn>
                <v-spacer></v-spacer>
                <v-btn icon @click="show = !show">
                  <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-slide-y-transition>
                <v-card-text v-show="show">
                  <h3>Overview</h3>
                  <p>An ecommerce site that sell the trending items that consumers want.</p>
                </v-card-text>
              </v-slide-y-transition>
            </v-card>
          </v-flex>
          
        </v-layout>
      </v-container>
      
  </div>
    
</template>

<script>

export default {
  data(){
    return{
      show: false,
      show2: false
    }
    
  },
  head(){
    return {
      title: 'Home | dontetrumble.com',
      meta:[
        {hid: 'description', name: 'description', content: "Hello, my name is Donte Trumble. I'm the Owner of Future Hits 3. I'm also an Entrepreneur, and Web Developer."}
      ]
      
    }
  }
}
</script>
<style scoped>
  p{
    line-height: 2em;
  }
</style>

