<script setup lang="ts">
import { ref } from 'vue'
import TitleSection from '@/components/TitleSection.vue'
import TextSection from '@/components/TextSection.vue'
import AgendaCardJatiDiri from './components/AgendaCardJatiDiri.vue'
const formatDate = (tanggal: string) => {
  const d = new Date(tanggal)
  return {
    dayName: d.toLocaleDateString('id-ID', { weekday: 'long' }),
    day: d.getDate(),
    month: d.toLocaleDateString('id-ID', { month: 'long' }),
    year: d.getFullYear(),
  }
}

const agendaDummy = ref([
  {
    title: 'Workshop Desain Grafis untuk Pemula',
    location: 'Ruang Multimedia, Kampus A',
    image:
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&q=80&auto=format&fit=crop',
    description:
      '<p>Pelajari dasar-dasar desain grafis menggunakan aplikasi populer seperti Photoshop dan Illustrator.</p>',
    date: formatDate('2025-06-20'),
  },
  {
    title: 'Pelatihan Pembuatan CV Profesional',
    location: 'Aula Serbaguna Lt. 2',
    image:
      'https://images.unsplash.com/photo-1522199710521-72d69614c702?w=800&q=80&auto=format&fit=crops',
    description:
      '<p>Ikuti pelatihan intensif membuat CV menarik dan profesional untuk dunia kerja modern.</p>',
    date: formatDate('2025-06-25'),
  },
  {
    title: 'Lomba Video Edukasi Digital',
    location: 'Online',
    image:
      'https://images.unsplash.com/photo-1522199710521-72d69614c702?w=800&q=80&auto=format&fit=crop',
    description:
      '<p>Tunjukkan kreativitasmu dengan membuat video edukasi digital berdurasi maksimal 3 menit.</p>',
    date: formatDate('2025-07-01'),
  },
])
</script>
<template>
  <SectionLayout>
    <div
      class="w-full px-[20px] py-[32px] md:px-[60px] md:py-[60px] lg:px-[120px] lg:py-[60px] space-y-12 md:space-y-16 lg:space-y-20"
    >
      <div class="text-center space-y-1">
        <TitleSection :text="'Agenda'"></TitleSection>
        <TextSection>Dapatkan informasi lebih lanjut tentang acara kami..</TextSection>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        <AgendaCardJatiDiri v-for="(agenda) in agendaDummy" :key="agenda.title" v-bind="agenda" />
      </div>
    </div>
  </SectionLayout>
</template>
