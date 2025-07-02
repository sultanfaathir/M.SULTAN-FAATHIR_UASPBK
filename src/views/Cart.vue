<template>
  <div class="container">
    <h2 class="section-title">🛒 Keranjang Saya</h2>

    <div v-if="cart.items.length === 0" class="empty-cart">
      <p>Keranjang kamu masih kosong.</p>
      <RouterLink class="btn" to="/">Belanja Sekarang</RouterLink>
    </div>

    <div v-else>
      <div class="cart-list">
        <div class="cart-item" v-for="item in cart.items" :key="item.id">
          <img :src="item.image" alt="game" />
          <div class="details">
            <h3>{{ item.title }}</h3>
            <p>{{ item.genre }}</p>
            <p class="price">Rp{{ item.price.toLocaleString() }}</p>
          </div>
          <button class="btn danger" @click="cart.removeFromCart(item.id)">Hapus</button>
        </div>
      </div>

      <div class="cart-summary">
        <p>Total: <strong>Rp{{ totalHarga.toLocaleString() }}</strong></p>
        <button class="btn" @click="handleCheckout">Checkout</button>
        <button class="btn danger" @click="cart.clearCart()">Kosongkan</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart'
import { useOrderStore } from '../stores/orders'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const cart = useCartStore()
const orders = useOrderStore()
const router = useRouter()

const totalHarga = computed(() =>
  cart.items.reduce((total, item) => total + item.price, 0)
)

const handleCheckout = () => {
  if (cart.items.length === 0) return
  orders.addOrder(cart.items)
  cart.clearCart()
  router.push('/orders')
}
</script>

<style scoped>
.cart-list {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-bottom: 2rem;
}

.cart-item {
  display: flex;
  align-items: center;
  background-color: #1e1e1e;
  border-radius: 12px;
  padding: 1rem;
  gap: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.cart-item img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
}

.details {
  flex-grow: 1;
}

.price {
  color: #66bb6a;
  font-weight: bold;
  margin-top: 0.5rem;
}

.cart-summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #222;
  padding: 1rem 1.5rem;
  border-radius: 10px;
}

.empty-cart {
  text-align: center;
  margin-top: 4rem;
}

.btn {
  background-color: #1976d2;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s ease;
  text-decoration: none;
}

.btn:hover {
  background-color: #1565c0;
}

.btn.danger {
  background-color: #e53935;
}

.btn.danger:hover {
  background-color: #c62828;
}
</style>
