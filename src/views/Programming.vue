<template>
  <div class="programming">
    <v-container>
      <!-- Loading spinner -->
      <div class="d-flex justify-center mt-15" v-if="programmingPosts == ''">
        <v-progress-circular
        indeterminate
        color="primary"
        ></v-progress-circular>
      </div>

      <!-- Loaded content -->
      <transition name="posts-cards">
        <transition-group name="posts-cards" class="d-flex flex-wrap justify-center my-10 px-md-15" v-if="programmingPosts != ''">
          <div
          v-for="(post) in programmingPosts"
          :key="post.id"
          class="pa-5 col-lg-4 col-sm-6"
          >
            <v-card
            :to="'/post?id=' + post.id"
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
                <v-card-title style="background-color: rgba(0, 0, 0, 0.5);"><h2> {{ post.title.rendered }} </h2></v-card-title>
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
              </v-card-text>
            </v-card>
          </div>
        </transition-group>
      </transition>

    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
const axios = require('axios').default

export default {
  name: 'Programming',
  data () {
    return {
      allProgrammingPosts: [],
      programmingPosts: [],
      postsToLoad: 6,
      postsPerScreenWidth: 0
    }
  },
  methods: {
    getWpPosts () {
      axios.get('https://ms-portfolio.eu/wp-json/wp/v2/posts?categories=55')
        .then(function (response) {
          return response.data
        })
        .then(data => {
          if (data) {
            this.allProgrammingPosts = data
            this.programmingPosts = this.allProgrammingPosts.slice(0, this.postsToLoad)
          }
        })
        .catch(error => {
          console.log(error)
          setTimeout(() => {
            this.getWpPosts()
          }, 2500)
        })
    },
    loadMoreWpPosts () {
      window.onscroll = () => {
        if (this.allProgrammingPosts !== '' && window.location.pathname === '/programming') {
          const scrollTrigger = document.documentElement.scrollTop + window.innerHeight
          const bottomOfMain = document.getElementsByClassName('programming')[0].scrollHeight

          if (scrollTrigger > bottomOfMain + 100) {
            this.postsToLoad = this.postsToLoad + 3
            this.programmingPosts = this.allProgrammingPosts.slice(0, this.postsToLoad)
          }
        }
      }
    },
    setPostsPerScreenWidth () {
      if (window.innerWidth > 1263) {
        this.postsPerScreenWidth = 3
      } else if (window.innerWidth > 600 && window.innerWidth <= 1263) {
        this.postsPerScreenWidth = 2
      } else {
        this.postsPerScreenWidth = 1
      }
    }
  },
  created () {
    this.setPostsPerScreenWidth()
    this.getWpPosts()
    this.loadMoreWpPosts()
  },
  watch: {
    programmingPosts: function () {
      this.programmingPosts.forEach(post => {
        switch (post.categories[0]) {
          case 55:
            post.categories = 'Programming'
            break
        }
        post.date = post.date.split('T')[0]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.posts-cards-enter-active {
  transition: all 1s;
}

.posts-cards-enter {
  opacity: 0;
  transform: translateY(-75px) scale(0.925);
}
</style>
