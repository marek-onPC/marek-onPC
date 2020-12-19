<template>

<!-- TO DO:
- INFINITE SCROLL
- NUMBER OF POSTS FOUND -->

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
      <v-icon>
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
        <v-container>
          <div class="d-flex align-center justify-center">
            <v-text-field
            label="What you want to find today?"
            dense
            color="secondary"
            class="my-7 mx-5"
            style="max-width: 500px;"
            v-model="searchPhrase"
            @keyup="searchWpPosts"
            >
            </v-text-field>
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
            <transition-group name="search-cards" class="d-flex flex-column justify-center mt-md-15" v-if="!searchLoading">
              <v-card
              class="mx-auto mb-10"
              outlined
              shaped
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
                  <h2 class="display-1"> {{ post.title.rendered }} </h2>
                </v-card-title>

                <v-card-text v-html="post.excerpt.rendered" class="pb-0">
                </v-card-text>

                <div class="d-flex justify-start ml-2">
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
      nothingFound: false
    }
  },
  methods: {
    searchWpPosts:
      debounce(function () {
        if (this.searchPhrase !== '') {
          this.searchLoading = true
          axios.get('http://localhost:8888/wp-json/wp/v2/posts?search=' + this.searchPhrase)
            .then(function (response) {
              return response.data
            })
            .then(data => {
              if (data) {
                this.searchResults = data
                this.searchLoading = false
                console.log(this.searchResults)
              }
            })
            .catch(error => {
              console.log(error)
              this.searchLoading = false
            })
        }
      }, 500)
  },
  watch: {
    searchResults: function () {
      if (this.searchResults.length > 0) {
        this.nothingFound = false
        this.searchResults.forEach(post => {
          switch (post.categories[0]) {
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
      } else if (typeof this.searchResults === 'object' && this.searchResults !== null) {
        this.nothingFound = true
        console.log(this.searchResults)
      }
    },
    searchPhrase: function () {
      if (this.searchPhrase === '') {
        this.searchResults = ''
      }
    },
    searchDialogVisible: function () {
      if (this.searchDialogVisible === false) {
        this.searchPhrase = ''
        this.searchLoading = false
        this.searchResults = ''
        this.nothingFound = false
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

.search-cards-enter-active {
  transition: all 1s;
}

.search-cards-enter {
  opacity: 0;
  transform: translateY(-75px) scale(0.925);
}

@keyframes fadeIn {
  from { opacity: 0 }
  to { opacity: 1 }
  }
</style>
