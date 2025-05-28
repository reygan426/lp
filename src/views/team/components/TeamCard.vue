<script setup lang="ts">
import FacebookIcon from '@/assets/icon/fb.png';
import InstagramIcon from '@/assets/icon/instagram.png';
import TiktokIcon from '@/assets/icon/tik-tok.png';
import YoutubeIcon from '@/assets/icon/youtube.png';
import Arrowr from '@/assets/icon/share.png'
import { ref } from 'vue';
import TextBody from '@/components/TextBody.vue';

defineProps<{
  name?: string;
  title?: string;
  image?: string;
  facebook?: string;
  instagram?: string;
  youtube?: string;
  tiktok?: string;
}>();

const isHovered = ref(false);
</script>

<template>
  <div class="space-y-4 lg:space-y-6 w-full md:w-full h-fit">
    <div class="w-full h-full relative group" @mouseenter="isHovered = true"
      @mouseleave="isHovered = false">
      <div class="w-full h-[200px] md:h-[320px] dosen3-container">
        <img :src="image || 'https://via.placeholder.com/300'" :alt="name || 'Dosen'"
          class="w-full h-full object-cover object-top group-hover:scale-101 transition duration-500 dosen3-box rounded-[16px] md:rounded-[24px] lg:rounded-[32px]">

        <svg :style="{ visibility: 'hidden', position: 'absolute' }" width="0" height="0"
          xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                result="goo" />
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
          </defs>
        </svg>
      </div>

      <!-- Sosmed dosen3 -->
      <div class="absolute bottom-14 right-2 flex flex-col gap-1 md:gap-2 transition-all duration-500"
        :class="isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'"
        v-if="facebook || instagram || youtube || tiktok">
        <a v-if="facebook" :href="facebook" target="_blank"
          class="w-8 h-8 lg:w-10 lg:h-10 bg-white hover:bg-primary group p-2 rounded-full transition-all duration-500"
          :class="isHovered ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'" style="transition-delay: 0.4s;">
          <img :src="FacebookIcon" alt="Facebook" class="w-full h-full object-contain">
        </a>
        <a v-if="instagram" :href="instagram" target="_blank"
          class="w-8 h-8 lg:w-10 lg:h-10 bg-white hover:bg-primary group p-2 rounded-full transition-all duration-500"
          :class="isHovered ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'" style="transition-delay: 0.3s;">
          <img :src="InstagramIcon" alt="Instagram" class="w-full h-full object-contain">
        </a>
        <a v-if="youtube" :href="youtube" target="_blank"
          class="w-8 h-8 lg:w-10 lg:h-10 bg-white hover:bg-primary group p-2 rounded-full transition-all duration-500"
          :class="isHovered ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'" style="transition-delay: 0.2s;">
          <img :src="YoutubeIcon" alt="YouTube" class="w-full h-full object-contain">
        </a>
        <a v-if="tiktok" :href="tiktok" target="_blank"
          class="w-8 h-8 lg:w-10 lg:h-10 bg-white hover:bg-primary group p-2 rounded-full transition-all duration-500"
          :class="isHovered ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'" style="transition-delay: 0.1s;">
          <img :src="TiktokIcon" alt="TikTok" class="w-full h-full object-contain">
        </a>
      </div>

      <div class="absolute bottom-0 right-0 p-4 bg-[#E6EFF7] group-hover:bg-primary border-2 border-white group rounded-full transition duration-500"
        @mouseenter="isHovered = true" @mouseleave="isHovered = false">
        <img :src="Arrowr" alt="" class="w-4 h-4 lg:w-6 lg:h-6 group-hover:filter group-hover:brightness-0 group-hover:invert">
      </div>
    </div>
    <div class="font-sora space-y-2 lg:space-y-4">
      <TextBody>{{ name }}</TextBody>
      <div class="flex justify-between items-center gap-2">
        <p class="w-full text-[8px] md:text-[10px] lg:tetx-[12px] text-[#777777]">{{ title }}</p>
        <div class="w-1/2 h-[1px] bg-primary flex justify-end items-center"><div class="w-1 h-1 rounded-full bg-primary"></div></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dosen3-container {
    filter: url("#goo") drop-shadow(0px -2px 0px transparent)
}

.dosen3-box {
  clip-path: polygon(80% 100%, 80% 80%, 100% 80%, 100% 0%, 0% 0%, 0% 100%);
}

@media (min-width: 320px) {
  .dosen3-box {
    clip-path: polygon(60% 100%, 60% 66%, 100% 66%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 360px) {
  .dosen3-box {
    clip-path: polygon(60% 100%, 60% 66%, 100% 66%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 440px) {
  .dosen3-box {
    clip-path: polygon(60% 100%, 60% 66%, 100% 66%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 460px) {
  .dosen3-box {
    clip-path: polygon(60% 100%, 60% 66%, 100% 66%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 560px) {
  .dosen3-box {
    clip-path: polygon(60% 100%, 60% 66%, 100% 66%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 680px) {
  .dosen3-box {
    clip-path: polygon(60% 100%, 60% 66%, 100% 66%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 768px) {
    .dosen3-box {
        clip-path: polygon(72% 100%, 72% 76%, 100% 76%, 100% 0%, 0% 0%, 0% 100%);
    }
}

@media (min-width: 868px) {
    .dosen3-box {
        clip-path: polygon(76% 100%, 76% 76%, 100% 76%, 100% 0%, 0% 0%, 0% 100%);
    }
}

@media (min-width: 968px) {
    .dosen3-box {
        clip-path: polygon(78% 100%, 78% 76%, 100% 76%, 100% 0%, 0% 0%, 0% 100%);
    }
}

@media (min-width: 1024px) {
    .dosen3-box {
        clip-path: polygon(54% 100%, 54% 76%, 100% 76%, 100% 0%, 0% 0%, 0% 100%);
    }
}

@media (min-width: 1124px) {
    .dosen3-box {
        clip-path: polygon(54% 100%, 54% 76%, 100% 76%, 100% 0%, 0% 0%, 0% 100%);
    }
}

@media (min-width: 1224px) {
    .dosen3-box {
        clip-path: polygon(66% 100%, 66% 76%, 100% 76%, 100% 0%, 0% 0%, 0% 100%);
    }
}

@media (min-width: 1324px) {
    .dosen3-box {
        clip-path: polygon(66% 100%, 66% 76%, 100% 76%, 100% 0%, 0% 0%, 0% 100%);
    }
}

@media (min-width: 1400px) {
    .dosen3-box {
        clip-path: polygon(68% 100%, 68% 76%, 100% 76%, 100% 0%, 0% 0%, 0% 100%);
    }
}

@media (min-width: 1500px) {
    .dosen3-box {
        clip-path: polygon(70% 100%, 70% 76%, 100% 76%, 100% 0%, 0% 0%, 0% 100%);
    }
}

@media (min-width: 1600px) {
    .dosen3-box {
        clip-path: polygon(72% 100%, 72% 76%, 100% 76%, 100% 0%, 0% 0%, 0% 100%);
    }
}

@media (min-width: 1700px) {
    .dosen3-box {
        clip-path: polygon(74% 100%, 74% 76%, 100% 76%, 100% 0%, 0% 0%, 0% 100%);
    }
}
</style>
