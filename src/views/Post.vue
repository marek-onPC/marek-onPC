<template>
  <div class="post">
    <v-container>
      <!-- Loading spinner -->
      <div class="d-flex justify-center mt-15" v-if="postData == ''">
        <v-progress-circular
        indeterminate
        color="primary"
        ></v-progress-circular>
      </div>
      <transition name="post">
        <div class="d-flex flex-column justify-center my-15" v-if="postData != ''">
          <v-card
          tile
          elevation="0"
          class="mb-10"
          >
            <v-img
            class="white--text align-end"
            height="400px"
            :src="postData.better_featured_image.source_url"
            >
              <v-card-title class="py-10" style="background-color: rgba(0, 0, 0, 0.5);"><h1> {{ postData.title.rendered }} </h1></v-card-title>
            </v-img>
            <div class="d-flex flex-wrap justify-space-between align-center mx-md-5">
              <div class="d-flex align-center">
                <v-btn
                :href="'https://facebook.com/share.php?u=' + postUrl"
                icon
                tile
                color="primary"
                class="ma-2"
                >
                  <v-icon large>mdi-facebook</v-icon>
                </v-btn>
                <v-btn
                :href="'https://twitter.com/share?url=' + postUrl"
                icon
                tile
                color="primary"
                class="ma-2"
                >
                  <v-icon large>mdi-twitter</v-icon>
                </v-btn>
              </div>
              <div class="d-flex justify-end">
                <v-chip
                label
                small
                color="secondary"
                class="ma-2"
                >
                  <v-icon left small>
                    mdi-label
                  </v-icon>
                  {{ postData.categories }}
                </v-chip>
                <v-chip
                label
                small
                color="secondary"
                class="ma-2"
                >
                  <v-icon left small>
                    mdi-calendar
                  </v-icon>
                  {{ postData.date }}
                </v-chip>
              </div>
            </div>
            <v-divider></v-divider>
          </v-card>
          <div class="px-3 px-md-10" v-html="postData.content.rendered">
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
  name: 'Post',
  data () {
    return {
      postId: '',
      postUrl: '',
      postData: []
    }
  },
  methods: {
    getWpPostData () {
      this.postUrl = new URL(window.location.href)
      this.postId = this.postUrl.searchParams.get('id')

      if (this.postId === null || this.postId === '') {
        window.location.replace('/404')
      } else {
        axios.get('http://localhost:8888/wp-json/wp/v2/posts/' + this.postId)
          .then(function (response) {
            return response.data
          })
          .then(data => {
            if (data) {
              this.postData = data
            }
          })
          .catch(error => {
            console.log(error)
            if (error.response.data.data.status === 404) {
              window.location.replace('/404')
            } else {
              setTimeout(() => {
                this.getWpPostId()
              }, 2500)
            }
          })
      }
    }
  },
  created () {
    this.getWpPostData()
  },
  watch: {
    postData: function () {
      switch (this.postData.categories[0]) {
        case 55:
          this.postData.categories = 'Programming'
          break
        case 56:
          this.postData.categories = 'Baking'
          break
        case 57:
          this.postData.categories = 'Trips'
          break
      }
      this.postData.date = this.postData.date.split('T')[0]
    },
    $route: function () {
      this.getWpPostData()
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style lang="scss" scoped>
.post-enter-active {
  transition: all 1s;
}

.post-enter {
  opacity: 0;
  transform: translateY(-75px) scale(0.925);
}
</style>
