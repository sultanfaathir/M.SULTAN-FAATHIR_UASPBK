<template>
  <div class="card">
    <h3>{{ game.title }}</h3>
    <p>Genre: {{ game.genre }}</p>
    <p>Rp{{ game.price }}</p>
    <button @click="$emit('add', game)">Tambah ke Keranjang</button>
  </div>
</template>

<script setup>
defineProps(['game'])
</script>
