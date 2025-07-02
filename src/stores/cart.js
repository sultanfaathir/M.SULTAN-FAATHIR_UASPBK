import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  actions: {
    addToCart(item) {
      this.items.push(item)
    },
    clearCart() {
      this.items = []
    }
  }
})
