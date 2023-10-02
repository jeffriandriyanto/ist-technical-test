export const state = () => ({
  loading: false,
});

export const mutations = {
  loading(state, loading = false) {
  state.loading = loading;
  },
};

export const getters = {
  loading: (state) => state.loading,
};
