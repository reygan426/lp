<template>
  <nav ref="navRef" class="custom-nav">
    <ul>
      <li v-for="(icon, index) in icons" :key="index" :class="{ active: activeIndex === index, animating: isAnimating }" :style="getItemAnimationStyle(index)" @click="handleClick(index)">
        <router-link :to="links[index]" class="nav-link" @click.prevent>
          <span class="icon" v-html="icon"></span>
          <span class="label">{{ labels[index] }}</span>
        </router-link>
      </li>
    </ul>
    <div class="effect">
      <div class="circle" :class="{ animating: isAnimating }"></div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, watch, onUnmounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const navRef = ref<HTMLElement | null>(null);
const activeIndex = ref(2);
const previousIndex = ref(2);
const route = useRoute();
const router = useRouter();
const isNavigating = ref(false);
const isAnimating = ref(false);

const links = ['/', '/package', '/berita', '/about-us', '/our-team'];
const labels = ['Home', 'Service', 'Blog', 'About', 'Team'];

const icons = [
  `<svg viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="home-01">
      <path id="Vector" d="M3.45958 14.592C3.06973 12.055 2.87481 10.7866 3.35443 9.66213C3.83404 8.53764 4.89812 7.76827 7.02628 6.22953L8.61634 5.07986C11.2637 3.1657 12.5874 2.20862 14.1148 2.20862C15.6421 2.20862 16.9658 3.1657 19.6132 5.07986L21.2033 6.22953C23.3315 7.76827 24.3955 8.53764 24.8751 9.66213C25.3547 10.7866 25.1598 12.055 24.77 14.592L24.4376 16.7552C23.8849 20.3515 23.6086 22.1496 22.3188 23.2224C21.0291 24.2951 19.1435 24.2951 15.3724 24.2951H12.8572C9.08607 24.2951 7.20051 24.2951 5.91075 23.2224C4.621 22.1496 4.34468 20.3515 3.79203 16.7552L3.45958 14.592Z" fill="#F5F5F5" stroke="#424242" stroke-width="1.75" stroke-linejoin="round"></path>
      <path id="Vector_2" d="M17.4277 18.7736C16.5448 19.4609 15.385 19.8779 14.1148 19.8779C12.8445 19.8779 11.6847 19.4609 10.8018 18.7736" stroke="#424242" stroke-width="1.75" stroke-linecap="round"></path>
    </g>
  </svg>`,
  `<svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="discover-circle">
      <path id="Vector" d="M22.25 12C22.25 6.47715 17.7728 2 12.25 2C6.72715 2 2.25 6.47715 2.25 12C2.25 17.5228 6.72715 22 12.25 22C17.7728 22 22.25 17.5228 22.25 12Z" stroke="#424242" stroke-width="1.5"></path>
        <path id="Vector_2" d="M12.6514 8.29796L15.5713 7.32465C16.4575 7.02924 16.9007 6.88153 17.1346 7.11544C17.3685 7.34935 17.2208 7.79247 16.9253 8.67871L15.952 11.5986C15.4486 13.1088 15.1969 13.8639 14.6554 14.4054C14.1139 14.9469 13.3588 15.1986 11.8486 15.702L8.92871 16.6753C8.04247 16.9708 7.59935 17.1185 7.36544 16.8846C7.13153 16.6507 7.27924 16.2075 7.57465 15.3213L8.54796 12.4014C9.05136 10.8912 9.30306 10.1361 9.84457 9.59457C10.3861 9.05306 11.1412 8.80136 12.6514 8.29796Z" stroke="#424242" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      <path id="Vector_3" d="M12.2501 12L12.2437 12.0064" stroke="#424242" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </g>
  </svg>`,
  `<svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="sent">
        <path id="Vector" d="M21.7977 3.05293C19.6197 0.707361 3.23648 6.4532 3.25001 8.551C3.26535 10.9299 9.64809 11.6617 11.4172 12.1581C12.4811 12.4565 12.766 12.7625 13.0113 13.8781C14.1223 18.9305 14.6801 21.4435 15.9514 21.4996C17.9778 21.5892 23.9233 5.342 21.7977 3.05293Z" stroke="#424242" stroke-width="1.5"></path>
        <path id="Vector_2" d="M12.25 12.5L15.75 9" stroke="#424242" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    </g>
</svg>`,
  `<svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="user">
        <path id="Vector" d="M7.07757 15.4816C5.6628 16.324 1.95336 18.0441 4.21266 20.1966C5.31631 21.248 6.54549 22 8.09087 22H16.9091C18.4545 22 19.6837 21.248 20.7873 20.1966C23.0466 18.0441 19.3372 16.324 17.9224 15.4816C14.6048 13.5061 10.3952 13.5061 7.07757 15.4816Z" stroke="#424242" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        <path id="Vector_2" d="M17 6.5C17 8.98528 14.9853 11 12.5 11C10.0147 11 8 8.98528 8 6.5C8 4.01472 10.0147 2 12.5 2C14.9853 2 17 4.01472 17 6.5Z" stroke="#424242" stroke-width="1.5"></path>
    </g>
</svg>`,
  `<svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="search-02">
        <path id="Vector" d="M14.5 14L17 16.5" stroke="#424242" stroke-width="1.5" stroke-linejoin="round"></path>
        <path id="Vector_2" d="M16.9333 18.5252C16.3556 17.9475 16.3556 17.0109 16.9333 16.4333C17.5109 15.8556 18.4475 15.8556 19.0252 16.4333L22.0667 19.4748C22.6444 20.0525 22.6444 20.9891 22.0667 21.5667C21.4891 22.1444 20.5525 22.1444 19.9748 21.5667L16.9333 18.5252Z" stroke="#424242" stroke-width="1.5" stroke-linecap="round"></path>
        <path id="Vector_3" d="M16.5 9C16.5 5.13401 13.366 2 9.5 2C5.63401 2 2.5 5.13401 2.5 9C2.5 12.866 5.63401 16 9.5 16C13.366 16 16.5 12.866 16.5 9Z" stroke="#424242" stroke-width="1.5" stroke-linejoin="round"></path>
    </g>
</svg>`,
];

