<template>
  <div class="w-full h-screen flex flex-col items-center justify-center bg-yellow-50">
    <div class="rounded-full overflow-hidden border-8 border-white">
      <img src="/src/assets/foto/main_img.jpg" alt="Couple" class="w-96 h-96 object-cover" />
    </div>
    <p class="mt-4 text-lg text-gray-700">hari yang indah di bulan april</p>
    <p class="text-lg text-gray-700">Kami berdua akan menikah</p>
    <h1 class="text-4xl font-bold mt-2">Hafiz ♥ Gea</h1>
    <p class="mt-2 text-lg text-gray-700">Sabtu, 25 April 2020, pukul 17.00</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Welcome to Home Page'
    }
  },
  methods: {
    goToAbout() {
      this.$router.push('/about');
    }
  }
}
</script>
