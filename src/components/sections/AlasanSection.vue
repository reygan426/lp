<script setup lang="ts">
import { ref } from 'vue';
import TextSection from '../TextSection.vue';
import TitleSection from '../TitleSection.vue';

const activeTab = ref(0);
const isMobileDropdownOpen = ref(false);

const tabs = [
    {
        title: 'Hasil Test Lengkap & Akurat',
        number: '[01]',
        content: {
            image: 'https://img.freepik.com/free-photo/people-posing-together-registration-day_23-2149096794.jpg?semt=ais_hybrid&w=740',
            title: 'Hasil Test Lengkap & Akurat',
            description: 'Tes kami telah diuji oleh ribuan pengguna dan diakui oleh psikolog profesional. Hasil tes yang Anda dapatkan mencakup berbagai aspek penting yang dirancang untuk membantu pengembangan siswa, termasuk: Peta Potensi Siswa termasuk kekuatan & kelemahan, Rekomendasi Pendidikan dan Karir, Gambaran Karakter, Strategi Memotivasi, Gaya Belajar dan Pola Asuh, Strategi Mengatasi Stres'
        }
    },
    {
        title: 'Dashboard Eksekutif',
        number: '[02]',
        content: {
            image: 'https://img.freepik.com/free-photo/people-posing-together-registration-day_23-2149096794.jpg?semt=ais_hybrid&w=740',
            title: 'Dashboard Eksekutif',
            description: 'Dashboard komprehensif yang memberikan gambaran menyeluruh tentang hasil tes seluruh siswa. Fitur ini memungkinkan kepala sekolah dan administrator untuk memantau perkembangan siswa secara real-time, mengidentifikasi pola dan tren, serta membuat keputusan strategis berdasarkan data yang akurat untuk meningkatkan kualitas pendidikan di sekolah.'
        }
    },
    {
        title: 'Layanan HalloPsy',
        number: '[03]',
        content: {
            image: 'https://img.freepik.com/free-photo/people-posing-together-registration-day_23-2149096794.jpg?semt=ais_hybrid&w=740',
            title: 'Layanan HalloPsy',
            description: 'Akses langsung ke konsultasi dengan psikolog profesional melalui platform digital. Layanan ini memberikan dukungan psikologis tambahan bagi siswa yang memerlukan bimbingan lebih lanjut. Dengan HalloPsy, sekolah dapat memastikan kesehatan mental siswa terjaga dengan baik melalui sesi konseling yang mudah diakses dan terpercaya.'
        }
    },
    {
        title: 'Biaya Terjangkau',
        number: '[04]',
        content: {
            image: 'https://img.freepik.com/free-photo/people-posing-together-registration-day_23-2149096794.jpg?semt=ais_hybrid&w=740',
            title: 'Biaya Terjangkau',
            description: 'Kami menawarkan paket harga yang kompetitif dan fleksibel, disesuaikan dengan kebutuhan dan anggaran sekolah. Dengan berbagai pilihan paket, mulai dari tes individual hingga tes massal untuk seluruh sekolah, kami memastikan bahwa setiap institusi pendidikan dapat mengakses layanan berkualitas tanpa membebani anggaran operasional.'
        }
    },
    {
        title: 'Hasil Cepat, Bisa Masal',
        number: '[05]',
        content: {
            image: 'https://img.freepik.com/free-photo/people-posing-together-registration-day_23-2149096794.jpg?semt=ais_hybrid&w=740',
            title: 'Hasil Cepat, Bisa Masal',
            description: 'Sistem otomatis kami mampu memproses hasil tes dalam waktu singkat, bahkan untuk ribuan siswa sekaligus. Dengan teknologi canggih dan algoritma yang telah teruji, sekolah dapat memperoleh laporan komprehensif dalam hitungan hari, bukan minggu. Efisiensi ini memungkinkan implementasi yang cepat dan pengambilan tindakan yang tepat waktu.'
        }
    }
];

const setActiveTab = (index: number) => {
    activeTab.value = index;
    isMobileDropdownOpen.value = false;
};

const toggleMobileDropdown = () => {
    isMobileDropdownOpen.value = !isMobileDropdownOpen.value;
};
</script>