// 🎯 Unified Size System - Semua ukuran berdasarkan breakpoint
const sizeConfig = {
  xs: {
    // <= 360px
    nav: { height: 90, borderRadius: 16, padding: 12 },
    item: { size: 58, marginTop: 16 },
    icon: { size: 19, scale: 0.73, translateY: -20 },
    circle: { size: 38, topOffset: 15 },
    animation: { duration: 400, delay: 50 },
    curve: {
      beforeLeft: -4,
      beforeRight: -4,
      beforeHeight: 110,
      beforeBottom: -0.1,
      beforeShadowY: 0.5,
      beforeShadowBlur: 0.2,
      afterHeight: 30,
      afterBottom: -45,
      afterLeft: -5,
      afterRight: -5,
      afterWidth: 10,
    },
    effect: { rightOffset: -3 },
    label: { offsetY: 16 }, // Tambahan untuk posisi label
  },
  sm: {
    // 361px - 428px
    nav: { height: 100, borderRadius: 18, padding: 15 },
    item: { size: 67, marginTop: 20 },
    icon: { size: 21, scale: 0.81, translateY: -25 },
    circle: { size: 45, topOffset: 15 },
    animation: { duration: 500, delay: 60 },
    curve: {
      beforeLeft: -5,
      beforeRight: -5,
      beforeHeight: 115,
      beforeBottom: -0.12,
      beforeShadowY: 0.55,
      beforeShadowBlur: 0.22,
      afterHeight: 35,
      afterBottom: -50,
      afterLeft: -6,
      afterRight: -6,
      afterWidth: 12,
    },
    effect: { rightOffset: -4 },
    label: { offsetY: 17 }, // Tambahan untuk posisi label
  },
  md: {
    // 429px - 480px
    nav: { height: 105, borderRadius: 20, padding: 15 },
    item: { size: 70, marginTop: 24 },
    icon: { size: 23, scale: 0.88, translateY: -27 },
    circle: { size: 47, topOffset: 15 },
    animation: { duration: 600, delay: 70 },
    curve: {
      beforeLeft: -6,
      beforeRight: -6,
      beforeHeight: 118,
      beforeBottom: -0.13,
      beforeShadowY: 0.57,
      beforeShadowBlur: 0.23,
      afterHeight: 40,
      afterBottom: -55,
      afterLeft: -7,
      afterRight: -7,
      afterWidth: 14,
    },
    effect: { rightOffset: -6 },
    label: { offsetY: 18 }, // Tambahan untuk posisi label
  },
  lg: {
    // >= 769px
    nav: { height: 120, borderRadius: 24, padding: 15 },
    item: { size: 80, marginTop: 30 },
    icon: { size: 26, scale: 1.0, translateY: -32 },
    circle: { size: 60, topOffset: 15 },
    animation: { duration: 700, delay: 80 },
    curve: {
      beforeLeft: -10,
      beforeRight: -10,
      beforeHeight: 125,
      beforeBottom: -0.18,
      beforeShadowY: 0.65,
      beforeShadowBlur: 0.3,
      afterHeight: 50,
      afterBottom: -65,
      afterLeft: -10,
      afterRight: -10,
      afterWidth: 20,
    },
    effect: { rightOffset: -8 },
    label: { offsetY: 20 }, // Tambahan untuk posisi label
  },
};

