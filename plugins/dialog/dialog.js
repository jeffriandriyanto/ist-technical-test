import dialog from "~/plugins/dialog/dialog.vue";

const Plugin = {
  install(Vue, options = {}) {
    // Makes sure that plugin can be installed only once
    if (this.installed) {
      return;
    }
    this.installed = true;

    // Create event bus
    this.event = new Vue();

    Vue.prototype.$cDialog = {
      info(options = {}) {
        Plugin.event.$emit("show", { type: "info", title: "INFO", ...options });
      },
      warning(options = {}) {
        Plugin.event.$emit("show", {
          type: "warning",
          title: "WARNING",
          ...options,
        });
      },
      success(options = {}) {
        Plugin.event.$emit("show", {
          type: "success",
          title: "SUCCESS",
          ...options,
        });
      },
      error(options = {}) {
        Plugin.event.$emit("show", {
          type: "error",
          title: "ERROR",
          ...options,
        });
      },
    };

    Vue.component("cDialog", dialog);
  },
};

export default Plugin;
