<template>
  <v-container>
    <v-card class="pa-4 d-flex align-center" flat>
      <v-icon @click="$router.go(-1)" class="mr-4">mdi-arrow-left</v-icon>
      <div class="text-h5">Contact Page</div>
    </v-card>

    <v-divider class="py-4"></v-divider>
    <v-card class="pa-4">
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          quidem rem voluptate neque facere optio voluptatum dicta magni dolorem
          veritatis. Explicabo voluptas qui aliquid eius, magnam sit natus
          similique. Minus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          quidem rem voluptate neque facere optio voluptatum dicta magni dolorem
          veritatis. Explicabo voluptas qui aliquid eius, magnam sit natus
          similique. Minus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          quidem rem voluptate neque facere optio voluptatum dicta magni dolorem
          veritatis. Explicabo voluptas qui aliquid eius, magnam sit natus
          similique. Minus.
        </p>
      </div>
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
};
</script>