// Get current breakpoint
const getBreakpoint = () => {
  const vw = window.innerWidth;
  if (vw <= 360) return 'xs';
  if (vw <= 428) return 'sm';
  if (vw <= 480) return 'md';
  return 'lg';
};

// Apply unified size system
const applyUnifiedSizes = () => {
  if (!navRef.value) return;

  const breakpoint = getBreakpoint();
  const config = sizeConfig[breakpoint];

  // Set all CSS custom properties at once
  const properties = {
    '--nav-height': `${config.nav.height}px`,
    '--nav-border-radius': `${config.nav.borderRadius}px`,
    '--nav-padding': `${config.nav.padding}px`,
    '--w-h-item': `${config.item.size}px`,
    '--item-margin-top': `${config.item.marginTop}px`,
    '--icon-size': `${config.icon.size}px`,
    '--icon-scale': config.icon.scale.toString(),
    '--translate-y': `${config.icon.translateY}px`,
    '--circle-size': `${config.circle.size}px`,
    '--circle-top-offset': `${config.circle.topOffset}px`,
    '--base-animation-duration': `${config.animation.duration}ms`,
    '--animation-base-delay': `${config.animation.delay}ms`,
    '--curve-before-left': `${config.curve.beforeLeft}px`,
    '--curve-before-right': `${config.curve.beforeRight}px`,
    '--curve-before-height': `${config.curve.beforeHeight}%`,
    '--curve-before-bottom': config.curve.beforeBottom.toString(),
    '--curve-before-shadow-y': config.curve.beforeShadowY.toString(),
    '--curve-before-shadow-blur': config.curve.beforeShadowBlur.toString(),
    '--curve-after-height': `${config.curve.afterHeight}px`,
    '--curve-after-bottom': `${config.curve.afterBottom}px`,
    '--curve-after-left': `${config.curve.afterLeft}px`,
    '--curve-after-right': `${config.curve.afterRight}px`,
    '--curve-after-width': `${config.curve.afterWidth}px`,
    '--effect-right-offset': `${config.effect.rightOffset}px`,
    '--label-offset-y': `${config.label.offsetY}px`, // Tambahan untuk posisi label
  };

  Object.entries(properties).forEach(([property, value]) => {
    navRef.value!.style.setProperty(property, value);
  });
};

const getItemAnimationStyle = (index: number) => {
  if (!isAnimating.value) return {};

  const distance = Math.abs(index - previousIndex.value);
  const direction = index > previousIndex.value ? 1 : -1;
  const baseDelay = 50;
  const staggerDelay = distance * 30;

  return {
    '--animation-delay': `${baseDelay + staggerDelay}ms`,
    '--stagger-direction': direction,
  };
};

const getCurrentIndex = () => {
  const currentPath = route.path;
  const index = links.findIndex((link) => link === currentPath);
  return index !== -1 ? index : 2;
};

const handleClick = async (index: number) => {
  if (isNavigating.value || isAnimating.value) return;

  isNavigating.value = true;
  isAnimating.value = true;
  previousIndex.value = activeIndex.value;

  const distance = Math.abs(index - previousIndex.value);
  const baseDelay = 150;
  const animationDuration = Math.max(400, distance * 100);
  const totalDelay = baseDelay + animationDuration;

  setTimeout(() => {
    activeIndex.value = index;
    updatePosition();
  }, 80);

  setTimeout(() => {
    router.push(links[index]).finally(() => {
      setTimeout(() => {
        isNavigating.value = false;
        isAnimating.value = false;
        previousIndex.value = index;
      }, 150);
    });
  }, totalDelay);
};

const updatePosition = () => {
  return new Promise<void>((resolve) => {
    if (!navRef.value) {
      resolve();
      return;
    }

    const lis = navRef.value.querySelectorAll('li');
    const activeItem = lis[activeIndex.value];

    if (activeItem) {
      const navRect = navRef.value.getBoundingClientRect();
      const itemRect = activeItem.getBoundingClientRect();
      const breakpoint = getBreakpoint();
      const circleSize = sizeConfig[breakpoint].circle.size;

      const itemCenter = itemRect.left + itemRect.width / 2 - navRect.left;
      const circlePosition = itemCenter - circleSize / 2;

      navRef.value.style.setProperty('--position-x-active', `${circlePosition}px`);
    }

    requestAnimationFrame(() => resolve());
  });
};

