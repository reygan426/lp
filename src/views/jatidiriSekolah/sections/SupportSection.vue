<script setup lang="ts">
import ButtonSection from '@/components/ButtonSection.vue';
import TitleSection from '@/components/TitleSection.vue';
import Glow from '@/assets/glow.png'
import Org from '@/assets/org1.png'
import Org2 from '@/assets/org2.png'
import HeroVideoDialog from '@/components/sections/HeroVideoDialog.vue';
</script>

<template>
    <div
        class="py-[32px] px-[20px] md:py-[64px] md:px-[48px] lg:py-[64px] lg:px-[128px] flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 lg:gap-8">
        <div class="w-full md:w-1/2 hidden gap-4 md:flex">
            <div class="w-1/2 h-full space-y-4">
                <div
                    class="w-full h-[220px] flex justify-end items-end relative bg-primary p-2 md:p-3 lg:p-5 rounded-[8px] md:rounded-[16px] lg:rounded-[24px]">
                    <div class="absolute right-0 top-0 z-10">
                        <img :src="Glow" alt="" class="w-full h-full">
                    </div>
                    <h6 class="text-white font-bold text-[16px] md:text-[30px] lg:text-[40px]">Our Supporting</h6>
                </div>

                <div class="w-full h-[340px]">
                    <img :src="Org" alt=""
                        class="w-full h-full object-cover org-box rounded-[8px] md:rounded-[16px] lg:rounded-[24px]">
                </div>
            </div>


            <div class="w-1/2 h-[580px]">
                <HeroVideoDialog
                    :size="'w-full h-[580px] object-cover org2-box rounded-[8px] md:rounded-[16px] lg:rounded-[24px]'"
                    :video-src="`https://www.youtube.com/embed/`" :thumbnail-src="Org2" :thumbnail-alt="`Jatidiri`"
                    animation-style="from-center" />
            </div>
        </div>

        <div class="w-full md:hidden">
            <HeroVideoDialog
                :size="'w-full h-[20vh] org2-box object-cover object-top rounded-[8px] md:rounded-[16px] lg:rounded-[24px'"
                :video-src="`https://www.youtube.com/embed/`" :thumbnail-src="Org2" :thumbnail-alt="`Jatidiri`"
                animation-style="from-center" />
        </div>

        <div class="w-full md:w-1/2 h-full space-y-4 md:space-y-5 lg:space-y-6">
            <TitleSection class="text-primary" :text="'Landasan Hukum dan Regulasi'"></TitleSection>
            <div class="text-[12px] md:text-[14px] lg:text-[18px]">
                <h2 class="font-bold mb-4">Dasar Hukum Pelaksanaan Asesmen Diagnostik</h2>

                <div class="">
                    <h3>1. Undang – undang Nomor 5 Tahun 2024 tentang Kurikulum Merdeka</h3>
                    <ol class="list-disc list-inside pl-4 space-y-1">
                        <li>Pasal 5: Pembelajaran terdiferensiasi sesuai
                            kebutuhan siswa</li>
                        <li>Pasal 8: Kewajiban pelaksanaan asesmen diagnostik
                            berkala</li>
                    </ol>
                </div>

                <div class="">
                    <h3>2. Permendikbud Nomor 16 Tahun 2024</h3>
                    <ol class="list-disc list-inside pl-4 space-y-1">
                        <li>Bagian IV: Pengembangan student agency dan
                            self-directed learning</li>
                        <li>Bagian VI: Standar pelaksanaan asesmen diagnostik
                        </li>
                    </ol>
                </div>

                <div class="">
                    <h3>3. Petunjuk Teknis BOS 2024</h3>
                    <ol class="list-disc list-inside pl-4 space-y-1">
                        <li>Komponen 5: Alokasi dana untuk asesmen diagnostik
                            (15% dari total)</li>
                        <li>Komponen 8: Pengembangan kapasitas siswa</li>
                    </ol>
                </div>
            </div>
            <div class="flex gap-4 lg:gap-6">
                <a href="https://cek.jatidiri.app/login" target="_blank">
                    <ButtonSection>Check Now</ButtonSection>
                </a>
                <ButtonSection bg-color="bg-transparent" bg-hover="bg-secondary" text-color="text-primary"
                    text-hover="text-white" border-color="border-primary" arrow-color="primary" arrow-hover="white">
                    Contact Us</ButtonSection>
            </div>
        </div>
    </div>
</template>

<style scoped>
.org2-box {
    clip-path: polygon(85% 0%, 100% 10%, 100% 100%, 0% 100%, 0% 0%);
}

.org-box {
    clip-path: polygon(100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 0%, 100% 0%);
}
</style>