<template>
  <div class="container">
    <h2>🛠️ Admin Panel</h2>
    <nav style="margin-bottom: 1rem;">
      <router-link to="/admin/games">Kelola Game</router-link> |
      <router-link to="/admin/orders">Kelola Pesanan</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
.container {
  padding: 2rem;
  color: white;
}
nav a {
  margin-right: 1rem;
  color: #90caf9;
  text-decoration: none;
}
nav a:hover {
  color: white;
}
</style>
