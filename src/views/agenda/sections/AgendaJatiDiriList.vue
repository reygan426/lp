<script setup lang="ts">
import { ref, computed } from 'vue'
import AgendaCardJatiDiri from '../components/AgendaCardJatiDiri.vue'
import Button from '@/components/Button.vue'

const agenda = [
  {
    kategori: 'Teknologi',
    judul: 'Pelatihan CCTV',
    slug: 'pelatihan-cctv',
    tanggal: '2025-07-30',
    lokasi: 'Lokasi A',
    gambar:
      'https://plus.unsplash.com/premium_photo-1665990294269-f1d6c35ab9d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHNpY29sb2d5fGVufDB8fDB8fHww',
    deskripsi:
      '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos vitae, veniam consequatur, soluta praesentium laudantium fuga non ullam tempore animi velit, incidunt at aliquid architecto quisquam aspernatur provident minus tenetur labore necessitatibus dignissimos quae eligendi aut! Voluptatum recusandae explicabo aliquid dolore vel veniam quam rem! Nulla consequatur, quasi necessitatibus beatae repellat delectus? Consequatur minus autem nihil maxime rerum quia a voluptas quidem temporibus reiciendis, tempora, praesentium exercitationem nesciunt impedit dolorem consequuntur aut consectetur! Facere voluptas ipsam, dolore temporibus molestias eum, quis',
  },
]

const categories = computed(() => {
  return Array.from(new Set(agenda.map((item) => item.kategori)))
})

const selectedCategory = ref(categories.value[0] || '')
</script>

<template>
    <div class="py-[32px] px-[20px] md:py-[64px] md:px-[40px] lg:py-[60px] lg:px-[120px]">
      <div class="text-center lg:w-full w-full px-[20px] md:px-[60px] lg:px-[120px] py-[32px] flex justify-center items-center">
        <div class="flex gap-5 justify-start">
          <Button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            :className="selectedCategory === category ? 'bg-primary text-white' : 'text-primary'"
            :borderName="selectedCategory === category ? '' : 'border border-colorPrimary'"
            padding="py-1 px-3 md:py-3 md:px-6"
            class="rounded-full text-[10px] md:text-[12px] lg:text-[14px]"
          >
            {{ category }}
          </Button>
        </div>
      </div>

      <div class="space-y-4 md:space-y-8">
        <AgendaCardJatiDiri
          v-for="(item, index) in agenda"
          :key="item.slug"
          v-bind="item"
          :index="index"
        />
      </div>
    </div>
</template>
