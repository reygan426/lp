<template>
  <nav ref="navRef" class="mx-auto px-6">
    <ul>
      <li v-for="(icon, index) in icons" :key="index" :class="{ active: activeIndex === index }" @click="handleClick(index, $event)">
        <router-link :to="links[index]" class="nav-link" @click.prevent>
          <span class="icon" v-html="icon"></span>
          <span class="label">{{ labels[index] }}</span>
        </router-link>
      </li>
    </ul>
    <div class="effect">
      <div class="circle"></div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const navRef = ref<HTMLElement | null>(null);
const activeIndex = ref(2);
const route = useRoute();
const router = useRouter();
const isNavigating = ref(false);

const links = ['/', '/package', '/berita', '/about-us', '/our-team'];

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

const labels = ['Home', 'Service', 'Blog', 'About', 'Team'];

// Fungsi untuk mendapatkan index berdasarkan current route
const getCurrentIndex = () => {
  const currentPath = route.path;
  const index = links.findIndex((link) => link === currentPath);
  return index !== -1 ? index : 2;
};

const handleClick = async (index: number, event: MouseEvent) => {
  if (isNavigating.value) return;

  isNavigating.value = true;

  // Update posisi circle dan active index bersamaan
  const target = event.currentTarget as HTMLElement;
  activeIndex.value = index;
  await updatePosition(target.offsetLeft);

  // Navigasi setelah animasi selesai
  setTimeout(() => {
    router.push(links[index]).finally(() => {
      setTimeout(() => {
        isNavigating.value = false;
      }, 100);
    });
  }, 300);
};

const updatePosition = (offsetLeft: number, liWidth = 80, circleWidth = 60) => {
  return new Promise<void>((resolve) => {
    const centerOffset = offsetLeft + liWidth / 2 - circleWidth / 2;
    if (navRef.value) {
      navRef.value.style.setProperty('--position-x-active', `${centerOffset}px`);
      requestAnimationFrame(() => resolve());
    } else {
      resolve();
    }
  });
};

// Watch untuk perubahan route
watch(
  () => route.path,
  async () => {
    if (isNavigating.value) return;

    const newIndex = getCurrentIndex();
    if (newIndex !== activeIndex.value) {
      activeIndex.value = newIndex;
      await nextTick();
      const lis = navRef.value?.querySelectorAll('li');
      const activeItem = lis?.[activeIndex.value] as HTMLElement;
      if (activeItem) {
        await updatePosition(activeItem.offsetLeft);
      }
    }
  },
  { immediate: true }
);

onMounted(async () => {
  activeIndex.value = getCurrentIndex();
  await nextTick();
  const lis = navRef.value?.querySelectorAll('li');
  const activeItem = lis?.[activeIndex.value] as HTMLElement;
  if (activeItem) {
    await updatePosition(activeItem.offsetLeft);
  }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=MuseoModerno:ital,wght@0,100..900;1,100..900&family=Poppins:wght@400;600&display=swap');

nav {
  color: #000;
  position: fixed;
  inset: auto 0 0 0;
  width: min(500px, 100%);
  left: 50%;
  transform: translateX(-50%);
  --w-h-item: 80px;
  --position-x-active: calc(var(--w-h-item) * 2 + 10px);
  z-index: 10;
  border-radius: 24px;
  margin-bottom: 10px;
  height: 100px;
  background-color: transparent;
}

nav ul {
  margin: 0;
  display: grid;
  grid-template-columns: repeat(5, var(--w-h-item));
  grid-template-rows: var(--w-h-item);
  justify-content: space-between;
  width: 100%;
}

nav ul li {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  color: #000;
  cursor: pointer;
  text-align: center;
  margin-top: 20px;
  width: var(--w-h-item);
  height: var(--w-h-item);
  /* Smoother transition with better easing */
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  transform-origin: center bottom;
}

nav ul li.active {
  transform: translateY(-30px) scale(1.1);
}

nav .nav-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: inherit;
}

/* Improved icon animation */
nav ul li .icon {
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: center;
  /* Smoother icon transition */
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

nav ul li .icon svg {
  width: 100%;
  height: 100%;
  transform-origin: center;
  /* Smooth SVG scaling */
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* Active state for icons */
nav ul li.active .icon svg {
  transform: scale(1.2);
}

/* Smooth label animation */
nav ul li .label {
  opacity: 0;
  font-size: 12px;
  margin-top: 4px;
  position: absolute;
  bottom: 0;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  pointer-events: none;
  color: #000;
  font-weight: 500;
  transform: translateY(10px) scale(0.8);
  transform-origin: center;
}

nav ul li.active .label {
  opacity: 1;
  transform: translateY(25px) scale(1);
}

nav .effect {
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  padding-top: 120px;
  height: calc(var(--w-h-item) + 20px);
  z-index: -1;
  overflow: hidden;
}

nav .effect::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  height: var(--w-h-item);
  width: calc(var(--position-x-active) - 10px);
  border-top-right-radius: 8px;
  transition: 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  background: #fff;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 16px;
  overflow: hidden;
}

nav .effect::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0px;
  height: var(--w-h-item);
  width: calc(100% - var(--position-x-active) - var(--w-h-item) + 11px);
  border-top-left-radius: 10px;
  transition: 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  background: #fff;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 16px;
}

nav .effect .circle {
  position: absolute;
  width: 60px;
  height: 60px;
  left: var(--position-x-active);
  border-radius: 50%;
  background: #fff;
  transition: 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  top: 20px;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav .effect .circle::before {
  content: '';
  position: absolute;
  left: -10px;
  right: -10px;
  height: 100%;
  background: transparent;
  border-radius: 50%;
  box-shadow: 0 45px 0 30px #fff;
  bottom: -6px;
  transition: 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

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

.nav-link.router-link-active {
  color: inherit;
}

/* Smooth hover effect */
nav ul li:hover:not(.active) {
  transform: translateY(-5px) scale(1.05);
}

nav ul li:hover:not(.active) .icon svg {
  transform: scale(1.1);
}

nav ul li.active:hover {
  transform: translateY(-30px) scale(1.1);
}

/* Performance optimizations */
nav ul li,
nav ul li .icon,
nav ul li .icon svg,
nav ul li .label,
nav .effect,
nav .effect::before,
nav .effect::after,
nav .effect .circle,
nav .effect .circle::before {
  backface-visibility: hidden;
  perspective: 1000px;
  will-change: transform, opacity;
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  nav ul li,
  nav ul li .icon,
  nav ul li .icon svg,
  nav ul li .label,
  nav .effect,
  nav .effect::before,
  nav .effect::after,
  nav .effect .circle,
  nav .effect .circle::before {
    transition-duration: 0.1s;
  }
}
</style>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
}

body {
  position: relative;
  overflow-y: hidden;
  touch-action: manipulation;
  -webkit-overflow-scrolling: touch;
}

nav {
  position: fixed !important;
  bottom: 0 !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  max-width: 100vw;
  overflow: hidden;
  z-index: 999;
}

@media screen and (max-width: 600px) {
  nav {
    max-width: calc(100% - 48px);
    margin-left: auto;
    margin-right: auto;
    padding-left: 24px;
    padding-right: 24px;
    border-radius: 16px !important;
  }
}
</style>
