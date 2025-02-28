<template>
  <div class="w-full min-h-screen bg-yellow-50 h-full">
    <!-- Guest Book Section -->
    <section class="container mx-auto px-4 py-8">
      <div class="text-center mb-8">
        <h1 class="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 font-['Times_New_Roman'] text-gray-700">Buku Tamu</h1>
        <p class="text-base sm:text-lg md:text-xl text-gray-600 font-['Times_New_Roman']">Terima kasih banyak untuk semuanya!</p>
      </div>

      <div class="max-w-2xl mx-auto space-y-4 px-4 sm:px-6">
        <!-- Guest Book Entries -->
        <div v-for="entry in guestEntries" :key="entry.timestamp"
             class="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div class="font-medium text-lg text-gray-800">{{ entry.name }}</div>
            <div class="text-sm text-gray-500">{{ formatDate(entry.timestamp) }}</div>
          </div>
          <p class="mt-3 text-gray-600">{{ entry.message }}</p>
        </div>

        <!-- Empty State -->
        <div v-if="guestEntries.length === 0" class="text-center py-8">
          <p class="text-gray-500">Belum ada ucapan yang ditampilkan</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const guestEntries = ref([])

const formatDate = (timestamp) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }
  return new Date(timestamp).toLocaleDateString('id-ID', options)
}

const fetchGuestEntries = async () => {
  try {
    const response = await fetch('/data/data.json')
    guestEntries.value = await response.json()
  } catch (error) {
    console.error('Error fetching guest entries:', error)
  }
}

// Initial fetch
onMounted(() => {
  fetchGuestEntries()

  // Auto update every 30 seconds
  setInterval(fetchGuestEntries, 30000)
})
</script>
