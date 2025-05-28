<script setup lang="ts">
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import NavbarMobile from '@/components/NavbarMobile.vue';
import CTASection from '@/components/sections/CTASection.vue';
import { onMounted } from 'vue';

defineProps({
  position: {
    type: String,
  },
  whiteSectionVisible: {
    type: Boolean
  }
});

onMounted(async () => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <div class="bg-[#F0F7FD] relative h-screen">
    <Navbar :position="position" :white-section-visible="whiteSectionVisible" />
    <div class="lg:hidden fixed bottom-0 z-[100]">
      <NavbarMobile />
    </div>
    <Transition name="fade-up" appear>
      <div class="bg-[#F0F7FD]">
        <slot></slot>
      </div>
    </Transition>
    <CTASection />
    <Footer />
  </div>
</template>

<style scoped>
.fade-up-enter-active,
.fade-up-leave-active,
.fade-up-appear-active {
  transition:
    opacity 1s ease-out,
    transform 1s ease-out;
}

.fade-up-enter-from,
.fade-up-leave-to,
.fade-up-appear-from {
  opacity: 0;
  transform: translateY(20px);
}
</style>