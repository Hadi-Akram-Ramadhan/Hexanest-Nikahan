<template>
  <div class="w-full min-h-screen bg-yellow-50 h-full">
    <!-- Form Section -->
    <section class="container mx-auto px-4 py-8 md:py-12">
      <div class="text-center mb-8">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 font-['Times_New_Roman'] text-gray-700">Bisakah Kamu meninggalkan Pesan untuk Kami?</h2>
        <p class="text-base sm:text-lg md:text-xl text-gray-600 font-['Times_New_Roman']">Kami Akan Baca Semuanya</p>
      </div>

      <div class="max-w-2xl mx-auto space-y-4 px-4 sm:px-6">
        <div class="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100">
          <form @submit.prevent="submitForm" class="space-y-4">
            <div>
              <input
                v-model="formData.name"
                type="text"
                placeholder="Siapa kamu?"
                class="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all"
                :disabled="isSubmitting"
              >
            </div>
            <div>
              <textarea
                v-model="formData.message"
                placeholder="Pesan Anda?"
                rows="4"
                class="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition-all resize-none"
                :disabled="isSubmitting"
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 active:bg-yellow-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium text-lg"
              :disabled="isSubmitting || !formData.name || !formData.message"
            >
              <span v-if="isSubmitting" class="flex items-center justify-center gap-2">
                <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Mengirim...
              </span>
              <span v-else>Kirim Pesan</span>
            </button>
          </form>
        </div>
      </div>

      <div class="text-center mt-12">
        <h3 class="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 font-['Times_New_Roman'] text-gray-700">Terima Kasih</h3>
        <p class="text-base sm:text-lg md:text-xl text-gray-600 font-['Times_New_Roman']">Hafiz ❤ Gea</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  message: '',
  timestamp: ''
})

const isSubmitting = ref(false)

const submitForm = async () => {
  if (!formData.value.name || !formData.value.message) {
    alert('Mohon isi semua field ya!')
    return
  }

  try {
    isSubmitting.value = true
    formData.value.timestamp = new Date().toISOString()

    const response = await fetch('http://localhost:3000/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData.value)
    })

    const result = await response.json()

    if (result.success) {
      formData.value = {
        name: '',
        message: '',
        timestamp: ''
      }
      alert('Makasih ya udah ninggalin pesan! ❤')
    } else {
      throw new Error('Failed to save message')
    }
  } catch (error) {
    console.error('Error:', error)
    alert('Ups, ada error nih. Coba lagi ya!')
  } finally {
    isSubmitting.value = false
  }
}
</script>
