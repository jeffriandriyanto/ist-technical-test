export function getProducts() {
  return window.$nuxt.$api.get(`/products`);
}
