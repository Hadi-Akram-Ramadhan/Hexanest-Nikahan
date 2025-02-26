<template>
  <div class="w-full min-h-screen flex flex-col items-center justify-center bg-yellow-50">
    <!-- Section 1: Main Photo -->
    <section class="mb-12 flex flex-col items-center">
      <div class="rounded-full overflow-hidden border-8 border-white">
        <img src="/src/assets/foto/main_img.jpg" alt="Couple" class="w-[500px] h-[500px] object-cover" />
      </div>
      <p class="mt-4 text-lg text-gray-700 text-center">hari yang indah di bulan april</p>
      <p class="text-lg text-gray-700 text-center">Kami berdua akan menikah</p>
      <h1 class="text-4xl font-bold mt-2 text-center">Hadi ♥ Marin</h1>
      <p class="mt-2 text-lg text-gray-700 text-center">Sabtu, 25 April 2020, pukul 17.00</p>
    </section>

    <!-- Section 2: Gallery -->
    <section class="w-full max-w-4xl">
      <div class="grid grid-cols-2 gap-4">
        <img src="/src/assets/foto/main_img.jpg" alt="Photo 1" class="w-full h-64 object-cover" />
        <img src="/src/assets/foto/main_img.jpg" alt="Photo 2" class="w-full h-64 object-cover" />
        <img src="/src/assets/foto/main_img.jpg" alt="Photo 3" class="w-full h-64 object-cover" />
        <img src="/src/assets/foto/main_img.jpg" alt="Photo 4" class="w-full h-64 object-cover" />
      </div>
    </section>
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
