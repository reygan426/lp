<script setup lang="ts">
import ButtonSection from '@/components/ButtonSection.vue';
import { useDateFormat } from '@/composables/useDateFormat';
import { computed } from 'vue';
import router from '@/router';

const { formatDate } = useDateFormat()
const baseUrl = import.meta.env.VITE_APP_IMG_URL;

const props = defineProps({
  kategori: String,
  judul: String,
  slug: String,
  tanggal: String,
  lokasi: String,
  gambar: String,
  deskripsi: String,
  index: Number
})

const navigateToDetail = () => {
  if (props.slug) {
    router.push({ name: 'Agenda Detail', params: { slug: props.slug } });
  }
};

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return 'https://placehold.co/600x400';
  return `${baseUrl}/agendas/${imagePath}`;
};

const formattedDate = computed(() => formatDate(props.tanggal || ''))
</script>

<template>
    <div
    @click="navigateToDetail"
    class="agenda-card bg-[#E6EFF7] border border-[#FAFAFA80] w-full h-full md:h-32 lg:h-48 flex flex-col md:flex-row p-3 md:p-4 gap-4 lg:gap-6 rounded-[8px] md:rounded-[16px] lg:rounded-[24px] transition-all duration-500 cursor-pointer shadow-gray-300/5 hover:shadow-black/5 shadow-xl hover:shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)]">
    <div
      class="w-full md:w-[30%] lg:w-[40%] xl:w-[30%] h-40 md:h-full rounded-[4px] md:rounded-l-[8px] lg:rounded-l-[16px] overflow-hidden">
      <img :src="getImageUrl(gambar || '')" alt="Gambar Berita" class="w-full h-full object-cover transition-transform duration-500" />
    </div>

    <div
      class="w-full flex flex-col md:flex-row md:justify-between md:items-center md:gap-4 lg:gap-5 md:w-full space-y-4 lg:space-y-4 p-0 md:p-3 lg:p-6">
      <div class="w-full space-y-4 lg:space-y-4">
        <div class="space-y-2">
          <p class="text-sm md:text-base lg:text-lg font-bold">{{ judul }}</p>
          <p class="text-xs md:text-xs lg:text-base">{{ formattedDate }} • {{ lokasi }}</p>
        </div>
        <TextBody class="line-clamp-2"><span v-html="deskripsi"></span></TextBody>
      </div>
      <div class="w-[18%]">
        <ButtonSection 
          @click.stop="navigateToDetail"
          class="w-full"
        >
          Register
        </ButtonSection>
      </div>
    </div>
  </div>
</template>