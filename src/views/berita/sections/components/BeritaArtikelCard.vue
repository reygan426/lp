<script lang="ts" setup>
import Arrow from "@/assets/icon/arrow.svg"
import TextBody from "@/components/TextBody.vue";
import router from "@/router";

const baseUrl = import.meta.env.VITE_APP_IMG_URL;
const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return '';
  return `${baseUrl}/posts/${imagePath}`;
};

const props = defineProps({
  title: {
    type: String,
  },
  slug: {
    type: String,
  },
  date: {
    type: String,
  },
  description: {
    type: String,
  },
  author: {
    type: String,
  },
  image: {
    type: String,
  }
});

const goToDetail = () => {
  router.push({
    name: 'Berita Detail',
    params: { slug: props.slug }
  });
};
</script>

<template>
  <div
    class="p-4 rounded-[8px] md:rounded-[16px] lg:rounded-[24px] bg-white group hover:-translate-y-3 transition duration-500 cursor-pointer" @click="goToDetail">
    <div class="w-full h-[160px] md:h-[200px] lg:h-[240px] relative mb-4 md:mb-5 lg:mb-6">
      <div class="absolute top-4 left-4 z-10 flex gap-4 items-center">
        <div class="py-1 px-3 bg-white/25 rounded-full">
          <p class="text-[8px] md:text-[10px] lg:text-[12px] text-white">Artikel</p>
        </div>
        <p class="text-[10px] md:text-[12px] text-white">5 Menit Baca</p>
      </div>
      <div class="w-full h-full article-container">
        <img :src="getImageUrl(image || '')" alt=""
          class="h-full w-full object-cover rounded-[8px] md:rounded-[16px] lg:rounded-[24px] article-box">
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
      <div class="absolute bottom-0 right-0 bg-[#E6EFF7] border-2 border-white p-4 rounded-full overflow-hidden z-10">
        <img :src="Arrow" alt=""
          class="w-4 h-4 transition-all duration-500 group-hover:-translate-y-8 group-hover:translate-x-8 group-hover:opacity-0">
        <img :src="Arrow" alt=""
          class="w-4 h-4 absolute top-4 left-4 translate-y-8 -translate-x-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100">
      </div>
    </div>

    <div class="space-y-2">
      <p class="text-[14px] md:text-[18px] lg:text-[20px] font-bold font-sora h-full md:h-24 line-clamp-3">{{ title }}
      </p>
      <TextBody>{{ description }}</TextBody>
      <TextBody class="text-primary">Baca Selengkapnya</TextBody>
    </div>
  </div>
</template>

<style scoped>
.article-container {
  filter: url("#goo") drop-shadow(0px -2px 0px transparent)
}

.article-box {
  clip-path: polygon(68% 100%, 68% 62%, 100% 62%, 100% 0%, 0% 0%, 0% 100%);
}

@media (min-width: 320px) {
  .article-box {
    clip-path: polygon(70% 100%, 70% 60%, 100% 60%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 360px) {
  .article-box {
    clip-path: polygon(74% 100%, 74% 60%, 100% 60%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 440px) {
  .article-box {
    clip-path: polygon(80% 100%, 80% 60%, 100% 60%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 460px) {
  .article-box {
    clip-path: polygon(82% 100%, 82% 60%, 100% 60%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 560px) {
  .article-box {
    clip-path: polygon(86% 100%, 86% 60%, 100% 60%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 680px) {
  .article-box {
    clip-path: polygon(88% 100%, 88% 60%, 100% 60%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 768px) {
  .article-box {
    clip-path: polygon(72% 100%, 72% 60%, 100% 60%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 868px) {
  .article-box {
    clip-path: polygon(78% 100%, 78% 60%, 100% 60%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 968px) {
  .article-box {
    clip-path: polygon(82% 100%, 82% 66%, 100% 66%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 1024px) {
  .article-box {
    clip-path: polygon(72% 100%, 72% 70%, 100% 70%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 1124px) {
  .article-box {
    clip-path: polygon(72% 100%, 72% 70%, 100% 70%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 1224px) {
  .article-box {
    clip-path: polygon(72% 100%, 72% 70%, 100% 70%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 1280px) {
  .article-box {
    clip-path: polygon(72% 100%, 72% 70%, 100% 70%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 1400px) {
  .article-box {
    clip-path: polygon(80% 100%, 80% 70%, 100% 70%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 1500px) {
  .article-box {
    clip-path: polygon(82% 100%, 84% 70%, 100% 70%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 1600px) {
  .article-box {
    clip-path: polygon(84% 100%, 88% 70%, 100% 70%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 1700px) {
  .article-box {
    clip-path: polygon(86% 100%, 86% 70%, 100% 70%, 100% 0%, 0% 0%, 0% 100%);
  }
}
</style>