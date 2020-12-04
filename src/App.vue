<template>
  <v-app>
    <v-app-bar
    fixed
    color="primary"
    dark
    shrink-on-scroll
    src="https://picsum.photos/1920/1080?random"
    fade-img-on-scroll
    elevation="2"
    >
      <v-toolbar-title class="py-0">
        <h2 class="font-weight-thin blue--gray" to="/" >marek <span class="font-weight-regular">onPC</span></h2>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- <v-text-field
      fixed
      label="Search"
      clearable
      dense
      class="mt-5 mr-5"
      >
      </v-text-field> -->
      <v-btn icon tile>
        <v-icon>
          mdi-magnify
        </v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs centered>
          <v-tabs-slider color="accent"></v-tabs-slider>
          <v-tab to="/">.home</v-tab>
          <v-tab to="/programming">.programming</v-tab>
          <v-tab to="/baking">.baking</v-tab>
          <v-tab to="/trips">.trips</v-tab>
          <v-tab to="/about">.about</v-tab>
        </v-tabs>
      </template>

    </v-app-bar>
    <v-main style="margin-top: 225px">
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',

  components: {
    HelloWorld
  },

  data: () => ({
    //
  })
}
</script>