let resizeTimeout: ReturnType<typeof setTimeout>;
const handleResize = () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    applyUnifiedSizes();
    updatePosition();
  }, 150);
};

watch(
  () => route.path,
  async () => {
    if (isNavigating.value) return;
    const newIndex = getCurrentIndex();
    if (newIndex !== activeIndex.value) {
      previousIndex.value = activeIndex.value;
      activeIndex.value = newIndex;
      await nextTick();
      await updatePosition();
    }
  },
  { immediate: true }
);

onMounted(async () => {
  const initialIndex = getCurrentIndex();
  activeIndex.value = initialIndex;
  previousIndex.value = initialIndex;

  await nextTick();
  applyUnifiedSizes();
  await updatePosition();
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  clearTimeout(resizeTimeout);
});
</script>

<style scoped>
/* 🎯 Unified Navigation System - All sizes controlled by CSS variables */
.custom-nav {
  color: #000;
  position: fixed;
  inset: auto var(--nav-padding, 15px) 0 var(--nav-padding, 15px);
  width: calc(100% - calc(var(--nav-padding, 15px) * 2));
  max-width: calc(500px - calc(var(--nav-padding, 15px) * 2));
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  border-radius: var(--nav-border-radius, 24px);
  height: var(--nav-height, 110px);
  background-color: transparent;
  overflow: hidden;
  padding-left: var(--nav-padding, 15px);
  padding-right: var(--nav-padding, 15px);

  /* Default CSS Variables - Will be overridden by JS */
  --w-h-item: 75px;
  --circle-size: 50px;
  --position-x-active: calc(50% - var(--circle-size) / 2);
  --base-animation-duration: 600ms;
  --icon-size: 24px;
  --icon-scale: 1;
  --translate-y: -25px;
  --circle-top-offset: 15px;
  --item-margin-top: 25px;
  --animation-delay: 0ms;
  --stagger-direction: 1;
  --label-offset-y: 20px; /* Nilai default untuk posisi label */
}

.custom-nav ul {
  margin: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: var(--w-h-item);
  justify-content: space-between;
  width: 100%;
  gap: 0;
  padding: 0;
  list-style: none;
}

.custom-nav ul li {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  color: #000;
  cursor: pointer;
  text-align: center;
  width: 100%;
  height: var(--w-h-item);
  transition: transform var(--base-animation-duration) cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform-origin: center bottom;
  margin-top: calc((var(--nav-height, 110px) - var(--w-h-item)) / 2 + var(--item-margin-top, 25px));
}

.custom-nav ul li.animating {
  animation: itemPulse var(--base-animation-duration) ease-out;
  animation-delay: var(--animation-delay);
}

@keyframes itemPulse {
  0% {
    transform: scale(1);
  }
  30% {
    transform: scale(1.05) translateY(-2px);
  }
  60% {
    transform: scale(0.98) translateY(1px);
  }
  100% {
    transform: scale(1);
  }
}

