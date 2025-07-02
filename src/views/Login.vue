<template>
  <div class="login-container">
    <div class="login-box">
      <h2>Masuk ke Game Market</h2>
      <form @submit.prevent="handleLogin">
        <input v-model="username" type="text" placeholder="Username" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p class="hint">Lupa password?</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const router = useRouter()

const handleLogin = () => {
  // simulasi login sukses
  console.log('Login sebagai:', username.value)
  router.push('/') // arahkan ke halaman home
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-color: #121212;
}

.login-box {
  background-color: #1c1c1c;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  width: 100%;
  max-width: 400px;
  text-align: center;
  color: #fff;
}

.login-box h2 {
  margin-bottom: 1.5rem;
}

.login-box form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.login-box input {
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 6px;
  background-color: #2e2e2e;
  color: #fff;
  font-size: 1rem;
}

.login-box input:focus {
  outline: none;
  box-shadow: 0 0 0 2px #1976d2;
}

.login-box button {
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 6px;
  background-color: #1976d2;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s ease;
}

.login-box button:hover {
  background-color: #1565c0;
}

.hint {
  margin-top: 1rem;
  font-size: 0.85rem;
  color: #ccc;
}
</style>
