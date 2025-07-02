import { defineStore } from 'pinia'
import axios from 'axios'

export const useOrderStore = defineStore('orders', {
  state: () => ({
    orders: []
  }),
  actions: {
    async fetchOrders() {
      try {
        const res = await axios.get('http://localhost:3000/orders')
        this.orders = res.data
      } catch (error) {
        console.error('Gagal mengambil data pesanan:', error)
      }
    },

    async addOrder(items) {
      const name = prompt('Masukkan nama pembeli:') || 'Tanpa Nama'
      const newOrder = {
        id: `order-${Date.now()}`,
        name,
        items: [...items],
        date: new Date().toISOString(),
        status: 'Pending'
      }

      try {
        const res = await axios.post('http://localhost:3000/orders', newOrder)
        this.orders.push(res.data) 
        console.log('Order disimpan:', res.data)
      } catch (error) {
        console.error('Gagal menambahkan pesanan:', error)
      }
    },

    async deleteOrder(id) {
      try {
        const stringId = String(id)
        await axios.delete(`http://localhost:3000/orders/${stringId}`)
        this.orders = this.orders.filter(order => String(order.id) !== stringId)
        console.log(`Pesanan ${stringId} berhasil dihapus`)
      } catch (error) {
        console.error('Gagal menghapus pesanan:', error)
      }
    },

    async updateOrder(order) {
      try {
        await axios.put(`http://localhost:3000/orders/${order.id}`, order)
        const index = this.orders.findIndex(o => String(o.id) === String(order.id))
        if (index !== -1) this.orders[index] = order
        console.log(`Pesanan ${order.id} berhasil diperbarui`)
      } catch (error) {
        console.error('Gagal memperbarui pesanan:', error)
      }
    }
  }
})