<template>
    <div
        class="py-[32px] px-[20px] md:py-[64px] md:px-[48px] lg:py-[120px] lg:px-[120px] space-y-6 md:space-y-10 lg:space-y-16">
        <div
            class="w-full md:w-1/2 mx-auto flex flex-col justify-center items-center text-center gap-4 md:gap-5 lg:gap-6">
            <div class=" bg-primary/10 w-fit py-2 px-5 rounded-full">
                <h6 class="text-[10px] md:text-[12px] lg:text-[16px] text-primary">Why</h6>
            </div>
            <TitleSection :text="'Alasan Harus MenggunakanJatidiri Sekolah'"></TitleSection>
        </div>

        <div class="w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 lg:gap-8">
            <!-- Tab Dekstop-->
            <div class="w-full md:w-1/2 hidden md:block">
                <div v-for="(tab, index) in tabs" :key="index"
                    class="py-3 md:py-6 flex gap-5 items-center cursor-pointer border-beam-container transition-all duration-300 ease-in-out"
                    @click="setActiveTab(index)">
                    <a class="font-sora text-[22px] md:text-[34px] lg:text-[46px] font-bold transition-all duration-300 ease-in-out"
                        :class="activeTab === index ? 'text-black' : 'text-black/25 hover:text-black/50'">
                        {{ tab.title }}
                    </a>
                    <TextSection class="transition-all duration-300 ease-in-out"
                        :class="activeTab === index ? 'opacity-100 text-primary' : 'opacity-50 text-black/25'">
                        {{ tab.number }}
                    </TextSection>
                </div>
            </div>

            <!-- Tab Mobile -->
            <div class="w-full md:w-1/2 md:hidden relative">
                <div class="py-3 md:py-6 flex gap-5 items-center border-beam-container cursor-pointer transition-all duration-300 ease-in-out"
                    @click="toggleMobileDropdown">
                    <a class="font-sora text-[22px] md:text-[34px] lg:text-[46px] font-bold transition-all duration-300 ease-in-out text-black">
                        {{ tabs[activeTab].title }}
                    </a>
                    <svg class="w-6 h-6 transition-transform duration-300" 
                         :class="{ 'rotate-180': isMobileDropdownOpen }" 
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                </div>
                
                <Transition name="dropdown">
                    <div v-if="isMobileDropdownOpen" class="absolute left-0 right-0 bg-white z-10 shadow-lg rounded-lg">
                        <div v-for="(tab, index) in tabs" :key="index"
                            class="py-4 px-4 border-b border-gray-200 cursor-pointer transition-all duration-300 ease-in-out"
                            @click="setActiveTab(index)">
                            <a class="font-sora text-[18px] font-bold transition-all duration-300 ease-in-out"
                                :class="activeTab === index ? 'text-primary' : 'text-black/75 hover:text-black'">
                                {{ tab.title }}
                            </a>
                        </div>
                    </div>
                </Transition>
            </div>

            <!-- Konten Tab -->
            <div class="w-full md:w-1/2 relative overflow-hidden">
                <Transition name="tab-content" mode="out-in" appear>
                    <div :key="activeTab" class="tab-content-wrapper space-y-4 md:space-y-5 lg:space-y-6">
                        <img :src="tabs[activeTab].content.image" alt=""
                            class="w-full h-[160px] md:h-[280px] object-cover rounded-[8px] md:rounded-[16px] lg:rounded-[24px] transform transition-transform duration-500 ease-out">
                        <div class="space-y-2">
                            <p
                                class="text-black font-semibold font-sora text-[18px] md:text-[20px] lg:text-[24px] transform transition-transform duration-500 ease-out delay-100">
                                {{ tabs[activeTab].content.title }}
                            </p>
                            <TextSection class="transform transition-transform duration-500 ease-out delay-200">
                                {{ tabs[activeTab].content.description }}
                            </TextSection>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
    </div>
</template>

<style scoped>

.border-beam-container {
  position: relative;
  overflow: hidden;
}

.border-beam-container::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: -30%;
  height: 2px;
  background: linear-gradient(to right, transparent, transparent 25%, #6464FA 50%, transparent 75%, transparent);
  width: 80%;
  animation: borderWalkBottom 2.0s infinite linear;
}

@keyframes borderWalkBottom {
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(600%);
  }
}

/* Animasi untuk perpindahan konten tab */
.tab-content-enter-active,
.tab-content-leave-active {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.tab-content-enter-from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
}

.tab-content-leave-to {
    opacity: 0;
    transform: translateY(-20px) scale(1.05);
}

.tab-content-enter-to,
.tab-content-leave-from {
    opacity: 1;
    transform: translateY(0) scale(1);
}

/* Animasi tambahan untuk elemen dalam konten */
.tab-content-wrapper>* {
    animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    opacity: 0;
    transform: translateY(15px);
}

.tab-content-wrapper>*:nth-child(1) {
    animation-delay: 0.1s;
}

.tab-content-wrapper>*:nth-child(2) {
    animation-delay: 0.2s;
}

.tab-content-wrapper>*:nth-child(3) {
    animation-delay: 0.3s;
}

/* Animasi dropdown mobile */
.dropdown-enter-active,
.dropdown-leave-active {
    transition: all 0.3s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}

@keyframes slideInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Animasi hover untuk tab items */
.cursor-pointer:hover {
    transform: translateX(4px);
}
</style>