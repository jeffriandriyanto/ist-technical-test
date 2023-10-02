<template>
  <v-container>
    <v-card class="pa-4 d-flex align-center" flat>
      <v-icon @click="$router.go(-1)" class="mr-4">mdi-arrow-left</v-icon>
      <div class="text-h5">About Page</div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  layout: "default",
  head: {
    title: "About Page",
    meta: [
      {
        hid: "about-description",
        name: "description",
        content: "About for application",
      },
    ],
  },
}
</script>
