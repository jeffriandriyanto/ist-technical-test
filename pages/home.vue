<template>
  <div>
    <v-card class="pa-4" flat>
      <div class="text-h4 mb-4">Home Page</div>
      <v-divider class="py-4"></v-divider>
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
  </div>
</template>

<script>
export default {
  layout: "authenticated",
  head: {
    title: "Home Page",
    meta: [
      {
        hid: "home-description",
        name: "description",
        content: "Home for application",
      },
    ],
  },
};
</script>
