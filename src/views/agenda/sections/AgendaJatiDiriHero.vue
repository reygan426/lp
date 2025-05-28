<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import TextBody from '@/components/TextBody.vue'
// import { useDateFormat } from '@/composables/useDateFormat'
import TitleSection from '@/components/TitleSection.vue'
import TextSection from '@/components/TextSection.vue'
import ButtonSection from '@/components/ButtonSection.vue'

const router = useRouter()
// const { formatDate } = useDateFormat()

// const baseUrl = import.meta.env.VITE_APP_IMG_URL
// const getImageUrl = (imagePath: string | null) => {
//   if (!imagePath) return 'https://placehold.co/600x400'
//   return `${baseUrl}/${imagePath}`
// }

const navigateToDetail = (slug: string) => {
  if (!slug) return
  router.push(`/agenda/${slug}`)
}

// Dummy data agenda lengkap
const agenda = ref([
  {
    slug: 'seminar-future-tech',
    title: 'Seminar Future Tech & AI',
    location: 'Aula Kampus Utama Universitas Teknologi Bandung',
    description: `<p>Ikuti seminar <strong>Future Tech & AI</strong> yang menghadirkan para pakar teknologi dari berbagai industri. Pelajari implementasi AI, IoT, dan teknologi terbaru untuk masa depan yang lebih baik.</p><ul><li>Topik: Artificial Intelligence, Big Data, IoT</li><li>Pembicara: Dr. Ir. Budi Santosa (AI Expert), Prof. Lina Mulyani (Big Data Analyst)</li><li>Live Demo AI Tools</li></ul>`,
    image:
      'https://images.unsplash.com/photo-1638443436690-db587cc66f12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHNpY29sb2d5fGVufDB8fDB8fHww',
    register_link: 'https://event.univ-tech.id/future-tech-ai/register',
    end_date: '2025-08-12T09:00:00Z',
  },
])
</script>

<template>
  <div class="py-[32px] px-[20px] md:py-[64px] md:px-[40px] lg:py-[60px] lg:px-[120px]">
    <div class="space-y-2 mb-4 md:mb-5 lg:mb-6">
      <TitleSection :text="'Agenda'"></TitleSection>
      <TextSection>Dapatkan informasi lebih lanjut tentang acara kami.</TextSection>
    </div>
    <div class="flex flex-col md:flex-row gap-6">
      <div
        class="w-full md:w-1/2 h-[225px] md:h-[320px] lg:h-[420px] relative overflow-hidden rounded-[16px] md:rounded-[24px] lg:rounded-[32px]"
        @click="navigateToDetail(agenda[0]?.slug || '')">
        <img :src="agenda[0]?.image" :alt="agenda[0]?.title || 'Gambar acara'"
          class="w-full h-full object-cover transition-all duration-500 ease-in-out hover:scale-105" />
        <!-- <div v-if="agenda[0]?.end_date"
          class="absolute top-4 left-4 rounded-[4px] md:rounded-[8px] lg:rounded-[16px] bg-white py-3 px-6 text-center">
          <p class="text-xs lg:text-sm">{{ formatDate(agenda[0]?.end_date).dayName }}</p>
          <p class="text-2xl lg:text-[32px] font-bold">{{ formatDate(agenda[0]?.end_date).day }}</p>
          <p class="text-xs lg:text-sm">
            {{ formatDate(agenda[0]?.end_date).month }} {{ formatDate(agenda[0]?.end_date).year }}
          </p>
        </div> -->
      </div>

      <div class="w-full md:w-1/2 flex flex-col md:justify-start md:items-start gap-4 md:gap-5 lg:gap-6 cursor-pointer"
        @click="navigateToDetail(agenda[0]?.slug || '')">
        <div class=" bg-primary/10 w-fit py-2 px-5 rounded-full">
          <h6 class="text-[10px] md:text-[12px] lg:text-[16px] text-primary">About Us</h6>
        </div>

        <div class="space-y-2">
          <div>
            <h3 class="text-[18px] md:text-[24px] lg:text-[32px] font-bold font-sora">
              {{ agenda[0]?.title }}
            </h3>
            <TextBody>{{ agenda[0]?.location }}</TextBody>
          </div>

          <TextBody>
            <span class="line-clamp-4" v-html="agenda[0]?.description"></span>
          </TextBody>
        </div>

        <ButtonSection>Register</ButtonSection>
      </div>
    </div>
  </div>
</template>
