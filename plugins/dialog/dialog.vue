<template>
  <div class="text-center">
    <v-dialog v-model="show" width="400" persistent>
      <v-card rounded="lg">
        <v-card-text class="text-center pa-6" :class="`${options.type}--text`">
          <div class="text-h4 pt-6 mb-4">{{ options.errCode }}</div>
          <div class="text-body-1 mb-6">{{ options.text }}</div>
          <div class="d-flex justify-center">
            <v-btn outlined color="primary" text @click="close"> Close </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import dialog from "~/plugins/dialog/dialog";

export default {
  data: () => ({
    options: {
      title: "",
      text: "",
      type: "",
      errCode: null,
    },
    show: false,
    type: "",
    timer: 0,
  }),
  beforeMount() {
    dialog.event.$on("show", (options) => {
      this.options = options;
      this.show = true;
      // this.close(this.options.closeWait || 3000);
    });
  },
  methods: {
    close(timeout) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.show = false;
        this.$emit("handleClose");
      }, timeout);

      // const errCode = this.options.errCode;
    },
  },
};
</script>
