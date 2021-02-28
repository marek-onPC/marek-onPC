<template>
  <div class="notes">
    <v-container>
      <!-- Loading spinner -->
      <div class="d-flex justify-center mt-15" v-if="homePosts == ''">
        <v-progress-circular
        indeterminate
        color="primary"
        ></v-progress-circular>
      </div>

      <!-- Loaded content -->
      <transition name="posts-cards">
        <transition-group name="posts-cards" class="d-flex flex-wrap justify-center my-10 px-md-15" v-if="homePosts != ''">
          <div
          v-for="(post, index) in homePosts"
          :key="post.id"
          class="pa-5"
          :class="{ 'col-12': index === 0, 'col-sm-6': index > 0 }"
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
                <v-card-title style="background-color: rgba(0, 0, 0, 0.5);"><h2 v-html="post.title.rendered" style="word-break: break-word;"></h2></v-card-title>
              </v-img>
              <v-card-text v-html="post.excerpt.rendered">
              </v-card-text>
            </v-card>
          </div>
        </transition-group>
      </transition>

      <div class="d-flex justify-end align-center mb-15" v-if="(homePosts != '') && (morePosts === false)">
        <v-btn
        tile
        large
        color="secondary"
        @click="morePosts = true; postsToLoad = postsToLoad + postsPerScreenWidth; homePosts = allPosts.slice(0, postsToLoad)"
        >
          More notes...
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
      allPosts: [],
      homePosts: [],
      morePosts: false,
      postsToLoad: 5,
      postsPerScreenWidth: 0
    }
  },
  methods: {
    getWpPosts () {
      axios.get('https://ms-portfolio.eu/wp-json/wp/v2/posts')
        .then(function (response) {
          return response.data
        })
        .then(data => {
          if (data) {
            this.allPosts = data
            this.homePosts = this.allPosts.slice(0, this.postsToLoad)
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
        if (this.allPosts !== '' && window.location.pathname === '/notes') {
          const scrollTrigger = document.documentElement.scrollTop + window.innerHeight
          const bottomOfMain = document.getElementsByClassName('notes')[0].scrollHeight

          if (scrollTrigger > bottomOfMain + 100) {
            this.postsToLoad = this.postsToLoad + this.postsPerScreenWidth
            this.homePosts = this.allPosts.slice(0, this.postsToLoad)
          }
        }
      }
    },
    setPostsPerScreenWidth () {
      if (window.innerWidth > 600) {
        this.postsPerScreenWidth = 2
      } else {
        this.postsPerScreenWidth = 1
      }
    }
  },
  created () {
    this.setPostsPerScreenWidth()
    this.getWpPosts()
  },
  watch: {
    morePosts: function () {
      if (this.morePosts === true) {
        this.loadMoreWpPosts()
      }
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
