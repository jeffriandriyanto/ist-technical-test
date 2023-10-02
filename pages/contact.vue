<template>
  <v-container>
    <v-card class="pa-4 d-flex align-center" flat>
      <v-icon @click="$router.go(-1)" class="mr-4">mdi-arrow-left</v-icon>
      <div class="text-h5">Contact Page</div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  layout: "default",
  head: {
    title: "Contact Page",
    meta: [
      {
        hid: "contact-description",
        name: "description",
        content: "Contact for application",
      },
    ],
  },
}
</script>
