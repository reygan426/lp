<script lang="ts" setup>
import LogoText from '@/assets/logo/logo-text.png'
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const props = defineProps({
  position: {
    type: String,
  },
  whiteSectionVisible: {
    type: Boolean,
    default: true
  }
})

const activeDropdown = ref<string | null>(null)
const isScrolled = ref(false)
const hasWhiteBackground = ref(false)

const activeMenu = computed(() => {
  const path = route.path

  if (profileItems.some(item => item.link === path)) {
    return 'profile'
  }

  if (packageItems.some(item => item.link === path)) {
    return 'package'
  }

  if (beritaItems.some(item => item.link === path)) {
    return 'berita'
  }

  if (path === '/') return 'home'
  if (path === '/contact') return 'contact'

  return null
})

const toggleDropdown = (menu: string) => {
  activeDropdown.value = activeDropdown.value === menu ? null : menu
}

const openDropdown = (menu: string) => {
  activeDropdown.value = menu
}

const closeDropdowns = () => {
  activeDropdown.value = null
}

const handleScroll = () => {
  const scrollPosition = window.scrollY
  isScrolled.value = scrollPosition > 5
  hasWhiteBackground.value = props.whiteSectionVisible || isScrolled.value
}

const navigateTo = (path: string) => {
  router.push(path)
  closeDropdowns()
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const profileItems = [
  { name: 'About Us', link: '/about-us' },
  { name: 'Our Team', link: '/our-team' },
  { name: 'Join Us', link: '/member' }
]

const packageItems = [
  { name: 'Package', link: '/package' },
  { name: 'Jatidiri Sekolah', link: '/jatidiri-sekolah' },
  { name: 'Jatidiri Corporate', link: '/jatidiri-corporate' },
  { name: 'Jatidiri Keluarga', link: '/jatidiri-keluarga' },
  { name: 'Jatidiri Ku', link: '/jatidiri-ku' },
]

const beritaItems = [
  { name: 'Berita', link: '/berita' },
  { name: 'Agenda', link: '/agenda' }
]
</script>

<template>
  <div :class="['w-full top-8 px-8 z-50 hidden lg:block', position || 'sticky mb-8']">
    <nav class="py-6 lg:px-[90px] xl:px-[90px] flex justify-between items-center transition-all duration-300" :class="{
      'bg-white/85 rounded-[16px] md:rounded-[24px] lg:rounded-[32px] backdrop-blur-md': hasWhiteBackground,
      'text-white': !hasWhiteBackground
    }">
      <div>
        <img :src="LogoText" alt="Logo Text Jatidiri" class="">
      </div>

      <div class="flex gap-6 relative">
        <router-link to="/"
          class="text-[10px] md:text-[12px] lg:text-[16px] p-2 px-3 rounded-full font-sora transition-colors duration-300 hover:bg-primary hover:text-white"
          :class="{
            'bg-primary text-white': activeMenu === 'home',
            'text-black/60': !isScrolled && activeMenu !== 'home',
            'text-black/80': isScrolled && activeMenu !== 'home'
          }">Home</router-link>

        <!-- Profile Dropdown -->
        <div class="relative" @mouseenter="openDropdown('profile')" @mouseleave="closeDropdowns">
          <button @click="toggleDropdown('profile')" @blur="closeDropdowns"
            class="text-[10px] md:text-[12px] lg:text-[16px] p-2 px-3 rounded-full focus:outline-none flex items-center gap-1 transition-colors duration-300 font-sora"
            :class="{
              'bg-primary text-white': activeDropdown === 'profile' || activeMenu === 'profile',
              'text-black/60': !isScrolled && activeDropdown !== 'profile' && activeMenu !== 'profile',
              'text-black/80': isScrolled && activeDropdown !== 'profile' && activeMenu !== 'profile'
            }">
            Profile
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 md:h-4 md:w-4 transition-transform duration-300"
              :class="{ 'transform rotate-180': activeDropdown === 'profile' }" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <transition enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="transform opacity-0 -translate-y-2" enter-to-class="transform opacity-100 translate-y-0"
            leave-active-class="transition-all duration-250 ease-in"
            leave-from-class="transform opacity-100 translate-y-0" leave-to-class="transform opacity-0 -translate-y-2">
            <div v-show="activeDropdown === 'profile'"
              class="absolute left-0 mt-4 w-60 overflow-hidden bg-white rounded-[8px] md:rounded-[16px] lg:rounded-[24px] shadow-gray-300/5 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] z-50 border-t-[3px] border-primary">
              <div class="">
                <router-link v-for="item in profileItems" :key="item.name" :to="item.link"
                  @click="navigateTo(item.link)"
                  class="block px-6 py-4 text-[8px] md:text-[10px] lg:text-[14px] text-gray-700 hover:bg-gray-100 transition-colors duration-250 font-sora relative overflow-hidden dropdown-item">
                  {{ item.name }}
                </router-link>
              </div>
            </div>
          </transition>
        </div>

        <!-- Package Dropdown -->
        <div class="relative" @mouseenter="openDropdown('package')" @mouseleave="closeDropdowns">
          <button @click="toggleDropdown('package')" @blur="closeDropdowns"
            class="text-[10px] md:text-[12px] lg:text-[16px] p-2 px-3 rounded-full focus:outline-none flex items-center gap-1 transition-colors duration-300 font-sora"
            :class="{
              'bg-primary text-white': activeDropdown === 'package' || activeMenu === 'package',
              'text-black/60': !isScrolled && activeDropdown !== 'package' && activeMenu !== 'package',
              'text-black/80': isScrolled && activeDropdown !== 'package' && activeMenu !== 'package'
            }">
            Service
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 md:h-4 md:w-4 transition-transform duration-300"
              :class="{ 'transform rotate-180': activeDropdown === 'package' }" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <transition enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="transform opacity-0 -translate-y-2" enter-to-class="transform opacity-100 translate-y-0"
            leave-active-class="transition-all duration-250 ease-in"
            leave-from-class="transform opacity-100 translate-y-0" leave-to-class="transform opacity-0 -translate-y-2">
            <div v-show="activeDropdown === 'package'"
              class="absolute left-0 mt-4 w-60 overflow-hidden bg-white rounded-[8px] md:rounded-[16px] lg:rounded-[24px] shadow-gray-300/5 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] z-50 border-t-[3px] border-primary">
              <div class="">
                <router-link v-for="item in packageItems" :key="item.name" :to="item.link"
                  @click="navigateTo(item.link)"
                  class="block px-6 py-4 text-[8px] md:text-[10px] lg:text-[14px] text-gray-700 hover:bg-gray-100 transition-colors duration-250 font-sora relative overflow-hidden dropdown-item">
                  {{ item.name }}
                </router-link>
              </div>
            </div>
          </transition>
        </div>

        <!-- Berita Acara Dropdown -->
        <div class="relative" @mouseenter="openDropdown('berita')" @mouseleave="closeDropdowns">
          <button @click="toggleDropdown('berita')" @blur="closeDropdowns"
            class="text-[10px] md:text-[12px] lg:text-[16px] p-2 px-3 rounded-full focus:outline-none flex items-center gap-1 transition-colors duration-300 font-sora"
            :class="{
              'bg-primary text-white': activeDropdown === 'berita' || activeMenu === 'berita',
              'text-black/60': !isScrolled && activeDropdown !== 'berita' && activeMenu !== 'berita',
              'text-black/80': isScrolled && activeDropdown !== 'berita' && activeMenu !== 'berita'
            }">
            Berita & Acara
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 md:h-4 md:w-4 transition-transform duration-300"
              :class="{ 'transform rotate-180': activeDropdown === 'berita' }" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <transition enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="transform opacity-0 -translate-y-2" enter-to-class="transform opacity-100 translate-y-0"
            leave-active-class="transition-all duration-250 ease-in"
            leave-from-class="transform opacity-100 translate-y-0" leave-to-class="transform opacity-0 -translate-y-2">
            <div v-show="activeDropdown === 'berita'"
              class="absolute left-0 mt-4 w-60 overflow-hidden bg-white rounded-[8px] md:rounded-[16px] lg:rounded-[24px] shadow-gray-300/5 shadow-xl drop-shadow-[0px_20px_40px_rgba(254, 242, 81, 0.5)] z-50 border-t-[3px] border-primary">
              <div class="">
                <router-link v-for="item in beritaItems" :key="item.name" :to="item.link" @click="navigateTo(item.link)"
                  class="block px-6 py-4 text-[8px] md:text-[10px] lg:text-[14px] text-gray-700 hover:bg-gray-100 transition-colors duration-250 font-sora relative overflow-hidden dropdown-item">
                  {{ item.name }}
                </router-link>
              </div>
            </div>
          </transition>
        </div>

        <router-link to="/contact"
          class="text-[10px] md:text-[12px] lg:text-[16px] p-2 px-3 rounded-full hover:bg-primary hover:text-white transition-colors duration-300 font-sora"
          :class="{
            'bg-primary text-white': activeMenu === 'contact',
            'text-black/60': !isScrolled && activeMenu !== 'contact',
            'text-black/80': isScrolled && activeMenu !== 'contact'
          }">Kontak</router-link>
      </div>

      <div>
        <button
          class="px-6 py-3 border-2 text-[10px] md:text-[12px] lg:text-[16px] font-semibold rounded-full transition-colors duration-300 hover:bg-primary hover:text-white cursor-pointer"
          :class="{
            'border-white text-white': !hasWhiteBackground,
            'border-primary text-primary': hasWhiteBackground
          }">Check
          Now</button>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease, transform 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.dropdown-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 80%;
  height: 1.5px;
  background: linear-gradient(90deg, #6464FA, #0e0e82);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease-in-out;
}

.dropdown-item:hover::after {
  transform: scaleX(1);
}
</style>