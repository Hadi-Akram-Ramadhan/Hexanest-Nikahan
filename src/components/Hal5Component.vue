<template>
  <div class="w-full min-h-screen bg-yellow-50 h-full">
    <!-- Form Section -->
    <section class="container mx-auto py-12">
      <div class="text-center mb-8">
        <h2 class="text-[24px] md:text-4xl font-semibold mb-2 font-['Times_New_Roman'] text-gray-700">Bisakah Kamu meninggalkan Pesan untuk Kami?</h2>
        <p class="text-gray-600 font-['Times_New_Roman']">Kami Akan Baca Semuanya</p>
      </div>

      <div class="max-w-2xl mx-auto space-y-4">
        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <input
            v-model="formData.name"
            type="text"
            placeholder="Siapa kamu?"
            class="w-full p-3 mb-4 border border-gray-200 rounded-lg focus:outline-none focus:border-yellow-400"
          >
          <textarea
            v-model="formData.message"
            placeholder="Pesan Anda?"
            rows="4"
            class="w-full p-3 mb-4 border border-gray-200 rounded-lg focus:outline-none focus:border-yellow-400"
          ></textarea>
          <button
            @click="submitForm"
            class="w-full py-3 bg-yellow-400 text-gray-700 rounded-lg hover:bg-yellow-500 transition-colors"
          >
            {{ isSubmitting ? 'Mengirim...' : 'Kirim' }}
          </button>
        </div>
      </div>

      <div class="text-center mt-8">
        <h3 class="text-[24px] md:text-4xl font-semibold mb-2 font-['Times_New_Roman'] text-gray-700">Terima Kasih</h3>
        <p class="text-gray-600 font-['Times_New_Roman']">Hafiz ❤ Gea</p>
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
      // Reset form
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
