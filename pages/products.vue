<template>
  <div>
    <v-card class="pa-4" flat>
      <div class="d-flex">
        <div class="mb-4 text-h4">Product Page</div>
        <v-spacer />
        <v-btn color="primary" depressed @click="showForm = true"
          >Add Product</v-btn
        >
      </div>

      <FormProduct
        :show="showForm"
        :data="selectedData"
        :close="
          () => {
            showForm = false;
            selectedData = {};
          }
        "
      />

      <v-divider class="py-4"></v-divider>

      <v-data-table :headers="headers" :items="products">
        <template v-slot:[`item.price`]="{ item }">
          ${{ item.price }}
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <div class="d-flex gap10">
            <v-icon color="info" @click="showProduct(item)">mdi-eye</v-icon>

            <v-icon color="error" @click="deleteProduct(item.id)"
              >mdi-delete</v-icon
            >
          </div>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
export default {
  layout: "authenticated",
  data() {
    return {
      showForm: false,
      selectedData: {},
      headers: [
        {
          text: "Product",
          value: "title",
          sortable: false,
        },
        {
          text: "Brand",
          value: "brand",
          sortable: false,
        },
        {
          text: "Price",
          value: "price",
        },
        {
          text: "Stock",
          value: "stock",
          sortable: false,
        },
        {
          text: "Action",
          value: "actions",
          sortable: false,
        },
      ],
    };
  },
  created() {
    this.$store.dispatch("products/getProducts");
  },
  computed: {
    products() {
      return this.$store.getters["products/products"];
    },
  },
  methods: {
    showProduct(data) {
      this.selectedData = { ...data };
      this.showForm = true;
    },
    deleteProduct(id) {
      this.$store.commit("products/deleteProduct", id);
    },
  },
};
</script>
