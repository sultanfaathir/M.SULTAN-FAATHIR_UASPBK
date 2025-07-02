<template>
  <div class="container">
    <h2 class="section-title">🎮 Top Games</h2>
    <div class="grid">
      <div class="card" v-for="game in games" :key="game.id">
        <img :src="getImageSource(game)" :alt="game.title" />
        <div class="card-content">
          <h3>{{ game.title }}</h3>
          <p>{{ game.genre }}</p>
          <p class="price">
            {{ game.price === 0 ? 'Free' : 'Rp' + game.price.toLocaleString() }}
          </p>
          <button class="btn" @click="addToCart(game)">Tambah ke Keranjang</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useCartStore } from '../stores/cart'

const games = ref([])
const cart = useCartStore()

const addToCart = (game) => {
  cart.addToCart(game)
  console.log('Game ditambahkan ke keranjang:', game.title)
}

// hanya data dengan id === '69' yang pakai gambar lokal
const getImageSource = (game) => {
  if (game.id === '69') {
    return new URL(`../assets/images/${game.image}`, import.meta.url).href
  }
  return game.image
}

onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:3000/games')
    games.value = res.data
  } catch (err) {
    console.error('Gagal mengambil data game:', err)
  }
})
</script>
