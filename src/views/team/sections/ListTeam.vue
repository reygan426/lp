<script lang="ts" setup>
import TeamCard2 from '../components/TeamCard2.vue'
import TeamCard from '../components/TeamCard.vue'
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue'
import type { TeamItem } from '@/core/types/team'

const props = defineProps<{
  team: TeamItem[];
}>();

const filteredApiTeams = computed(() => {
  return props.team.filter(member => 
    member.ot_id !== 1 && member.ot_id !== 2 && member.ot_id !== 6
  );
});

const teamMembers = computed(() => {
  return filteredApiTeams.value.map(member => {
    return {
      id: member.id,
      name: member.name,
      title: member.title,
      image: member.image,
      category: member.title.toLowerCase().includes('konselor') ? 'konselor' : 'psikolog',
      social: {
        facebook: member.fb || '',
        instagram: member.ig || '',
        tiktok: member.tt || '',
      }
    };
  });
});

const activeFilter = ref('all')
const itemsPerPage = 8
const currentPage = ref(1)
const animationKey = ref(0)
const sectionRef = ref<HTMLElement | null>(null)
const isSectionVisible = ref(false)

let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isSectionVisible.value = true
          triggerAnimation()
          observer?.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})

const filteredMembers = computed(() => {
  if (activeFilter.value === 'all') {
    return teamMembers.value
  }
  return teamMembers.value.filter(member => {
    if (activeFilter.value === 'psikolog') return member.category === 'psikolog'
    if (activeFilter.value === 'konselor') return member.category === 'konselor'
    return true
  })
})

const paginatedMembers = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredMembers.value.slice(start, end)
})

const totalPages = computed(() => {
  return Math.ceil(filteredMembers.value.length / itemsPerPage)
})

const visiblePages = computed(() => {
  const pages = []
  const maxVisible = 5
  let start = Math.max(1, currentPage.value - 2)
  let end = Math.min(totalPages.value, start + maxVisible - 1)

  if (end - start + 1 < maxVisible) {
    start = Math.max(1, end - maxVisible + 1)
  }

  for (let i = start; i <= end; i++) {
    pages.push(i)
  }

  return pages
})

function changePage(page: number) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    if (isSectionVisible.value) {
      triggerAnimation()
    }
  }
}

function changeFilter(filter: string) {
  activeFilter.value = filter
  currentPage.value = 1
  if (isSectionVisible.value) {
    triggerAnimation()
  }
}

function triggerAnimation() {
  animationKey.value++
}

watch(() => paginatedMembers.value, () => {
  if (isSectionVisible.value) {
    nextTick(() => {
      triggerAnimation()
    })
  }
}, { immediate: true })
</script>

<template>
  <div ref="sectionRef"
    class="py-[32px] px-[20px] md:py-[64px] md:px-[40px] lg:p-[120px] space-y-4 md:space-y-6 lg:space-y-8">
    <div class="flex justify-center items-center gap-2 lg:gap-4">
      <div class="w-fit p-3 lg:py-2 lg:px-5 rounded-full cursor-pointer" :class="{ 'bg-white': activeFilter === 'all' }"
        @click="changeFilter('all')">
        <a class="text-[10px] md:text-[12px] lg:text-[16px] text-primary font-sora">Semua</a>
      </div>
      <div class="w-fit p-3 lg:py-2 lg:px-5 rounded-full cursor-pointer"
        :class="{ 'bg-white': activeFilter === 'psikolog' }" @click="changeFilter('psikolog')">
        <a class="text-[10px] md:text-[12px] lg:text-[16px] text-primary font-sora">Psikolog</a>
      </div>
      <div class="w-fit p-3 lg:py-2 lg:px-5 rounded-full cursor-pointer"
        :class="{ 'bg-white': activeFilter === 'konselor' }" @click="changeFilter('konselor')">
        <a class="text-[10px] md:text-[12px] lg:text-[16px] text-primary font-sora">Konselor</a>
      </div>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-7 md:px-[70px] lg:px-[90px]"
      :key="animationKey">
      <template v-for="(member, index) in paginatedMembers" :key="member.id">
        <div class="team-card-animate" :class="{ 'animate-on-visible': isSectionVisible }"
          :style="{ 'animation-delay': `${index * 100}ms` }">
          <TeamCard2 v-if="index % 2 === 0" :name="member.name" :title="member.title" :image="member.image"
            :facebook="member.social.facebook" :tiktok="member.social.tiktok"
            :instagram="member.social.instagram" />
          <TeamCard v-else :name="member.name" :title="member.title" :image="member.image"
            :facebook="member.social.facebook" :tiktok="member.social.tiktok"
            :instagram="member.social.instagram" />
        </div>
      </template>
    </div>

    <div class="w-full flex justify-end items-end gap-2 font-sora">
      <div class="w-8 h-8 bg-[#919EAB] rounded-[4px] flex items-center justify-center cursor-pointer"
        @click="changePage(currentPage - 1)">
        <!-- icon arrow kiri -->
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>

      <template v-for="page in visiblePages" :key="page">
        <div v-if="page === currentPage"
          class="w-8 h-8 bg-white border border-primary rounded-[4px] text-center flex items-center justify-center cursor-pointer">
          <p class="text-primary text-[10px] md:text-[12px] lg:text-[14px] font-bold">{{ page }}</p>
        </div>
        <div v-else
          class="w-8 h-8 bg-white border border-black/25 rounded-[4px] text-center flex items-center justify-center cursor-pointer"
          @click="changePage(page)">
          <p class="text-black text-[10px] md:text-[12px] lg:text-[14px] font-bold">{{ page }}</p>
        </div>
      </template>

      <div v-if="visiblePages[visiblePages.length - 1] < totalPages"
        class="w-8 h-8 bg-white border border-black/25 rounded-[4px] text-center flex items-center justify-center">
        <p class="text-black text-[10px] md:text-[12px] lg:text-[14px] font-bold">...</p>
      </div>

      <div v-if="visiblePages[visiblePages.length - 1] < totalPages"
        class="w-8 h-8 bg-white border border-black/25 rounded-[4px] text-center flex items-center justify-center cursor-pointer"
        @click="changePage(totalPages)">
        <p class="text-black text-[10px] md:text-[12px] lg:text-[14px] font-bold">{{ totalPages }}</p>
      </div>

      <div class="w-8 h-8 bg-[#919EAB] rounded-[4px] flex items-center justify-center cursor-pointer"
        @click="changePage(currentPage + 1)">
        <!-- icon arrow kanan -->
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.team-card-animate {
  opacity: 0;
}

.team-card-animate.animate-on-visible {
  animation: fadeInUp 0.6s ease-out forwards;
}
</style>