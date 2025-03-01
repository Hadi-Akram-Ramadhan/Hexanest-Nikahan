<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import Hal1 from '../components/Hal1Component.vue'
import Hal2 from '../components/Hal2Component.vue'
import Hal3 from '../components/Hal3Component.vue'
import Hal4 from '../components/Hal4Component.vue'
import Hal5 from '../components/Hal5Component.vue'
import foot from '../components/FooterComponent.vue'


const message = ref('Hello Vue 3 + Vite')
const router = useRouter()

const goToHome = () => {
  router.push('/')
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.scroll-animate').forEach((el) => {
    observer.observe(el)
  })
})
</script>

<template>
  <div class="w-full min-h-screen bg-yellow-50 h-full">
    <div class="scroll-animate"><Hal1 /></div>
    <div class="scroll-animate"><Hal2 /></div>
    <div class="scroll-animate"><Hal3 /></div>
    <div class="scroll-animate"><Hal4 /></div>
    <div class="scroll-animate"><Hal5 /></div>
    <foot />
  </div>
</template>

<style scoped>
.scroll-animate {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform, opacity;
}

.scroll-animate.show {
  opacity: 1;
  transform: translateY(0);
}
</style>
