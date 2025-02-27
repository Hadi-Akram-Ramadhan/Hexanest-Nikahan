<template>
  <main class="w-full min-h-screen bg-yellow-50 h-full">
    <!-- Hero Section -->
    <section class="container mx-auto px-4 h-screen flex items-center justify-center">
      <div class="flex flex-col items-center">
        <div class="rounded-full overflow-hidden border-8 border-white shadow-lg mb-8">
          <img
            src="/src/assets/foto/main_img.jpg"
            alt="Couple"
            class="w-[608x] h-[608px] md:w-[608px] md:h-[608px] object-cover"
          />
        </div>

        <div class="text-center">
          <p class="text-[16px] text-gray-700">hari yang indah di bulan april</p>
          <p class="text-[16px] text-gray-700 mb-4">Kami berdua akan menikah</p>
          <h1 class="text-[24px] md:text-5xl font-bold mb-6">Hadooyy ♥ Hutao</h1>
          <p class="text-[14px] text-gray-700">Sabtu, 25 April 2020, pukul 17.00</p>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="container mx-auto px-4 pb-16 bg-yellow-50">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <img src="/src/assets/foto/main_img.jpg" alt="Photo 1" class="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow" />
        <img src="/src/assets/foto/main_img.jpg" alt="Photo 2" class="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow" />
        <img src="/src/assets/foto/main_img.jpg" alt="Photo 3" class="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow" />
        <img src="/src/assets/foto/main_img.jpg" alt="Photo 4" class="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow" />
        <img src="/src/assets/foto/main_img.jpg" alt="Photo 5" class="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow" />
        <img src="/src/assets/foto/main_img.jpg" alt="Photo 6" class="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow" />
        <img src="/src/assets/foto/main_img.jpg" alt="Photo 7" class="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow" />
        <img src="/src/assets/foto/main_img.jpg" alt="Photo 8" class="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow" />
        <img src="/src/assets/foto/main_img.jpg" alt="Photo 9" class="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow" />
        <img src="/src/assets/foto/main_img.jpg" alt="Photo 10" class="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow" />

      </div>
    </section>
  </main>
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

<style>
html,
body {
  height: 100%;
}

#app {
  min-height: 100vh;
  height: 100%;
}
</style>
