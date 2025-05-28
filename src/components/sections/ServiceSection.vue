<script >
import ButtonSection from '@/components/ButtonSection.vue'
import TextBody from '@/components/TextBody.vue'
import TitleSection from '@/components/TitleSection.vue'
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

export default {
    components: {
        TitleSection,
        TextBody,
        ButtonSection
    },
    setup() {
        const macWindow = ref(null)
        const isScrolled = ref(false)
        const activeTab = ref(0)
        const isTransitioning = ref(false)
        const contentKey = ref(0)

        const tabs = [
            {
                title: "Jatidiri Sekolah",
                image: 'https://static.promediateknologi.id/crop/220x0:1292x935/0x0/webp/photo/p2/238/2024/07/08/excited-primary-school-kids-wearing-uniforms-carrying-backpack-running-cheerfully_603656-3668-1906711789.jpg',
                content: "Jatidiri.app adalah platform revolusioner yang menggabungkan teknologi mutakhir dengan layanan psikologi profesional untuk membantu individu, keluarga, institusi pendidikan, dan perusahaan memahami potensi diri, meningkatkan kualitas hidup, dan membangun sumber daya manusia yang berdaya saing. <br> Jatidiri.app sejalan dengan misi ini, menyediakan tes dan konseling online yang membantu sekolah menerapkan pendidikan berdiferensiasi sesuai Kurikulum Merdeka. Dengan fitur -fitur yang disesuaikan dengan kebutuhan sekolah, Jatidiri.app adalah mitra tepat untuk mendukung kebutuhan konseling, karakter siswa, dan prestasi akademik sekolah.",
                features: ["Test Bakat & Karakter", "Test Gaya Belajar", "Test Kecanduan Gadget", 'Test Kemampuan Kognitif']
            },
            {
                title: "Jatidiri Corporate",
                image: 'https://static.promediateknologi.id/crop/220x0:1292x935/0x0/webp/photo/p2/238/2024/07/08/excited-primary-school-kids-wearing-uniforms-carrying-backpack-running-cheerfully_603656-3668-1906711789.jpg',
                content: "Jatidiri Corporate adalah solusi inovatif yang menggabungkan teknologi psikometri dan layanan psikologi profesional untuk perusahaan. Kami membantu organisasi memahami potensi karyawan, meningkatkan produktivitas, serta menciptakan lingkungan kerja yang sehat dan berdaya saing tinggi. <br> Dengan fitur tes dan konseling berbasis data, Jatidiri Corporate menjadi mitra strategis untuk pengembangan SDM, rekrutmen yang lebih tepat, hingga peningkatan loyalitas dan kinerja karyawan.",
                features: ["Tes Potensi dan Karakter", "Tes Kecocokan Karier", "Tes Kepemimpinan dan Kolaborasi", 'Tes Kemampuan Kognitif']
            },
            {
                title: "Jatidiri Keluarga",
                image: 'https://static.promediateknologi.id/crop/220x0:1292x935/0x0/webp/photo/p2/238/2024/07/08/excited-primary-school-kids-wearing-uniforms-carrying-backpack-running-cheerfully_603656-3668-1906711789.jpg',
                content: "Jatidiri Keluarga adalah platform yang dirancang untuk membantu keluarga membangun hubungan yang harmonis, memahami dinamika emosi, dan mendukung tumbuh kembang anak secara optimal. Kami hadir dengan layanan tes dan konseling berbasis psikologi profesional yang bisa diakses secara fleksibel dan personal. <br> Dengan pendekatan yang disesuaikan untuk tiap anggota keluarga, Jatidiri Keluarga menjadi mitra terpercaya dalam menciptakan rumah yang penuh empati, komunikasi efektif, dan kesejahteraan mental.",
                features: ["Tes Potensi dan Karakter", "Konseling Keluarga", "Konseling Pengembangan Diri", 'Tes Kesehatan Mental Keluarga']
            },
            {
                title: "Jatidiri Ku",
                image: 'https://static.promediateknologi.id/crop/220x0:1292x935/0x0/webp/photo/p2/238/2024/07/08/excited-primary-school-kids-wearing-uniforms-carrying-backpack-running-cheerfully_603656-3668-1906711789.jpg',
                content: "Jatidiriku adalah layanan personalisasi psikologis untuk kamu yang ingin mengenal diri lebih dalam. Melalui pendekatan berbasis data dan profesional, kami bantu kamu memahami kekuatan pribadi, pola pikir, dan arah kehidupan yang paling sesuai. <br> Dapatkan panduan untuk mengambil keputusan lebih tepat dalam studi, karier, relasi, dan pengembangan diri melalui tes dan konseling yang dirancang khusus untuk kebutuhanmu.",
                features: ["Tes Potensi dan Karakter", "Tes Minat dan Bakat", "Konseling Pengembangan Diri", 'Tes Kemampuan Kognitif']
            },
        ]

        const handleScroll = () => {
            if (!macWindow.value) return

            const elementTop = macWindow.value.getBoundingClientRect().top
            const windowHeight = window.innerHeight

            isScrolled.value = elementTop < windowHeight * 0.6
        }

        const setActiveTab = async (index) => {
            if (index === activeTab.value || isTransitioning.value) return

            isTransitioning.value = true

            await nextTick()

            setTimeout(() => {
                activeTab.value = index
                contentKey.value++

                setTimeout(() => {
                    isTransitioning.value = false
                }, 100)
            }, 150)
        }

        onMounted(() => {
            window.addEventListener('scroll', handleScroll)
            handleScroll()
        })

        onUnmounted(() => {
            window.removeEventListener('scroll', handleScroll)
        })

        const isLastTab = (index) => {
            return index === tabs.length - 1;
        }

        const isFirstTab = (index) => {
            return index === 0;
        }

        return {
            macWindow,
            isScrolled,
            activeTab,
            tabs,
            setActiveTab,
            isTransitioning,
            contentKey,
            isLastTab,
            isFirstTab
        }
    }
}
</script>

