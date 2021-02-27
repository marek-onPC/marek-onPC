<template>
  <v-dialog
  v-model="searchDialogVisible"
  fullscreen
  >
  <template v-slot:activator="{ on }">
    <v-btn
    icon
    tile
    v-on="on"
    >
      <v-icon color="white">
        mdi-magnify
      </v-icon>
    </v-btn>
    </template>
      <v-card>
        <v-toolbar
        dark
        color="primary"
        tile
        prominent
        elevation="2"
        src="@/assets/search-toolbar.png"
        >
          <v-toolbar-title class="py-0">
            <h2 class="font-weight-thin blue--gray">Search</h2>
          </v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn
          icon
          tile
          @click="searchDialogVisible = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-container class="search-form">
          <div class="d-flex flex-column align-center justify-center my-7">
            <v-text-field
            label="What you want to find today?"
            dense
            color="secondary"
            class="my-2 mx-5"
            style="max-width: 500px; width: 100%"
            v-model="searchPhrase"
            @keyup="searchWpPosts"
            >
            </v-text-field>
            <transition name="search-info">
              <p v-if="!nothingFound && !searchLoading && searchResults != ''"><strong>{{ allSearchResults.length }}</strong> posts found.</p>
            </transition>
          </div>

          <div class="d-flex justify-center mt-15" v-if="searchLoading">
            <v-progress-circular
            indeterminate
            color="primary"
            ></v-progress-circular>
          </div>

          <div class="not-found d-flex flex-column justify-center align-center" v-if="nothingFound && !searchLoading">
            <h1 class="fof-title display-1 pr-5 secondary--text text-right">Nothing has been found</h1>
            <FourOFour/>
          </div>

          <transition name="search-cards">
            <transition-group name="search-cards" class="d-flex flex-column justify-center mt-md-15" v-if="!nothingFound && !searchLoading">
              <v-card
              class="mx-auto mb-10"
              outlined
              tile
              hover
              v-for="post in searchResults"
              :key="post.id"
              :to="'/post?id=' + post.id"
              @click="searchDialogVisible = false"
              >
                <v-card-title>
                  <v-avatar
                  color="orange"
                  size="62"
                  class="mr-5"
                  >
                    <img
                    :src="post.better_featured_image.source_url"
                    >
                  </v-avatar>
                  <h2 class="display-1" v-html="post.title.rendered"></h2>
                </v-card-title>

                <v-card-text v-html="post.excerpt.rendered" class="pb-0">
                </v-card-text>

              </v-card>
            </transition-group>
          </transition>
        </v-container>
      </v-card>
  </v-dialog>
</template>

<script>
import debounce from 'lodash.debounce'
import FourOFour from '@/components/FourOFour.vue'

const axios = require('axios').default

export default {
  name: 'SearchDialog',
  components: {
    FourOFour
  },
  data () {
    return {
      searchDialogVisible: false,
      searchPhrase: '',
      searchLoading: false,
      searchResults: '',
      allSearchResults: '',
      nothingFound: false,
      postsToLoad: 5
    }
  },
  methods: {
    searchWpPosts:
      debounce(function () {
        if (this.searchPhrase !== '') {
          this.searchLoading = true
          axios.get('https://ms-portfolio.eu/wp-json/wp/v2/posts?search=' + this.searchPhrase)
            .then(function (response) {
              return response.data
            })
            .then(data => {
              if (data) {
                this.allSearchResults = data
                this.searchResults = this.allSearchResults.slice(0, this.postsToLoad)
                this.searchLoading = false
              }
            })
            .catch(error => {
              console.log(error)
              this.searchLoading = false
            })
        }
      }, 500),
    loadMoreSearchResults () {
      if (this.searchDialogVisible === true) {
        document.getElementsByClassName('v-dialog')[0].onscroll = () => {
          if (this.allSearchResults !== '') {
            const scrollTrigger = document.getElementsByClassName('v-dialog')[0].scrollTop + window.innerHeight
            const bottomOfMain = document.getElementsByClassName('search-form')[0].scrollHeight

            if (scrollTrigger > bottomOfMain) {
              this.postsToLoad = this.postsToLoad + 1
              this.searchResults = this.allSearchResults.slice(0, this.postsToLoad)
            }
          }
        }
      }
    }
  },
  watch: {
    allSearchResults: function () {
      if (this.allSearchResults.length > 0) {
        this.nothingFound = false
        this.allSearchResults.forEach(post => {
          switch (post.categories[0]) {
            case 1:
              post.categories = 'General'
              break
            case 55:
              post.categories = 'Programming'
              break
            case 56:
              post.categories = 'Baking'
              break
            case 57:
              post.categories = 'Trips'
              break
          }
          post.date = post.date.split('T')[0]
        })
        this.loadMoreSearchResults()
      } else if (typeof this.allSearchResults === 'object' && this.allSearchResults !== null) {
        this.nothingFound = true
      }
    },
    searchPhrase: function () {
      if (this.searchPhrase === '') {
        this.allSearchResults = ''
      }
    },
    searchDialogVisible: function () {
      if (this.searchDialogVisible === false) {
        this.searchPhrase = ''
        this.searchLoading = false
        this.allSearchResults = ''
        this.searchResults = ''
        this.nothingFound = false
        this.postsToLoad = 5
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.not-found {
  position: relative;
  width: 100%;
  height: 200px;
  padding: 0 15px;
  margin: auto;

  @media (min-width: 500px) {
      width: 500px;
  }

  @media (min-width: 650px) {
      height: 450px;
      width: 650px;
  }

  @media (min-width: 960px) {
      width: 800px;
  }
}

.fof-title {
  position: absolute;
  top: 0%;
  right: 0%;
  opacity: 0.5;
  animation: fadeIn 700ms ease-in-out 1s both;

  @media (min-width: 650px) {
    top: 35%;
  }
}

.search-cards-enter-active, .search-info-enter-active {
  transition: all 1s;
}

.search-cards-enter {
  opacity: 0;
  transform: translateY(-75px) scale(0.925);
}

.search-info-enter {
  opacity: 0;
  transform: translateY(75px) scale(0.925);
}

@keyframes fadeIn {
  from { opacity: 0 }
  to { opacity: 1 }
  }
</style>
