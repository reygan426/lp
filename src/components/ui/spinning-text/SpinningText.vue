<template>
  <Motion as="div" :class="cn('relative', props.class)" initial="hidden" animate="visible" :variants="containerVariants"
    :transition="finalTransition">
    <span v-for="(letter, index) in letters" :key="`${letter}-${index}`" class="absolute left-1/2 top-1/2 text-primary"
      :variants="itemVariants" :style="{
        '--index': index,
        '--total': letters.length,
        '--radius': radius,
        transform: `
                  translate(-50%, -50%)
                  rotate(calc(360deg / var(--total) * var(--index)))
                  translateY(calc(var(--radius, 5) * -1.2ch))
                `,
        transformOrigin: 'center',
      }">
      {{ letter }}
    </span>
    <!-- arrow -->
  </Motion>
  <div class="absolute w-full h-full top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 rounded-full overflow-hidden bg-primary p-6 flex justify-center items-center rotate-[140deg] md:rotate-0">
    <img :src="Arrow" alt=""
      :class="['w-6 h-6 filter brightness-0 invert']">
  </div>
</template>

<script lang="ts" setup>
import { cn } from '@/lib/utils';
import { Motion } from 'motion-v';
import type { Variant, Transition } from 'motion-v';
import { computed } from 'vue';
import Arrow from "@/assets/icon/arrow.svg"

const BASE_TRANSITION = {
  repeat: Infinity,
  ease: 'linear',
};

const BASE_ITEM_VARIANTS = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

interface CircularTextProps {
  text: string;
  duration?: number;
  class?: string;
  reverse?: boolean;
  radius?: number;
  transition?: Transition;
  variants?: {
    container?: Variant;
    item?: Variant;
  };
}

const props = withDefaults(defineProps<CircularTextProps>(), {
  duration: 10,
  radius: 5,
});

const letters = computed(() => {
  let letters = props.text.split('');
  letters.push(' ');
  return letters;
});
const finalTransition = computed(() => ({
  ...BASE_TRANSITION,
  ...props.transition,
  duration: props.transition?.duration ?? props.duration,
}));

const containerVariants = computed(() => ({
  visible: { rotate: props.reverse ? -360 : 360 },
  // ...props.variants?.container,
}));

const itemVariants = computed(() => ({
  ...BASE_ITEM_VARIANTS,
  ...props?.variants?.item,
}));
</script>
<style scoped></style>
