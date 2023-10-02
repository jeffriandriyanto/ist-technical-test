export default async function ({ $axios, $config, store }, inject) {
  const api = $axios.create({
    timeout: 180000,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });

  api.onRequest(() => {
    store.commit("app/loading", true);
  });

  api.interceptors.request.use((config) => {
    if (store.$auth.loggedIn) {
      config.headers.common["Authorization"] =
        store.$auth.$storage._state["_token.local"];
    }
    return config;
  });

  api.interceptors.response.use(
    function (response) {
      store.commit("app/loading");
      return response.data;
    },
    function (error) {
      store.commit("app/loading");
      const errCode = error?.response?.data.code || error?.response?.status;
      const text = error?.response?.data.message || "Something went wrong";

      $nuxt.$cDialog.error({
        errCode,
        text,
      });

      if (error.response) {
        return error.response;
      } else {
        return error;
      }
    }
  );

  inject("api", api);
}
