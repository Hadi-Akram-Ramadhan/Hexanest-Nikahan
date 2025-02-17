<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import HomeComponent from '../components/HomeComponent.vue'
const message = ref('Hello Vue 3 + Vite')
const router = useRouter()

const goToAbout = () => {
  router.push('/about')
}
</script>

<template>
    <div class="w-full h-screen flex flex-col items-center justify-center">
      <h1 class="text-4xl font-bold">{{ message }}</h1>
      <p class="mt-4 text-lg pm run text-gray-500">Edit <code>src/views/HomeView.vue</code> and save to test HMR updates.</p>
      <HomeComponent />
      <button type="button" @click="goToAbout" class="p-2 bg-red-500 cursor-pointer">Go to About Page</button>
    </div>
</template>
