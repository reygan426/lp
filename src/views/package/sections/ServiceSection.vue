<script setup lang="ts">
import TextSection from '@/components/TextSection.vue';
import TitleSection from '@/components/TitleSection.vue';
import Card from '@/assets/service.png'
import CardMobile from '@/assets/service-mobile.png'
import Arrow from "@/assets/icon/arrow.svg"
import TextBody from '@/components/TextBody.vue';
import ButtonSection from '@/components/ButtonSection.vue';
import Chart1 from '@/assets/Chart.png'
import Chart2 from '@/assets/Chart2.png'

// Dummy data for services
const services = [
    {
        id: 1,
        number: "01",
        title: "Jatidiri Sekolah",
        description: "Tingkatkan layanan konseling dan karakter siswa bersama Jatidiri.app! Solusi digital terpercaya untuk tes minat, bakat, dan konseling online yang mendukung Kurikulum Merdeka. Praktis, akurat, dan dirancang khusus untuk kebutuhan sekolah Anda.",
        chart: Chart1,
        reverse: false,
        link: '/program/jatidiri-sekolah'
    }
    ,
    {
        id: 2,
        number: "02",
        title: "Jatidiri Corporate",
        description: "Optimalkan potensi karyawan melalui solusi asesmen dan konseling berbasis data. Jatidiri Corporate membantu perusahaan memahami karakter, minat, dan kompetensi individu untuk meningkatkan kinerja dan kesejahteraan tim secara menyeluruh.",
        chart: Chart2,
        reverse: true,
        link: '/program/jatidiri-corporate'
    }
    ,
    {
        id: 3,
        number: "03",
        title: "Jatidiri University",
        description: "Jatidiri University adalah platform teknologi dan psikologi untuk pengembangan diri mahasiswa, dosen, dan institusi pendidikan tinggi. Platform ini menyediakan tes dan konseling untuk meningkatkan kualitas belajar, kesejahteraan mental, serta menghasilkan lulusan berdaya saing global.",
        chart: Chart1,
        reverse: false,
        link: '/program/jatidiri-university'
    }
    ,
    {
        id: 4,
        number: "04",
        title: "Jatidiri Keluarga",
        description: "Bangun keharmonisan keluarga lewat pemahaman yang lebih dalam. Jatidiri Keluarga hadir dengan tes psikologis dan layanan konseling yang membantu orang tua, anak, dan seluruh anggota keluarga tumbuh bersama dengan bahagia.",
        chart: Chart2,
        reverse: true,
        link: '/program/jatidiri-keluarga'
    }
    ,
    {
        id: 5,
        number: "05",
        title: "Jatidiriku",
        description: "Kenali dirimu lebih dalam dan temukan arah hidup yang tepat. Dengan tes psikologis dan konseling personal dari Jatidiri, kamu bisa memahami potensi, minat, dan karakter untuk meraih versi terbaik dari dirimu.",
        chart: Chart1,
        reverse: false,
        link: '/program/jatidiri-ku'
    },
    {
        id: 6,
        number: "06",
        title: "Pelatihan Peer Konselor",
        description: "Kenali dirimu lebih dalam dan jadi pendengar yang berdampak. Dengan Pelatihan Peer Konselor dari Jatidiri, kamu tidak hanya memahami potensi dan karakter dirimu sendiri, tapi juga belajar mendampingi orang lain dalam menemukan arah hidupnya.",
        chart: Chart2,
        reverse: true,
        link: '/pelatihan-konselor'
    }
]
</script>

<template>
    <div class="py-[32px] px-[20px] md:py-[64px] md:px-[40px] lg:p-[120px] space-y-6 md:space-y-10 lg:space-y-16">
        <div class="w-full md:w-1/2 flex flex-col justify-center items-center text-center space-y-4 mx-auto">
            <div class="w-fit py-2 px-5 bg-primary/10 rounded-[16px] md:rounded-[24px] lg:rounded-[32px]">
                <p class="text-primary text-sm lg:text-base">Our Package</p>
            </div>
            <TitleSection :text="'Layanan Jatidiri.App'"></TitleSection>
            <TextSection>Layanan Terintegrasi untuk Beragam Kebutuhan Pengembangan Karakter dan Potensi</TextSection>
        </div>

        <template v-for="service in services" :key="service.id">
            <div class="w-full flex flex-col justify-center items-center gap-6 md:gap-10 lg:gap-16"
                :class="service.reverse ? 'md:flex-row-reverse' : 'md:flex-row'">
                <div
                    class="w-full md:w-1/2 h-[220px] md:h-[320px] lg:h-[520px] relative group hover:-translate-y-3 transition duration-500 flex items-center justify-center">
                    <div class="absolute inset-0 hidden md:block">
                        <img :src="Card" alt="" class="w-full h-full">
                    </div>

                    <div class="absolute inset-0 md:hidden">
                        <img :src="CardMobile" alt="" class="w-full h-full">
                    </div>

                    <div class="relative z-10 h-[200px] md:h-[260px] lg:h-[380px]">
                        <img :src="service.chart" alt="" class="w-full h-full">
                    </div>

                    <div class="absolute top-0 right-0 bg-white p-3 lg:p-4 rounded-full overflow-hidden z-10 group">
                        <img :src="Arrow" alt=""
                            class="w-2 h-2 lg:w-4 lg:h-4 transition-all duration-500 group-hover:-translate-y-8 group-hover:translate-x-8 group-hover:opacity-0">
                        <img :src="Arrow" alt=""
                            class="w-2 h-2 lg:w-4 lg:h-4 absolute top-4 left-4 translate-y-8 -translate-x-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100">
                    </div>

                    <div class="absolute bottom-0 left-0 z-10">
                        <h3 class="text-[16px] md:text-[30px] lg:text-[40px] font-bold text-primary">{{ service.number
                        }}</h3>
                    </div>
                </div>

                <div class="w-full md:w-1/2 space-y-4 md:space-y-5 lg:space-y-6">
                    <TitleSection weight="font-light" :text="service.title"></TitleSection>

                    <div class="space-y-4 md:space-y-6 lg:space-y-8">
                        <TextBody>{{ service.description }}</TextBody>
                    </div>

                    <div class="flex gap-4 lg:gap-6">
                        <a href="https://cek.jatidiri.app" target="_blank">
                            <ButtonSection>Check Now</ButtonSection>
                        </a>
                        <a :href="service.link">
                            <ButtonSection bg-color="bg-transparent" bg-hover="bg-secondary" text-color="text-primary"
                                text-hover="text-white" border-color="border-primary" arrow-color="primary"
                                arrow-hover="white">
                                Know More</ButtonSection>
                        </a>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>