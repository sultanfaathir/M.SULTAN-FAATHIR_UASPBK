<template>
  <div class="admin-orders">
    <h2>📦 Kelola Pesanan</h2>

    <div v-if="orders.length === 0" class="empty">
      <p>Tidak ada pesanan yang tersedia.</p>
    </div>

    <div class="orders-list" v-else>
      <div class="order-card" v-for="order in orders" :key="order.id">
        <div class="card-header">
          <h3>👤 {{ order.name || 'Tanpa Nama' }}</h3>
          <button class="delete-btn" @click="hapusPesanan(order.id)">Hapus</button>
        </div>

        <p class="date">🕒 {{ formatDate(order.date) }}</p>

        <div class="status-control">
          <label>Status:</label>
          <select v-model="order.status" @change="ubahStatus(order)">
            <option value="Pending">Pending</option>
            <option value="Selesai">Selesai</option>
          </select>
        </div>

        <div class="items">
          <div class="item" v-for="item in order.items" :key="item.id">
            <img :src="item.image" :alt="item.title" />
            <div class="item-info">
              <h4>{{ item.title }}</h4>
              <p>Rp{{ item.price.toLocaleString() }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useOrderStore } from '../../stores/orders'
import { storeToRefs } from 'pinia'

const orderStore = useOrderStore()
const { orders } = storeToRefs(orderStore)

onMounted(() => {
  orderStore.fetchOrders()
})

const formatDate = (isoDate) => {
  if (!isoDate) return 'Tanggal tidak tersedia'
  const date = new Date(isoDate)
  return date.toLocaleString('id-ID', {
    dateStyle: 'medium',
    timeStyle: 'short'
  })
}

const hapusPesanan = async (id) => {
  if (confirm('Yakin ingin menghapus pesanan ini?')) {
    await orderStore.deleteOrder(id)
    // Bisa tambahkan refetch jika diperlukan:
    // await orderStore.fetchOrders()
  }
}

const ubahStatus = async (order) => {
  await orderStore.updateOrder(order)
}
</script>

<style scoped>
.admin-orders {
  color: white;
  padding: 2rem;
}

h2 {
  margin-bottom: 1rem;
}

.empty {
  background-color: #2e2e2e;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  color: #ccc;
}

.orders-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.order-card {
  background-color: #1e1e1e;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.delete-btn {
  background-color: #e53935;
  color: white;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  cursor: pointer;
}

.delete-btn:hover {
  background-color: #c62828;
}

.date {
  font-size: 0.9rem;
  color: #aaa;
  margin-bottom: 1rem;
}

.status-control {
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.status-control select {
  padding: 0.4rem;
  border-radius: 6px;
  border: none;
}

.items {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.item {
  background-color: #2a2a2a;
  border-radius: 8px;
  padding: 0.5rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  width: 100%;
  max-width: 400px;
}

.item img {
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 6px;
}

.item-info h4 {
  margin: 0;
  color: #fff;
}

.item-info p {
  margin: 0;
  color: #66bb6a;
  font-weight: bold;
}
</style>
