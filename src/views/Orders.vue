<template>
  <div class="container">
    <h2 class="section-title">🧾 Riwayat Pesanan</h2>

    <div v-if="orders.orders.length === 0" class="empty-orders">
      <p>Belum ada pesanan. Yuk mulai belanja!</p>
      <RouterLink class="btn" to="/">Belanja Sekarang</RouterLink>
    </div>

    <div v-else class="orders-list">
      <div class="order-card" v-for="order in orders.orders" :key="order.id">
        <div class="order-header">
          <div>
            <h3>🛍️ Pesanan #{{ order.id }}</h3>
            <p class="order-date">{{ order.date }}</p>
          </div>
          <span class="item-count">{{ order.items.length }} item</span>
        </div>

        <div class="order-items">
          <div class="order-item" v-for="item in order.items" :key="item.id">
            <img :src="item.image" alt="cover" />
            <div class="details">
              <h4>{{ item.title }}</h4>
              <p class="genre">{{ item.genre }}</p>
              <p class="price">Rp{{ item.price.toLocaleString() }}</p>
            </div>
          </div>
        </div>

        <div class="order-footer">
          <strong>Total: Rp{{ order.items.reduce((t, g) => t + g.price, 0).toLocaleString() }}</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useOrderStore } from '../stores/orders'
const orders = useOrderStore()
</script>

<style scoped>
.section-title {
  text-align: center;
  font-size: 2rem;
  margin-top: 1rem;
}

.empty-orders {
  text-align: center;
  margin-top: 3rem;
  color: #aaa;
}

.orders-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
}

.order-card {
  background-color: #1c1c1c;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
  transition: transform 0.2s ease;
}

.order-card:hover {
  transform: translateY(-4px);
}

.order-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #333;
  padding-bottom: 0.8rem;
  margin-bottom: 1rem;
}

.order-date {
  font-size: 0.85rem;
  color: #bbb;
}

.item-count {
  background-color: #1976d2;
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
}

.order-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.order-item {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.order-item img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid #333;
}

.details {
  flex: 1;
}

.details h4 {
  margin: 0;
}

.genre {
  color: #aaa;
  font-size: 0.9rem;
}

.price {
  color: #66bb6a;
  font-weight: bold;
}

.order-footer {
  text-align: right;
  border-top: 1px solid #333;
  margin-top: 1rem;
  padding-top: 0.8rem;
  font-size: 1.1rem;
  color: #fff;
}

.btn {
  background-color: #1976d2;
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
  margin-top: 1rem;
}

.btn:hover {
  background-color: #1565c0;
}
</style>
