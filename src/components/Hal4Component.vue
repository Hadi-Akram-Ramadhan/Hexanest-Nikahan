<template>
  <div class="w-full min-h-screen bg-yellow-50 h-full">
    <!-- Guest Book Section -->
    <section class="container mx-auto">
      <div class="text-center mb-8">
        <h1 class="text-[24px] md:text-4xl font-semibold mb-2 font-['Times_New_Roman'] text-gray-700">Buku Tamu</h1>
        <p class="text-gray-600 font-['Times_New_Roman']">Terima kasih banyak untuk semuanya!</p>
      </div>

      <div class="max-w-2xl mx-auto space-y-4">
        <!-- Guest Book Entries -->
        <div v-for="entry in guestEntries" :key="entry.timestamp" class="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <div class="flex items-center justify-between">
            <div class="font-medium">{{ entry.name }}</div>
            <div class="text-sm text-gray-500">{{ formatDate(entry.timestamp) }}</div>
          </div>
          <p class="mt-2">{{ entry.message }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const guestEntries = ref([])

const formatDate = (timestamp) => {
  return new Date(timestamp).toLocaleString()
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
