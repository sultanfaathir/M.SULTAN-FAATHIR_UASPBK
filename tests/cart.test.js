import { setActivePinia, createPinia } from 'pinia'
import { useCartStore } from '../src/stores/cart'
import { describe, it, expect, beforeEach } from 'vitest'

describe('Cart Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('menambahkan game ke keranjang', () => {
    const cart = useCartStore()
    cart.addToCart({ id: 1, title: 'Elden Ring' })
    expect(cart.items.length).toBe(1)
  })

  it('menghapus isi keranjang', () => {
    const cart = useCartStore()
    cart.addToCart({ id: 2, title: 'Valorant' })
    cart.clearCart()
    expect(cart.items.length).toBe(0)
  })
})
