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
        <div class="d-flex flex-column justify-center my-15" style="max-width: 1000px" v-if="postData != ''">
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
              <v-card-title class="py-10" style="background-color: rgba(0, 0, 0, 0.5);"><h1 v-html="postData.title.rendered" style="word-break: break-word;"></h1></v-card-title>
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
            </div>
            <v-divider></v-divider>
          </v-card>
          <div class="px-3 px-md-10 wp-rendered-content" v-html="postData.content.rendered">
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
        window.location.replace('/post?id=706')
      } else {
        axios.get('https://ms-portfolio.eu/wp-json/wp/v2/posts/' + this.postId)
          .then(function (response) {
            return response.data
          })
          .then(data => {
            if (data) {
              this.postData = data
              window.scrollTo(0, 0)
            }
          })
          .catch(error => {
            console.log(error)
            if (error.response.data.data.status === 404) {
              window.location.replace('/404')
            } else {
              setTimeout(() => {
                this.getWpPostData()
              }, 2500)
            }
          })
      }
    },
    tocSmoothScroll () {
      const tocItems = document.querySelectorAll('.toc_list a')

      tocItems.forEach(tocItem => {
        tocItem.addEventListener('click', function (e) {
          e.preventDefault()
          const tocHref = this.getAttribute('href').replace('#', '')
          const elementToScroll = document.getElementById(tocHref).getBoundingClientRect().top + window.scrollY - 110
          window.scrollTo({
            top: elementToScroll,
            behavior: 'smooth'
          })
        })
      })
    },
    codeFromPost () {
      const examples = document.getElementsByClassName('example-wrapper')
      examples.forEach(example => {
        if (example.querySelectorAll('script')[0]) {
          // eslint-disable-next-line
          const codeExecute = new Function(example.querySelectorAll('script')[0].innerHTML.replace('&#038;&#038;', '&&'))
          codeExecute()
        }
      })
    }
  },
  created () {
    this.getWpPostData()
  },
  watch: {
    postData: function () {
      document.title = (this.postData.title.rendered + ' - marek onPC')
        .replace('&#8217;', '\'')
        .replace('&#8211;', '-')
    },
    $route: function () {
      this.getWpPostData()
      window.scrollTo(0, 0)
    }
  },
  updated () {
    this.tocSmoothScroll()
    this.codeFromPost()
  }
}
</script>

<style lang="scss" scoped>
.v-tabs-slider-wrapper {
  display: none;
}

.post-enter-active {
  transition: all 1s ease-in-out;
}

.post-enter {
  opacity: 0;
  transform: translateX(75px) rotateY(60deg);
}
</style>
