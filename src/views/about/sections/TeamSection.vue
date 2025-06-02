<script setup lang="ts">
import TeamCard from '@/views/about/components/TeamCard.vue';
import TitleSection from '@/components/TitleSection.vue';
import { ref, onMounted, onUnmounted } from 'vue'
import type { TeamItem } from '@/core/types/team';

defineProps<{
  team: TeamItem[];
}>();

const section1Visible = ref(false)
const section2Visible = ref(false)
const section3Visible = ref(false)

const section1Ref = ref<HTMLElement>()
const section2Ref = ref<HTMLElement>()
const section3Ref = ref<HTMLElement>()

let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target === section1Ref.value) {
          section1Visible.value = true
        } else if (entry.target === section2Ref.value) {
          section2Visible.value = true
        } else if (entry.target === section3Ref.value) {
          section3Visible.value = true
        }
      }
    })
  }, {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
  })

  setTimeout(() => {
    if (section1Ref.value) observer?.observe(section1Ref.value)
    if (section2Ref.value) observer?.observe(section2Ref.value)
    if (section3Ref.value) observer?.observe(section3Ref.value)
  }, 100)
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<template>
  <div
    class="py-[32px] px-[20px] md:py-[64px] md:px-[40px] lg:p-[120px] w-full h-full space-y-12 md:space-y-14 lg:space-y-16">
    <div ref="section1Ref"
      class="w-full lg:w-fit h-full flex flex-col justify-center items-center space-y-4 lg:space-y-6 mx-auto">
      <div class="bg-primary/10 w-fit py-2 px-5 rounded-full">
        <h6 class="text-[10px] md:text-[12px] lg:text-[16px] text-primary">Our Leader</h6>
      </div>
      <TitleSection :text="'Dewan Pembina'" />
      <div class="w-1/2 mx-auto md:w-fit">
        <div v-for="(member, _) in team.filter(item => item.ot_id === 1)" :key="member.id" class="team-card-animate" :class="{ 'animate-visible': section1Visible }" style="animation-delay: 0ms">
          <TeamCard :name="member.name" :title="member.title"
            :image="member.image" :facebook="member.fb" :tiktok="member.tt" :instagram="member.ig" />
        </div>
      </div>
    </div>

    <div ref="section2Ref"
      class="w-full lg:w-fit h-full flex flex-col justify-center items-center space-y-4 lg:space-y-6 mx-auto">
      <div class="bg-primary/10 w-fit py-2 px-5 rounded-full">
        <h6 class="text-[10px] md:text-[12px] lg:text-[16px] text-primary">Our Leader</h6>
      </div>
      <TitleSection :text="'Dewan Pakar'" />
      <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        <div v-for="(member, index) in team.filter(item => item.ot_id === 6)" :key="member.id" class="team-card-animate"
          :class="{ 'animate-visible': section2Visible }" :style="`animation-delay: ${index * 100}ms`">
          <TeamCard :name="member.name" :title="member.title" :image="member.image" :facebook="member.fb" :tiktok="member.tt" :instagram="member.ig" />
        </div>
      </div>
    </div>

    <div ref="section3Ref"
      class="w-full lg:w-fit h-full flex flex-col justify-center items-center space-y-4 lg:space-y-6 mx-auto">
      <div class="bg-primary/10 w-fit py-2 px-5 rounded-full">
        <h6 class="text-[10px] md:text-[12px] lg:text-[16px] text-primary">Our Leader</h6>
      </div>
      <TitleSection :text="'Dewan Direksi'" />
      <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        <div v-for="(member, index) in team.filter(item => item.ot_id === 2)" :key="member.id" class="team-card-animate"
          :class="{ 'animate-visible': section3Visible }" :style="`animation-delay: ${index * 100}ms`">
          <TeamCard :name="member.name" :title="member.title" :image="member.image" :facebook="member.fb" :tiktok="member.tt" :instagram="member.ig" />
        </div>
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
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.team-card-animate.animate-visible {
  animation: fadeInUp 0.6s ease-out forwards;
}
</style>