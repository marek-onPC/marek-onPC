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
        <h2 class="font-weight-thin blue--gray" to="/" >marek <span class="font-weight-regular">onPC</span></h2>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
      icon
      tile
      @click="searchSnackBar = !searchSnackBar"
      >
        <v-icon>
          mdi-magnify
        </v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs
        light
        centered
        slider-size="3"
        show-arrows
        background-color="primary"
        >
          <v-tabs-slider color="secondary"></v-tabs-slider>
          <v-tab to="/">.home</v-tab>
          <v-tab to="/programming">.programming</v-tab>
          <v-tab to="/baking">.baking</v-tab>
          <v-tab to="/trips">.trip</v-tab>
          <v-tab to="/about">.about</v-tab>
        </v-tabs>
      </template>

    </v-app-bar>

    <v-snackbar
    tile
    top
    timeout="-1"
    v-model="searchSnackBar"
    >
      <div class="d-flex align-center justify-center">
        <v-text-field
        label="Search"
        dense
        color="secondary"
        class="mt-2 mr-5"
        >
        </v-text-field>
        <v-btn
        icon
        tile
        @click="searchSnackBar = false"
        >
          <v-icon>
            mdi-close
          </v-icon>
        </v-btn>
      </div>
    </v-snackbar>

    <v-main style="margin-top: 235px">
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>

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

export default {
  name: 'App',
  data: () => ({
    searchSnackBar: false
    //
  })
}
</script>
