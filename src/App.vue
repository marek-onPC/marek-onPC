<template>
  <v-app>
    <v-app-bar
    fixed
    color="primary"
    dark
    extension-height="42"
    shrink-on-scroll
    src="@/assets/blog_wallpaper.jpg"
    fade-img-on-scroll
    elevation="2"
    height="150"
    >
      <v-toolbar-title class="py-0">
        <h2 class="font-weight-thin blue--gray">marek <span class="font-weight-regular">onPC</span></h2>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <SearchDialog/>

      <template v-slot:extension>
        <v-tabs
        light
        centered
        slider-size="3"
        show-arrows
        background-color="primary"
        >
          <v-tabs-slider color="secondary"></v-tabs-slider>
          <v-tab to="/">home</v-tab>
          <v-tab to="/programming">programming</v-tab>
          <v-tab to="/baking">baking</v-tab>
          <v-tab to="/trips">trips</v-tab>
          <v-tab to="/about">about</v-tab>
        </v-tabs>
      </template>

    </v-app-bar>

    <v-main style="margin-top: 235px" class="mx-auto">
        <router-view style="max-width: 1400px"></router-view>
    </v-main>

    <v-parallax
    height="250"
    src="@/assets/material-design-wallpaper.png">
      <div class="d-flex justify-center">
        <v-btn
        href="mailto:mareksmieja@gmail.com"
        target="_blank"
        icon
        tile
        color="white"
        class="ma-2 pa-7"
        >
          <v-icon x-large>mdi-email</v-icon>
        </v-btn>
        <v-btn
        href="https://github.com/marek-onPC"
        target="_blank"
        icon
        tile
        color="white"
        class="ma-2 pa-7"
        >
          <v-icon x-large>mdi-github</v-icon>
        </v-btn>
        <v-btn
        href="https://www.linkedin.com/in/marek-smieja/"
        target="_blank"
        icon
        tile
        color="white"
        class="ma-2 pa-7"
        >
          <v-icon x-large>mdi-linkedin</v-icon>
        </v-btn>
      </div>
    </v-parallax>

    <v-footer
    dark
    color="primary"
    class="d-flex justify-center align-center"
    >
      <div>
        <p class="ma-0">{{ new Date().getFullYear() }} - marek  <strong>onPC</strong></p>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import SearchDialog from '@/components/SearchDialog.vue'

export default {
  name: 'App',
  components: {
    SearchDialog
  },
  methods: {
    vTabsSliderDisplay () {
      var url = new URL(window.location.href)

      if (url.pathname === '/post' || url.pathname === '/404') {
        document.getElementsByClassName('v-tabs-slider')[0].style.display = 'none'
      } else {
        document.getElementsByClassName('v-tabs-slider')[0].style.display = 'block'
      }
    }
  },
  mounted () {
    this.vTabsSliderDisplay()
  },
  watch: {
    $route: function () {
      this.vTabsSliderDisplay()
    }
  }
}
</script>

<style lang="scss">
.wp-block-image {
  img {
    width: 100%;
  }
}
</style>
