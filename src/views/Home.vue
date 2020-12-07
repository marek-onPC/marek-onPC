<template>
  <div class="home">
    <v-container>
      <!-- Loading spinner -->
      <div class="d-flex justify-center mt-15" v-if="homePosts == ''">
        <v-progress-circular
        indeterminate
        color="primary"
        ></v-progress-circular>
      </div>

      <!-- Loaded content -->
      <div class="d-flex flex-wrap justify-center my-10 px-md-15" v-if="homePosts != ''">
        <div
        v-for="(post, index) in homePosts"
        :key="post.id"
        class="pa-5"
        :class="{ 'col-lg-7 col-sm-6': index === 0, 'col-lg-5 col-sm-6': index === 1, 'col-lg-4 col-sm-6': index > 1 }"
        >
          <v-card
          href="/"
          tile
          hover
          height="100%"
          >
            <!-- Needs to have Better REST API Featured Images plugin installed on your WP backend site to load images easly like this -->
            <v-img
            :src="post.better_featured_image.source_url"
            height="250px"
            class="white--text align-end"
            >
              <v-card-title><h2> {{ post.title.rendered }} </h2></v-card-title>
            </v-img>
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
                {{ post.categories }}
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
                {{ post.date }}
              </v-chip>
            </div>
            <v-divider></v-divider>
            <v-card-text v-html="post.excerpt.rendered">
              {{ post.excerpt.rendered }}
            </v-card-text>
          </v-card>
        </div>
      </div>

      <div class="d-flex justify-end align-center mb-15" v-if="homePosts != ''">
        <v-btn
        tile
        large
        link
        color="secondary"
        href="/"
        >
          More articles...
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
const axios = require('axios').default

export default {
  name: 'Home',
  data () {
    return {
      homePosts: []
    }
  },
  methods: {
    getWpPosts () {
      axios.get('https://marek-onpc.com/wp-json/wp/v2/posts')
        .then(function (response) {
          return response.data
        })
        .then(data => {
          if (data) {
            this.homePosts = data.slice(0, 5)
            console.log(this.posts)
          }
        })
        .catch(function (error) {
          console.log(error)
          this.getWpPosts()
        })
    }
  },
  created () {
    this.getWpPosts()
  }
}
</script>
