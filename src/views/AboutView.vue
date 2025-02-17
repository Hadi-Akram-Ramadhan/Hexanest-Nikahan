<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import AboutComponent from '../components/AboutComponent.vue'
const message = ref('Hello Vue 3 + Vite')
const router = useRouter()

const goToHome = () => {
  router.push('/')
}
</script>

<template>
    <div class="w-full h-screen flex flex-col items-center justify-center">
      <h1 class="text-4xl font-bold">{{ message }}</h1>
      <p class="mt-4 text-lg text-gray-500">Edit <code>src/views/AboutView.vue</code> and save to test HMR updates.</p>
      <AboutComponent />
      <button type="button" @click="goToHome" class="p-2 bg-blue-500 cursor-pointer">Go to Home Page</button>
    </div>
</template>