.custom-nav ul li.active {
  transform: translateY(var(--translate-y)) scale(1.1);
  color: #2563eb;
  transition: all var(--base-animation-duration) cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.custom-nav ul li .icon {
  width: var(--icon-size);
  height: var(--icon-size);
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(var(--icon-scale));
  transform-origin: center;
  transition: all var(--base-animation-duration) cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.custom-nav ul li .icon svg {
  width: 100%;
  height: 100%;
  transform-origin: center;
  transition: all var(--base-animation-duration) cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.custom-nav ul li.active .icon svg {
  transform: scale(1.2);
  color: #424242;
}

.custom-nav ul li .label {
  opacity: 0;
  font-size: 11px;
  margin-top: 4px;
  position: absolute;
  bottom: 0;
  transition: all var(--base-animation-duration) cubic-bezier(0.25, 0.46, 0.45, 0.94);
  pointer-events: none;
  color: #424242;
  font-weight: 600;
  transform: translateY(10px) scale(0.8);
  transform-origin: center;
  letter-spacing: 0.3px;
}

.custom-nav ul li.active .label {
  transition: 1ms;
  opacity: 1;
  /* Perubahan di sini - menggunakan variabel untuk posisi label */
  transform: translateY(var(--label-offset-y, 20px)) scale(1);
  /* Menambahkan bottom space */
  padding-bottom: 8px;
}

/* 🎯 Unified Effect System */
.custom-nav .effect {
  position: absolute;
  overflow: hidden;
  width: 100%;
  left: 0;
  bottom: 0;
  height: calc(var(--w-h-item) + 40px);
  z-index: -1;
}

.custom-nav .effect::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  height: var(--w-h-item);
  width: calc(var(--position-x-active) - 4px);
  background: #fff;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 16px;
  border-top-left-radius: 24px;
  transition: all var(--base-animation-duration) cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Media Query untuk tablet */
@media (min-width: 429px) and (max-width: 800px) {
  .custom-nav .effect::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: var(--w-h-item);
    width: calc(var(--position-x-active) - 6px);
    background: #fff;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 16px;
    border-top-left-radius: 24px;
  }
  .custom-nav .effect::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0px;
    height: var(--w-h-item);
    width: calc(var(--position-x-active) - 10px);
    border-top-left-radius: 8px;
    transition: all var(--base-animation-duration) cubic-bezier(0.25, 0.46, 0.45, 0.94);
    background: #fff;
    border-top-right-radius: 24px;
    border-bottom-right-radius: 16px;
  }
}

.custom-nav .effect::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0px;
  height: var(--w-h-item);
  width: calc(100% - var(--position-x-active) - var(--circle-size) + var(--effect-right-offset, -3px));
  border-top-left-radius: 8px;
  transition: all var(--base-animation-duration) cubic-bezier(0.25, 0.46, 0.45, 0.94);
  background: #fff;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 16px;
}

/* 🎯 Unified Circle System */
.custom-nav .effect .circle {
  position: absolute;
  width: var(--circle-size);
  height: var(--circle-size);
  left: var(--position-x-active);
  border-radius: 50%;
  background: #fff;
  transition: all var(--base-animation-duration) cubic-bezier(0.25, 0.46, 0.45, 0.94);
  top: calc((var(--w-h-item) - var(--circle-size)) / 2 + var(--circle-top-offset, 15px));
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.custom-nav .effect .circle.animating {
  animation: circleMove var(--base-animation-duration) ease-out;
  animation-delay: 80ms;
}

@keyframes circleMove {
  0% {
    transform: scale(1);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
  25% {
    transform: scale(1.1);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }
  75% {
    transform: scale(1.02);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
}

/* 🎯 Unified Curve System */
.custom-nav .effect .circle::before {
  content: '';
  position: absolute;
  left: var(--curve-before-left, -8px);
  right: var(--curve-before-right, -8px);
  height: var(--curve-before-height, 120%);
  bottom: calc(var(--circle-size) * var(--curve-before-bottom, -0.15));
  background: transparent;
  border-radius: 50%;
  box-shadow: 0 calc(var(--circle-size) * var(--curve-before-shadow-y, 0.6)) 0 calc(var(--circle-size) * var(--curve-before-shadow-blur, 0.25)) #fff;
  transition: all var(--base-animation-duration) cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.custom-nav .effect .circle::after {
  content: '';
  position: absolute;
  left: var(--curve-after-left, -2px);
  right: var(--curve-after-right, -2px);
  height: var(--curve-after-height, 20px);
  width: calc(100% + var(--curve-after-width, 4px));
  bottom: var(--curve-after-bottom, -65px);
  background: #fff;
  border-radius: 0;
  transition: all var(--base-animation-duration) cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Navigation Link */
.nav-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: inherit;
}

/* 🎯 Hover Effects */
.custom-nav ul li:hover:not(.active) {
  transform: translateY(-5px) scale(1.05);
  color: #424242;
  transition: all 0.2s ease-out;
}

.custom-nav ul li:hover:not(.active) .icon svg {
  transform: scale(1.1);
  color: #424242;
}

/* 🎯 Performance Optimizations */
.custom-nav ul li,
.custom-nav ul li .icon,
.custom-nav ul li .icon svg,
.custom-nav ul li .label,
.custom-nav .effect,
.custom-nav .effect::before,
.custom-nav .effect::after,
.custom-nav .effect .circle,
.custom-nav .effect .circle::before,
.custom-nav .effect .circle::after {
  backface-visibility: hidden;
  will-change: transform, opacity;
}

/* 🎯 Accessibility */
@media (prefers-reduced-motion: reduce) {
  * {
    transition-duration: 0.2s !important;
    animation-duration: 0.2s !important;
  }

  .custom-nav ul li.animating,
  .custom-nav .effect .circle.animating {
    animation: none !important;
  }
}
</style>
