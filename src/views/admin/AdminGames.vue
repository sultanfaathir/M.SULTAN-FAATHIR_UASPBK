<template>
  <div class="container">
    <h2 class="section-title">Kelola Game</h2>

    <!-- Form Tambah Game -->
    <form @submit.prevent="addGame" class="card" style="margin-bottom: 2rem;">
      <h3>Tambah Game</h3>
      <input v-model="newGame.title" placeholder="Judul" required />
      <input v-model="newGame.genre" placeholder="Genre" required />
      <input v-model.number="newGame.price" placeholder="Harga" type="number" required />
      <input v-model="newGame.image" placeholder="URL Gambar" required />
      <button class="btn" type="submit">Tambah</button>
    </form>

    <!-- Daftar Game -->
    <div class="grid">
      <div class="card" v-for="game in games" :key="game.id">
        <img :src="game.image" :alt="game.title" />
        <div class="card-content">
          <h3>{{ game.title }}</h3>
          <p>{{ game.genre }}</p>
          <p class="price">Rp{{ game.price.toLocaleString() }}</p>
          <button class="btn danger" @click="deleteGame(game.id)">Hapus</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const games = ref([])

const newGame = ref({
  title: '',
  genre: '',
  price: 0,
  image: ''
})

const fetchGames = async () => {
  const res = await axios.get('http://localhost:3000/games')
  games.value = res.data
}

const addGame = async () => {
  await axios.post('http://localhost:3000/games', newGame.value)
  newGame.value = { title: '', genre: '', price: 0, image: '' }
  await fetchGames() // Tambahkan await agar langsung muncul
}

const deleteGame = async (id) => {
  await axios.delete(`http://localhost:3000/games/${id}`)
  await fetchGames() // Tambahkan await agar list langsung update
}

onMounted(fetchGames)
</script>

<style scoped>
input {
  display: block;
  margin-bottom: 0.75rem;
  padding: 0.5rem;
  width: 100%;
  border-radius: 6px;
  border: 1px solid #ccc;
  background-color: #222;
  color: white;
}

button.btn {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  margin-top: 0.5rem;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}

button.btn:hover {
  background-color: #45a049;
}

button.danger {
  background-color: #e53935;
}

button.danger:hover {
  background-color: #c62828;
}
</style>
