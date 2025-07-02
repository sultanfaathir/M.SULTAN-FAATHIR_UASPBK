# Deskripsi Studi Kasus
Game Market App adalah sebuah aplikasi toko game berbasis web yang dirancang untuk memberikan pengalaman belanja game digital secara online. Aplikasi ini menyediakan fitur penjelajahan game, keranjang belanja, checkout, serta sistem manajemen data game dan pesanan untuk admin. Backend menggunakan JSON Server sebagai penyedia REST API tiruan.

##  Daftar Fitur Sistem

### Fitur Pengguna:

    1. Melihat daftar game yang tersedia
    2. Menambahkan game ke keranjang belanja
    3. Melihat isi keranjang dan total harga
    4. Menghapus item dari keranjang
    5. Checkout pesanan (disimpan ke backend)
    6. Melihat riwayat pesanan

### Fitur Admin:
    1. Melihat semua daftar game
    2. Menambahkan game baru
    3. Menghapus game dari daftar
    4. Mengedit data game
    5. Melihat semua pesanan pengguna
    6. Menghapus pesanan
    7. Melihat daftar item dan waktu pemesanan

### Navbar:

    1. Home (/) — Halaman utama menampilkan daftar game
    2. Orders (/orders) — Melihat pesanan pengguna
    3. Cart (/cart) — Melihat isi keranjang
    4. Login (/login) — Placeholder login
    5. Admin (/admin/games) — Masuk ke halaman admin
    6. Kelola Game (/admin/games)
    7. Kelola Pesanan (/admin/orders)

## Struktur Proyek

```
├── src/
│   ├── assets/             # Gambar lokal (game, logo)
│   ├── components/         # Navbar, dll
│   ├── views/
│   │   ├── Home.vue
│   │   ├── Cart.vue
│   │   ├── Orders.vue
│   │   ├── Login.vue
│   │   └── admin/
│   │       ├── AdminLayout.vue
│   │       ├── AdminGames.vue
│   │       └── AdminOrders.vue
│   ├── stores/             # Pinia store untuk cart & orders
│   ├── router/index.js
│   └── main.js
├── public/
│   └── index.html
├── db.json                 # JSON Server database
└── package.json
```


## Cara Menjalankan

1. Pastikan Node.js & NPM telah terinstal.
2. Install dependensi:

```bash
    npm install
```

3. Jalankan JSON Server di terminal baru:

```bash
npx json-server --watch db.json --port 3000
```

4. Jalankan aplikasi Vue:

```bash
npm run dev
```


## Endpoint yang Digunakan

Data disimpan di file db.json dan diakses melalui JSON Server:
  #### 1. Games:
    a) GET /games — Mendapatkan semua data game
    b) POST /games — Menambahkan game baru
    c) PUT /games/:id — Mengedit data game
    d) DELETE /games/:id — Menghapus game

  #### 2. Orders:
    a) GET /orders — Mendapatkan semua data pesanan
    b) POST /orders — Menambahkan pesanan saat checkout
    c) DELETE /orders/:id — Menghapus pesanan

  #### 3. Contoh:
    a) GET /games
    b) POST /games
    c) PUT /games/3
    d) DELETE /games/4
    e) GET /orders
    f) POST /orders
    g) DELETE /orders/123456789

## Catatan Teknis

* Gambar game bisa berupa:

  * URL langsung
  * Atau file lokal dari `src/assets` (gunakan nama file pada properti `image`)
* JSON Server menyimpan data `games` dan `orders`
* Saat checkout, pesanan baru dikirim ke endpoint `/orders`


## Contoh Format Gambar di db.json

```json
{
  "id": "69",
  "title": "Bengkel Simulator",
  "genre": "Simulator",
  "price": 0,
  "image": "riki.jpg" // file harus disimpan di src/assets/riki.jpg
}
```