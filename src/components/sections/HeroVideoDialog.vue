<script setup lang="ts">
import { ref } from 'vue'
import { Play, X } from 'lucide-vue-next'

type AnimationStyle =
  | 'from-bottom'
  | 'from-center'
  | 'from-top'
  | 'from-left'
  | 'from-right'
  | 'fade'
  | 'top-in-bottom-out'
  | 'left-in-right-out'

interface Props {
  animationStyle?: AnimationStyle
  videoSrc: string
  thumbnailSrc: string
  thumbnailAlt?: string
  className?: string
  size?: string
}

withDefaults(defineProps<Props>(), {
  animationStyle: 'from-center',
  thumbnailAlt: 'Video thumbnail'
})

const isVideoOpen = ref(false)

// const animationVariants = {
//   'from-bottom': {
//     initial: { y: '100%', opacity: 0 },
//     animate: { y: 0, opacity: 1 },
//     exit: { y: '100%', opacity: 0 }
//   },
//   'from-center': {
//     initial: { scale: 0.5, opacity: 0 },
//     animate: { scale: 1, opacity: 1 },
//     exit: { scale: 0.5, opacity: 0 }
//   },
//   'from-top': {
//     initial: { y: '-100%', opacity: 0 },
//     animate: { y: 0, opacity: 1 },
//     exit: { y: '-100%', opacity: 0 }
//   },
//   'from-left': {
//     initial: { x: '-100%', opacity: 0 },
//     animate: { x: 0, opacity: 1 },
//     exit: { x: '-100%', opacity: 0 }
//   },
//   'from-right': {
//     initial: { x: '100%', opacity: 0 },
//     animate: { x: 0, opacity: 1 },
//     exit: { x: '100%', opacity: 0 }
//   },
//   fade: {
//     initial: { opacity: 0 },
//     animate: { opacity: 1 },
//     exit: { opacity: 0 }
//   },
//   'top-in-bottom-out': {
//     initial: { y: '-100%', opacity: 0 },
//     animate: { y: 0, opacity: 1 },
//     exit: { y: '100%', opacity: 0 }
//   },
//   'left-in-right-out': {
//     initial: { x: '-100%', opacity: 0 },
//     animate: { x: 0, opacity: 1 },
//     exit: { x: '100%', opacity: 0 }
//   }
// }

// const selectedAnimation = animationVariants[props.animationStyle]
</script>

<template>
  <div :class="['relative', className]">
    <div
      class="group relative cursor-pointer"
      @click="isVideoOpen = true"
    >
      <img
        :src="thumbnailSrc"
        :alt="thumbnailAlt"
        :class="['object-cover rounded-[16px] md:rounded-[24px] lg:rounded-[32px] shadow-lg transition-all duration-200 ease-out group-hover:brightness-[0.8]', size]"
      />
      <div class="absolute inset-0 flex scale-[0.9] items-center justify-center rounded-2xl transition-all duration-200 ease-out group-hover:scale-100">
        <div class="flex size-28 items-center justify-center rounded-full bg-black/10 backdrop-blur-md">
          <div
            class="relative flex size-20 scale-100 items-center justify-center rounded-full bg-gradient-to-b from-black/30 to-black shadow-md transition-all duration-200 ease-out group-hover:scale-[1.2]"
          >
            <Play
              class="size-8 scale-100 fill-white text-white transition-transform duration-200 ease-out group-hover:scale-105"
              :style="{
                filter:
                  'drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))'
              }"
            />
          </div>
        </div>
      </div>
    </div>

    <Transition name="fade">
      <div
        v-if="isVideoOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
        @click="isVideoOpen = false"
      >
        <div
          class="relative mx-4 aspect-video w-full max-w-4xl md:mx-0"
          @click.stop
        >
          <button
            class="absolute -top-16 right-0 rounded-full bg-neutral-900/50 p-2 text-xl text-white ring-1 backdrop-blur-md dark:bg-neutral-100/50 dark:text-black"
            @click="isVideoOpen = false"
          >
            <X class="size-5" />
          </button>
          <div class="relative isolate z-[1] size-full overflow-hidden rounded-[16px] md:rounded-[24px] lg:rounded-[32px] border-2 border-white">
            <iframe
              :src="videoSrc"
              class="size-full rounded-[16px] md:rounded-[24px] lg:rounded-[32px]"
              allowfullscreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
