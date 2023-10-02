import { getProducts } from "~/api/products";

export const state = () => ({
  products: [],
});

export const mutations = {
  setProducts(state, data) {
    state.products = data;
  },
  addProducts(state, data) {
    state.products.unshift(data);
  },
  deleteProduct(state, id) {
    state.products = state.products.filter(p => p.id !== id);
  }
};

export const actions = {
  getProducts({ commit }) {
    return new Promise(async (resolve, reject) => {
      try {
        const resProducts = await getProducts();
        commit("setProducts", resProducts.products);
        resolve();
      } catch (error) {
        reject();
      }
    });
  },
};

export const getters = {
  products: (state) => state.products,
};
