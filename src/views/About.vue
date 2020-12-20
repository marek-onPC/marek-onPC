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
        <div class="d-flex flex-column justify-center mt-5 mb-15" v-if="aboutData != ''">
          <div class="px-3 px-md-10" v-html="aboutData[0].content.rendered">
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
      aboutData: []
    }
  },
  methods: {
    getWpaboutData () {
      axios.get('http://localhost:8888/wp-json/wp/v2/pages?id=22')
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
            this.getWpaboutId()
          }, 2500)
        })
    }
  },
  created () {
    this.getWpaboutData()
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
