<template>
  <v-dialog v-model="show" persistent width="800">
    <v-card>
      <v-card-title
        >{{ isEdit ? "Show" : "Add" }} Product<v-spacer />
        <v-icon @click="close">mdi-close</v-icon></v-card-title
      >
      <v-card-text class="pa-6">
        <v-form ref="addProducts" lazy-validation>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="form.title"
                :rules="[(v) => !!v || 'Product is required']"
                :readonly="isEdit"
                label="Product"
                filled
                dense
              />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="form.brand"
                :rules="[(v) => !!v || 'Brand is required']"
                :readonly="isEdit"
                label="Brand"
                filled
                dense
              />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model.number="form.price"
                :rules="[(v) => !!v || 'Price is required']"
                :readonly="isEdit"
                label="Price $"
                type="number"
                filled
                dense
              />
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model.number="form.stock"
                :rules="[(v) => !!v || 'Stock is required']"
                :readonly="isEdit"
                label="Stock"
                type="number"
                filled
                dense
              />
            </v-col>
            <v-col cols="12">
              <v-textarea
                v-model="form.description"
                :rules="[(v) => !!v || 'Description is required']"
                label="Description"
                rows="3"
                filled
                dense
              />
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
      <v-card-actions v-if="!isEdit">
        <v-spacer />
        <v-btn color="primary" @click="save">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import moment from "moment";

export default {
  props: {
    close: Function,
    show: Boolean,
    data: Object,
  },
  data() {
    return {
      isEdit: false,
      form: {
        id: "",
        title: "",
        brand: "",
        price: "",
        stock: "",
        description: "",
      },
    };
  },
  watch: {
    show(isShow) {
      this.isEdit = false;
      if (isShow) {
        this.$refs.addProducts && this.$refs.addProducts.reset();
        if (this.data.id) {
          setTimeout(() => {
            this.form = { ...this.data };
            this.isEdit = true;
          }, 100);
        }
        return;
      }
    },
  },
  methods: {
    randomId() {
      return moment().valueOf();
    },
    save() {
      if (this.$refs.addProducts.validate()) {
        const id = this.randomId();
        this.$store.commit("products/addProducts", {
          ...this.form,
          id,
        });
        this.close();
      }
    },
  },
};
</script>
