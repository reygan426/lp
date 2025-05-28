<script lang="ts" setup>
import { ref } from 'vue'
import TextBody from '@/components/TextBody.vue'
import AgendaDetailCard from '../components/AgendaDetailCard.vue'
import type { Post } from '@/core/types/post'

const agenda = ref({
  title: 'Seminar Inovasi Digital 2025',
  description: `<p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolorem eum recusandae fugiat possimus nemo est amet porro blanditiis. Cumque aspernatur praesentium reprehenderit dolore doloremque, quos, in nulla dolorem harum vitae dolores, id tempora quibusdam? Ullam magnam minima magni nam, officiis esse fuga totam aliquam quae doloremque temporibus expedita labore tenetur ab omnis quas nesciunt deleniti, maiores, deserunt amet voluptatem iste quia pariatur quod! Culpa, magni adipisci. Modi ea quae minus earum architecto et neque magni, dicta vero cupiditate quibusdam reiciendis ab dolore nemo, molestias vitae. Voluptates incidunt veniam perspiciatis cupiditate architecto cumque at, provident magni ducimus praesentium repellat accusantium sit, aut vitae. Unde hic esse sequi modi fugit provident? Sapiente, blanditiis. Quisquam, omnis assumenda perferendis delectus labore mollitia unde. Aperiam esse a impedit sequi doloribus! Aperiam perspiciatis quo aut vitae illo doloremque, tempora eos error corporis harum beatae minus, voluptatibus architecto, laudantium obcaecati. Eos optio quia eius cumque, illo, odio sint iusto nesciunt sunt iure voluptas repudiandae similique officiis praesentium commodi dolores minus modi. Repudiandae, recusandae culpa odit vel expedita sapiente blanditiis quis ipsam animi, porro delectus, saepe maiores laudantium maxime quas neque deleniti et? Quibusdam inventore hic suscipit facere, magnam quis necessitatibus optio ea nam velit, doloribus sint.</p>`,
  image:
    'https://images.unsplash.com/photo-1726607424599-db0c41681494?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8',
  start_date: '2025-06-15',
  location: 'Auditorium Universitas Teknologi',
  contact: '0812-3456-7890',
  event: 'Seminar Nasional',
})


const agendas = ref([
  {
    title: 'Pelatihan UI/UX untuk Pemula',
    image:
      'https://images.unsplash.com/photo-1726607424599-db0c41681494?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8',
    start_date: '2025-07-10',
    location: 'Lab Komputer A, Gedung B',
    description:
      'Pelatihan ini ditujukan bagi pemula yang ingin mendalami desain antarmuka dan pengalaman pengguna.',
  },
])

const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr)
  return isNaN(date.getTime())
    ? '-'
    : date.toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
}

const handleAgendaClick = () => {
  // console.log('Agenda clicked:', agendaItem)
}

defineProps<{
  berita?: Post[]
}>();
</script>

<template>
  <div class="py-[32px] px-[20px] md:py-[64px] md:px-[40px] lg:py-[60px] lg:px-[120px]">
    <div class="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10">
      <!-- Konten utama -->
      <div class="w-full md:w-[65%]">
        <TextBody>
          <span class="text-justify" v-html="agenda?.description"></span>
        </TextBody>
      </div>

      <!-- Sidebar -->
      <div class="w-full md:w-[35%] flex flex-col gap-6 md:gap-8 lg:gap-8">
        <!-- Agenda Terkait -->
        <div class="space-y-4 md:space-y-5 lg:space-y-6">
          <h4 class="text-lg md:text-xl lg:text-2xl font-bold">Agenda Terkait</h4>
          <div
            class="w-full h-40 md:h-[25vh] rounded-md lg:rounded-xl overflow-hidden cursor-pointer"
            @click="handleAgendaClick()"
          >
            <img
              :src="agendas?.[0]?.image || ''"
              alt="Gambar Berita"
              class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div class="space-y-4">
            <p class="text-sm md:text-base lg:text-lg font-bold">{{ agendas?.[0]?.title }}</p>
            <p class="text-xs md:text-sm lg:text-base">
              {{ formatDate(agendas?.[0]?.start_date || '') }} • {{ agendas?.[0]?.location }}
            </p>
          </div>
        </div>

        <!-- Berita Terkait -->
        <div class="space-y-4 md:space-y-5 lg:space-y-6">
          <h4 class="text-lg md:text-xl lg:text-2xl font-bold">Berita Terkait</h4>
          <AgendaDetailCard :posts="berita"/>
        </div>
      </div>
    </div>
  </div>
</template>
