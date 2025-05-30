<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import TextBody from '@/components/TextBody.vue'
import ButtonSection from '@/components/ButtonSection.vue'

// Dummy Props / Data
const gambar = ref('https://plus.unsplash.com/premium_photo-1665990294269-f1d6c35ab9d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHNpY29sb2d5fGVufDB8fDB8fHww')
const judul = ref('Workshop UI/UX Design untuk Pemula')
const tanggal = ref('24 Mei 2025')
const lokasi = ref('Ruang Multimedia, Gedung B')
const deskripsi = ref(
  `<p>Ikuti workshop intensif tentang desain UI/UX untuk pemula. Pelajari dasar-dasar desain antarmuka, user research, dan praktik terbaik dalam pembuatan prototipe.</p>`,
)
const slug = ref('workshop-uiux-2025')
const index = ref(1) // untuk delay animasi kelas

// Routing
const router = useRouter()
const navigateToDetail = (slugValue: string) => {
  if (!slugValue) return
  router.push(`/agenda/${slugValue}`)
}

// Optional: animasi masuk jika pakai observer (bisa disesuaikan)
const isVisible = ref(true)
</script>
<template>
  <div
    class="agenda-card bg-[#E6EFF7] border border-[#FAFAFA80] w-full h-full md:h-32 lg:h-48 flex flex-col md:flex-row p-3 md:p-4 gap-4 lg:gap-6 rounded-[8px] md:rounded-[16px] lg:rounded-[24px] transition-all duration-500 cursor-pointer shadow-gray-300/5 hover:shadow-black/5 shadow-xl hover:shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)]"
    :class="[isVisible ? 'card-visible' : 'card-hidden', `delay-${(index || 0) % 9}`]"
    @click="navigateToDetail(slug || '')">
    <div
      class="w-full md:w-[30%] lg:w-[40%] xl:w-[30%] h-40 md:h-full rounded-[4px] md:rounded-l-[8px] lg:rounded-l-[16px] overflow-hidden">
      <img :src="gambar" alt="Gambar Berita" class="w-full h-full object-cover transition-transform duration-500" />
    </div>

    <div
      class="w-full flex flex-col md:flex-row md:justify-between md:items-center md:gap-4 lg:gap-5 md:w-full space-y-4 lg:space-y-4 p-0 md:p-3 lg:p-6">
      <div class="w-full space-y-4 lg:space-y-4">
        <div class="space-y-2">
          <p class="text-sm md:text-base lg:text-lg font-bold">{{ judul }}</p>
          <p class="text-xs md:text-xs lg:text-base">{{ tanggal }} • {{ lokasi }}</p>
        </div>
        <TextBody class="line-clamp-2"><span v-html="deskripsi"></span></TextBody>
      </div>
      <ButtonSection>Register</ButtonSection>
    </div>
  </div>
</template>
