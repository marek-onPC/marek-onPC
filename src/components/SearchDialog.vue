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

        <div class="d-flex align-center justify-center">
          <v-text-field
          label="What you want to find today?"
          dense
          color="secondary"
          class="my-7 mx-5"
          style="max-width: 500px;"
          >
          </v-text-field>
        </div>

      </v-card>
  </v-dialog>
</template>

<script>

export default {
  name: 'SearchDialog',
  data: () => ({
    searchDialogVisible: false
    //
  })
}
</script>
