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
          <!-- <v-tab to="/programming">programming</v-tab> -->
          <!-- <v-tab to="/baking">baking</v-tab> -->
          <!-- <v-tab to="/trips">trips</v-tab> -->
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

    <transition name="showIn">
      <v-btn
      v-scroll="onScroll"
      v-show="fabToTop"
      fab
      dark
      fixed
      bottom
      right
      color="secondary"
      @click="toTop"
      >
        <v-icon x-large class="mb-1">mdi-menu-up</v-icon>
      </v-btn>
    </transition>
  </v-app>
</template>

<script>
import SearchDialog from '@/components/SearchDialog.vue'

export default {
  name: 'App',
  components: {
    SearchDialog
  },
  data () {
    return {
      fabToTop: false
    }
  },
  methods: {
    vTabsSliderDisplay () {
      var url = new URL(window.location.href)

      if (url.pathname === '/post/' || url.pathname === '/404/' || url.pathname === '/post' || url.pathname === '/404') {
        document.getElementsByClassName('v-tabs-slider')[0].style.display = 'none'
      } else {
        document.getElementsByClassName('v-tabs-slider')[0].style.display = 'block'
      }
    },
    pageTitle () {
      document.title = this.$route.meta.title
    },
    onScroll (e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fabToTop = top > 500
    },
    toTop () {
      this.$vuetify.goTo(0)
    }
  },
  mounted () {
    this.vTabsSliderDisplay()
  },
  created () {
    this.pageTitle()
  },
  watch: {
    $route: function () {
      this.vTabsSliderDisplay()
      this.pageTitle()
    }
  }
}
</script>

<style lang="scss">
@import url('assets/wp-css/style.min.css');

.wp {
  &-rendered-content {
    h2 {
      font-size: 40px;
      font-weight: 300;
      border-bottom: 2px solid #9E9E9E;
      padding: 10px;
      margin: 50px 0 25px;
      position: relative;

      &::after {
        position: absolute;
        bottom: -2px;
        left: 0;
        display: block;
        content: "";
        width: 50%;
        height: 2px;
        border-bottom: 2px solid #EF6C00;
      }
    }

    h3 {
      font-size: 32px;
      font-weight: 300;
      border-bottom: 2px solid #9E9E9E;
      padding: 10px;
      margin: 40px 0 20px;
      position: relative;

      &::after {
        position: absolute;
        bottom: -2px;
        left: 0;
        display: block;
        content: "";
        width: 50%;
        height: 2px;
        border-bottom: 2px solid #EF6C00;
      }
    }

    h4, h5 {
      font-size: 24px;
      font-weight: 400;
      border-bottom: 1px solid #9E9E9E;
      padding: 10px;
      margin: 30px 0 15px;
      position: relative;

      &::after {
        position: absolute;
        bottom: -1px;
        left: 0;
        display: block;
        content: "";
        width: 50%;
        height: 1px;
        border-bottom: 1px solid #EF6C00;
      }
    }

    p {
      letter-spacing: 0.35px;
      line-height: 35px;
    }

    ul {
      margin: 0;
      padding-left: 20px;

      li {
        position: relative;
        list-style-type: none;
        padding-left: 30px;
        margin-bottom: 12.5px;

        &::before {
          content: '';
          display: block;
          position: absolute;
          left: 0;
          top: 3.5px;
          width: 5px;
          height: 11px;
          border-width: 0 2px 2px 0;
          border-style: solid;
          border-color: #EF6C00;
          transform-origin: bottom left;
          transform: rotate(45deg);
          transition: all .2s ease-in-out;
        }
      }
    }

    table {
      background-color: #fff;
      color: rgba(0,0,0,.87);
      line-height: 1.5;
      padding: 20px 25px 40px;
      border: thin solid rgba(0,0,0,.12);

      thead {
        th {
          height: 32px;
          user-select: none;
          font-size: 14px;
          font-weight: 600;
          color: rgba(0,0,0,.6);
          border-bottom: thin solid rgba(0,0,0,.12);
          padding: 0 16px;
          transition: height .2s cubic-bezier(.4,0,.6,1);

          &:hover {
            background: rgba(0,0,0,.12);
          }
        }
      }

      td {
        border-bottom: thin solid rgba(0,0,0,.12);
        padding: 5px 16px;
        transition: height .2s cubic-bezier(.4,0,.6,1);

        &:hover {
          background: rgba(0,0,0,.12);
        }
      }
    }
    img {
      width: 100%;
      height: 100%;
    }
  }

  &-block-embed {
    &__wrapper {
      display: flex;
      justify-content: center;
    }
  }

  &-block-code {
    font-size: 16px;
    line-height: 1.25;
    padding: 20px 10px;
    margin: 25px 0;
    background: #1e1e1e;
    overflow-x: auto;

    code {
      background: none;
      color: #007acc;
      font-weight: 300;
      margin: 0;
      padding: 0;
    }
  }
}

.example-wrapper {
  display: flex;
  justify-content: center;
  padding: 25px;
  margin: 25px 0;
  border: 1px solid rgba(0,0,0,.25);
  position: relative;

  &::before {
    display: block;
    content: "EXAMPLE";
    position: absolute;
    top: 0;
    left: 0;
    top: -14px;
    left: 15px;
    color: rgba(0, 0, 0, 0.5);
    font-size: 12px;
    font-weight: 600;
    background: #fff;
    padding: 5px 10px;
  }
}

#toc_container {
  display: inline-block;
  background-color: #fff;
  color: rgba(0,0,0,.87);
  border-bottom: 1px solid #EF6C00;
  margin-bottom: 50px;
  padding: 10px 0;
  position: relative;

  &::after {
    position: absolute;
    bottom: -1px;
    left: 0;
    display: block;
    content: "";
    width: 50%;
    height: 1px;
    border-bottom: 1px solid #007acc;
  }

  .toc_title {
    font-size: 18px;
    font-weight: 500;
    border-bottom: 1px solid #007acc;
    position: relative;

    &::before {
      position: absolute;
      bottom: -1px;
      left: 0;
      display: block;
      content: "";
      width: 50%;
      height: 1px;
      border-bottom: 1px solid #EF6C00;
    }
  }

  .toc_list {
    a {
      text-decoration: none;
      transition: all .2s ease-in-out;

      &:hover {
        color: #007acc;
      }
    }

    li {
      transition: all .2s ease-in-out;

      &:hover {
        color: #007acc;

        &::before {
          border-color: #007acc;
          margin-left: 5px;
        }
      }
    }
  }
}

.showIn-enter-active, .showIn-leave-active  {
  transition: all 0.5s;
}

.showIn-enter, .showIn-leave-to {
  opacity: 0;
  transform: rotateZ(-90deg) scale(0.5);
}
</style>
