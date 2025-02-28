<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import Hal1 from '../components/Hal1Component.vue'
import Hal2 from '../components/Hal2Component.vue'
import Hal3 from '../components/Hal3Component.vue'
import Hal4 from '../components/Hal4Component.vue'
import Hal5 from '../components/Hal5Component.vue'
const message = ref('Hello Vue 3 + Vite')
const router = useRouter()

const goToHome = () => {
  router.push('/')
}
</script>
<template>
  <div class="w-full min-h-screen bg-yellow-50 h-full">
    <Hal1 />
    <Hal2 />
    <Hal3 />
    <Hal4 />
    <Hal5 />
  </div>
</template>