<template>
    <div class="w-full h-full py-[80px]">
        <div ref="macWindow"
            class="max-w-[90%] bg-white mx-auto transition-all duration-500 ease-in-out space-y-4 md:space-y-6 lg:space-y-8 rounded-[8px] md:rounded-[16px] lg:rounded-[24px]"
            :class="{ 'max-w-full': isScrolled }">
            <div class="w-full flex flex-col items-center justify-center p-10 gap-4">
                <div class=" bg-[#835EFF] w-fit py-2 px-5 rounded-full">
                    <h6 class="text-[10px] md:text-[12px] lg:text-[16px] text-white">About Us</h6>
                </div>
                <TitleSection class="text-primary" :text="'Layanan Jatidiri.App'"></TitleSection>
            </div>

            <div class="w-full md:w-[80%] h-full mx-auto p-2 md:pb-4 lg:pb-12">
                <div class="w-full h-full bg-primary rounded-[8px] md:rounded-[16px] lg:rounded-[24px]">
                    <div class="w-full px-1 pt-1">
                        <div class="w-full grid grid-cols-4 text-center">
                            <div v-for="(tab, index) in tabs" :key="index"
                                class="p-1 lg:p-4 text-white cursor-pointer transition-all duration-300 ease-in-out transform relative overflow-hidden"
                                :class="{
                                    'bg-[#9898FC] rounded-t-[8px] md:rounded-t-[16px] lg:rounded-t-[24px] tab-active': activeTab === index,
                                    '': activeTab !== index
                                }" @click="setActiveTab(index)">
                                <span class="relative z-10 text-[8px] md:text-[12px] lg:text-[20px] font-sora">{{
                                    tab.title }}</span>
                            <div class="absolute inset-0 bg-[#9898FC] transition-transform duration-300 ease-in-out rounded-t-[8px] md:rounded-t-[16px] lg:rounded-t-[24px]"
                                :class="activeTab === index ? 'translate-y-0' : 'translate-y-full'"></div>
                            </div>
                        </div>
                    </div>

                    <!-- Konten -->
                    <div class="w-full h-full px-1 pb-1">
                        <div class="w-full bg-[#9898FC] h-full p-4 md:p-6 lg:p-8 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 lg:gap-8 rounded-b-[8px] md:rounded-b-[16px] lg:rounded-b-[24px] transition-all duration-300 ease-in-out overflow-hidden"
                            :class="{
                                'rounded-tr-[8px] md:rounded-tr-[16px] lg:rounded-tr-[24px]': isFirstTab(activeTab),
                                'rounded-t-[8px] md:rounded-t-[16px] lg:rounded-t-[24px]': !isFirstTab(activeTab) && !isLastTab(activeTab),
                                'rounded-tl-[8px] md:rounded-tl-[16px] lg:rounded-tl-[24px]': isLastTab(activeTab),
                                'opacity-70': isTransitioning
                            }" :key="contentKey">
                            <div class="w-full md:w-[40%] group overflow-hidden animate-slide-in-right">
                                <img :src="tabs[activeTab].image" alt=""
                                    class="w-full h-[180px] md:h-[280px] lg:h-[450px] object-cover object-top group-hover:scale-105 transition duration-500 rounded-[4px] md:rounded-[8px] lg:rounded-[16px]">
                            </div>

                            <div class="w-full md:w-[60%] text-white space-y-4 lg:space-y-4">
                                <h4 class="text-[18px] md:text-[24px] lg:text-[32px] animate-slide-in-top">{{
                                    tabs[activeTab].title }}</h4>
                                <TextBody class="font-light animate-slide-in-left"><span class="font-light" v-html="tabs[activeTab].content"></span></TextBody>
                                <div class="grid grid-cols-2 gap-4 md:gap-5 lg:gap-6 animate-slide-in-left">
                                    <div v-for="(feature, index) in tabs[activeTab].features" :key="index"
                                        class="flex gap-2 items-center"
                                        :style="{ animationDelay: `${index * 100}ms` }">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            class="w-6 h-6 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        <TextBody>{{ feature }}</TextBody>
                                    </div>
                                </div>
                                <div class="pt-4 md:pt-6 lg:pt-8 animate-slide-in-bottom">
                                    <ButtonSection>Know More</ButtonSection>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.tab-active {
    animation: tabSlideIn 0.8s ease-in-out;
}

@keyframes tabSlideIn {
    from {
        transform: translateY(0px);
        opacity: 0.8;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}

/* Content animations */
@keyframes slideInRight {
    from {
        transform: translateX(-50px);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slideInTop {
    from {
        transform: translateY(-50px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes slideInLeft {
    from {
        transform: translateX(50px);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slideInBottom {
    from {
        transform: translateY(50px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes fadeInFeature {
    from {
        transform: scale(0.8);
        opacity: 0;
    }

    to {
        transform: scale(1);
        opacity: 1;
    }
}

/* Animation classes */
.animate-slide-in-right {
    animation: slideInRight 0.6s ease-out;
}

.animate-slide-in-top {
    animation: slideInTop 0.6s ease-out 0.1s both;
}

.animate-slide-in-left {
    animation: slideInLeft 0.6s ease-out 0.2s both;
}

.animate-slide-in-bottom {
    animation: slideInBottom 0.6s ease-out 0.3s both;
}

.animate-fade-in-feature {
    animation: fadeInFeature 0.6s ease-out both;
}
</style>