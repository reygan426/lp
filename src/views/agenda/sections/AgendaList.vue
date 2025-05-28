<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import AgendaCardJatiDiri from '../components/AgendaCardJatiDiri.vue'
import Button from '@/components/Button.vue'
import { useAgendaStore } from '@/stores/agenda'

const agendaStore = useAgendaStore()

onMounted(async () => {
  await agendaStore.fetchAgendas()
})

const categories = computed(() => {
  const allCategories = agendaStore.agendas.map(item => item.agendacat).filter(Boolean)
  return Array.from(new Set(allCategories)) as string[]
})

const selectedCategory = ref<string | null>(null)

const filteredAgendas = computed(() => {
  if (!selectedCategory.value) return agendaStore.agendas
  return agendaStore.agendas.filter(item => item.agendacat === selectedCategory.value)
})

const loadMore = async () => {
  if (agendaStore.pagination.currentPage < agendaStore.pagination.lastPage) {
    const nextPage = agendaStore.pagination.currentPage + 1
    await agendaStore.fetchAgendas(nextPage)
  }
}
</script>

<template>
    <div class="py-[32px] px-[20px] md:py-[64px] md:px-[40px] lg:py-[60px] lg:px-[120px]">
      <div class="text-center lg:w-full w-full px-[20px] md:px-[60px] lg:px-[120px] py-[32px] flex justify-center items-center">
        <div class="flex gap-5 justify-start">
          <Button
            @click="selectedCategory = null"
            :className="!selectedCategory ? 'bg-primary text-white' : 'text-primary'"
            :borderName="!selectedCategory ? '' : 'border border-colorPrimary'"
            padding="py-1 px-3 md:py-3 md:px-6"
            class="rounded-full text-[10px] md:text-[12px] lg:text-[14px]"
          >
            Semua
          </Button>
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
          v-for="(item, index) in filteredAgendas"
          :key="item.id"
          v-bind="{
            kategori: item.agendacat || 'Umum',
            judul: item.title,
            slug: item.slug,
            tanggal: item.start_date,
            lokasi: item.location,
            gambar: item.image,
            deskripsi: item.content
          }"
          :index="index"
        />
      </div>

      <!-- Load More Button -->
      <div v-if="agendaStore.pagination.currentPage < agendaStore.pagination.lastPage" class="mt-8 text-center">
        <Button
          @click="loadMore"
          className="bg-primary text-white"
          padding="py-3 px-6"
          class="rounded-full"
          :loading="agendaStore.loading"
        >
          Muat Lebih Banyak
        </Button>
      </div>
    </div>
</template>