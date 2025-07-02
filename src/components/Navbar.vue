<template>
  <nav class="navbar">
    <div class="brand">
      <img class="logo-img" src="https://cdn.pixabay.com/photo/2024/01/25/06/56/gaming-logo-8531094_1280.png" alt="Logo" />
      <span class="title">GameHeaven</span>
    </div>
    <div class="nav-links">
      <RouterLink to="/" exact-active-class="active">Home</RouterLink>
      <RouterLink to="/orders" exact-active-class="active">Orders</RouterLink>
      <RouterLink to="/cart" exact-active-class="active">Cart</RouterLink>
      <RouterLink to="/login" exact-active-class="active">Login</RouterLink>
      <RouterLink to="/admin/games" exact-active-class="active">Admin</RouterLink>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #4a545e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 2rem;
  color: #fff;
  height: 64px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.logo-img {
  height: 32px;
  width: 32px;
  object-fit: contain;
  border-radius: 6px;
}

.title {
  font-size: 1.3rem;
  font-weight: bold;
  white-space: nowrap;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.2rem 0;
  border-bottom: 2px solid transparent;
  transition: border-color 0.3s;
}

.nav-links a:hover {
  border-bottom: 2px solid #fff;
}

.nav-links .active {
  border-bottom: 2px solid #fff;
}
</style>
