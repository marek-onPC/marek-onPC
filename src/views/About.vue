<template>
  <div class="about">
    <v-container>
      <!-- Loading spinner -->
      <div class="d-flex justify-center mt-15" v-if="aboutData == ''">
        <v-progress-circular
        indeterminate
        color="primary"
        ></v-progress-circular>
      </div>
      <transition name="about">
        <div class="d-flex flex-column justify-center mt-5 mb-15" style="max-width: 1000px" v-if="aboutData != ''">
          <div class="px-3 px-md-10 wp-rendered-content" v-html="aboutData[0].content.rendered">
          </div>

          <div class="px-3 px-md-10 mt-5">
            <v-sheet
            elevation="0"
            tile
            >
              <v-sheet
              class="pa-3 secondary text-center"
              dark
              >
                <h3>Technologies</h3>
              </v-sheet>
              <div class="pa-4">
                <v-chip-group
                column
                style="max-width: 600px; margin: auto;"
                >
                  <v-chip
                  v-for="tag in aboutDataAcf.technology"
                  :key="tag"
                  >
                    {{ tag }}
                  </v-chip>
                </v-chip-group>
              </div>
            </v-sheet>
          </div>

          <div class="px-3 px-md-10 mt-15">
            <v-sheet
            class="pa-3 primary text-center mb-5"
            dark
            >
              <h3>Timeline</h3>
            </v-sheet>
            <v-timeline
            align-top
            :dense="$vuetify.breakpoint.xsOnly"
            >
              <v-timeline-item
              v-for="timeline in aboutDataAcf.timeline"
              :key="timeline.date"
              >
                <template v-slot:opposite>
                  <span
                  class="headline font-weight-bold"
                  v-text="timeline.date"
                  ></span>
                </template>
                <v-card
                elevation="2"
                tile
                >
                  <v-card-text v-html="timeline.text">
                  </v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </div>

        </div>
      </transition>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
const axios = require('axios').default

export default {
  name: 'about',
  data () {
    return {
      aboutData: [],
      aboutDataAcf: []
    }
  },
  methods: {
    getWpAboutData () {
      axios.get('https://ms-portfolio.eu/wp-json/wp/v2/pages?id=22')
        .then(function (response) {
          return response.data
        })
        .then(data => {
          if (data) {
            this.aboutData = data
          }
        })
        .catch(error => {
          console.log(error)
          setTimeout(() => {
            this.getWpAboutData()
          }, 2500)
        })
      axios.get('https://ms-portfolio.eu/wp-json/acf/v3/pages/22')
        .then(function (response) {
          return response.data
        })
        .then(data => {
          if (data) {
            this.aboutDataAcf = data.acf
            this.aboutDataAcf.technology = this.aboutDataAcf.technology.split(';')
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  created () {
    this.getWpAboutData()
  }
}
</script>

<style lang="scss" scoped>
.about-enter-active {
  transition: all 1s;
}

.about-enter {
  opacity: 0;
  transform: translateY(-75px) scale(0.925);
}
</style>
