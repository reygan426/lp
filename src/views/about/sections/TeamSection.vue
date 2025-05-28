<script setup lang="ts">
import TeamCard from '@/views/about/components/TeamCard.vue';
import TitleSection from '@/components/TitleSection.vue';
import { ref, onMounted, onUnmounted } from 'vue'
import Arif from '@/assets/team/arief.jpg'
import Eti from '@/assets/team/eti.png'
import Eki from '@/assets/team/eki.jpg'
import Dini from '@/assets/team/dini.png'
import Pandith from '@/assets/team/pandith.jpg'
import Taufik from '@/assets/team/taufik.jpg'
import Endar from '@/assets/team/endar.jpg'
import Miryam from '@/assets/team/miryam.jpg'
import Arifnaldo from '@/assets/team/arfinaldo.jpg'

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
    threshold: 0.3, // Trigger when 30% of the section is visible
    rootMargin: '0px 0px -50px 0px' // Start animation slightly before fully visible
  })

  // Observe sections when they're mounted
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
    <div class="py-[32px] px-[20px] md:py-[64px] md:px-[40px] lg:p-[120px] w-full h-full space-y-12 md:space-y-14 lg:space-y-16">
        <div ref="section1Ref" class="w-full lg:w-fit h-full flex flex-col justify-center items-center space-y-4 lg:space-y-6 mx-auto">
            <div class="bg-primary/10 w-fit py-2 px-5 rounded-full">
                <h6 class="text-[10px] md:text-[12px] lg:text-[16px] text-primary">Our Leader</h6>
            </div>
            <TitleSection :text="'Dewan Pembina'" />
            <div class="w-1/2 mx-auto md:w-fit">
                <div 
                    class="team-card-animate"
                    :class="{ 'animate-visible': section1Visible }"
                    style="animation-delay: 0ms">
                    <TeamCard name="Brigjend (Purn) Dr. Arief Budiarto, DESS, Psikolog" title="Ketua Dewan Penasehat" :image="Arif" facebook="dawokd" tiktok="awmdaw" youtube="awoko" instagram="adowk" />
                </div>
            </div>
        </div>

        <div ref="section2Ref" class="w-full lg:w-fit h-full flex flex-col justify-center items-center space-y-4 lg:space-y-6 mx-auto">
            <div class="bg-primary/10 w-fit py-2 px-5 rounded-full">
                <h6 class="text-[10px] md:text-[12px] lg:text-[16px] text-primary">Our Leader</h6>
            </div>
            <TitleSection :text="'Dewan Pakar'" />
            <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                <div 
                    class="team-card-animate"
                    :class="{ 'animate-visible': section2Visible }"
                    style="animation-delay: 0ms">
                    <TeamCard name="Prof Euis Eti Rohaeti M.Pd" title="Masih belum diketahui"
                        :image="Eti" facebook="dawokd" tiktok="awmdaw" youtube="awoko" instagram="adowk" />
                </div>
                <div 
                    class="team-card-animate"
                    :class="{ 'animate-visible': section2Visible }"
                    style="animation-delay: 100ms">
                    <TeamCard name="Dr. Eki Baihaki, M.Si." title="Masih belum diketahui"
                        :image="Eki" facebook="dawokd" tiktok="awmdaw" youtube="awoko" instagram="adowk" />
                </div>
                <div 
                    class="team-card-animate"
                    :class="{ 'animate-visible': section2Visible }"
                    style="animation-delay: 200ms">
                    <TeamCard name="Dr. Dini Dewi Heniati, SH, MH." title="Masih belum diketahui"
                        :image="Dini" facebook="dawokd" tiktok="awmdaw" youtube="awoko" instagram="adowk" />
                </div>
                <div 
                    class="team-card-animate"
                    :class="{ 'animate-visible': section2Visible }"
                    style="animation-delay: 300ms">
                    <TeamCard name="Dr. dr. Pandith Aribowo, MM, FISQua, CHAE" title="Masih belum diketahui"
                        :image="Pandith" facebook="dawokd" tiktok="awmdaw" youtube="awoko" instagram="adowk" />
                </div>
            </div>
        </div>

        <div ref="section3Ref" class="w-full lg:w-fit h-full flex flex-col justify-center items-center space-y-4 lg:space-y-6 mx-auto">
            <div class="bg-primary/10 w-fit py-2 px-5 rounded-full">
                <h6 class="text-[10px] md:text-[12px] lg:text-[16px] text-primary">Our Leader</h6>
            </div>
            <TitleSection :text="'Dewan Pakar'" />
            <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                <div 
                    class="team-card-animate"
                    :class="{ 'animate-visible': section3Visible }"
                    style="animation-delay: 0ms">
                    <TeamCard name="Maulis Taufik P" title="CEO"
                        :image="Taufik" facebook="dawokd" tiktok="awmdaw" youtube="awoko" instagram="adowk" />
                </div>
                <div 
                    class="team-card-animate"
                    :class="{ 'animate-visible': section3Visible }"
                    style="animation-delay: 100ms">
                    <TeamCard name="Endar Suhendar, M.Pd." title="CTO - Education Consultant"
                        :image="Endar" facebook="dawokd" tiktok="awmdaw" youtube="awoko" instagram="adowk" />
                </div>
                <div 
                    class="team-card-animate"
                    :class="{ 'animate-visible': section3Visible }"
                    style="animation-delay: 200ms">
                    <TeamCard name="Miryam Ariadne Sigarlaki, M.Psi., Psikolog" title="Chief of Psychology"
                        :image="Miryam" facebook="dawokd" tiktok="awmdaw" youtube="awoko" instagram="adowk" />
                </div>
                <div 
                    class="team-card-animate"
                    :class="{ 'animate-visible': section3Visible }"
                    style="animation-delay: 300ms">
                    <TeamCard name="Arfinaldo" title="CMO"
                        :image="Arifnaldo" facebook="dawokd" tiktok="awmdaw" youtube="awoko" instagram="adowk" />
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