<template>
  <div>
    <Navbar />
    <main class="main-container">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>

<style>
@import './assets/base.css';

.main-container {
  padding: 1rem 2rem;
}
</style>
