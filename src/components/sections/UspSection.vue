<script setup lang="ts">
import ButtonSection from '../ButtonSection.vue';
import TextSection from '../TextSection.vue';
import TitleSection from '../TitleSection.vue';
import UspCard from '../UspCard.vue';
import Usp from "@/assets/icon/usp.png"
import Love from '@/assets/icon/love.png'
import Doc from '@/assets/icon/doc.png'

const uspItems = [
    {
        title: "Jatidiri.app",
        description: "Super aplikasi psikologi yang bertujuan untuk membantu individu memahami diri mereka lebih baik. Dikembangkan oleh para Ahli Psikologi, Pendidikan, dan IT.",
        icon: Usp
    },
    {
        title: "Spesial Untuk Indonesia",
        description: "Tes divalidasi dan dinormakan khusus untuk populasi Indonesia, sehingga hasilnya lebih akurat dan relevan untuk pendidikan dan pengembangan karir.",
        icon: Love
    },
    {
        title: "Psikolog dan Konselor Berpengalaman",
        description: "Tim kami terdiri dari para profesional terlatih dan berpengalaman yang siap membantu Anda dengan penuh empati dan tanpa menghakimi.",
        icon: Doc
    }
];
</script>

<template>
    <div class="w-full py-[20px] px-[20px] md:py-[40px] md:px-[80px] lg:py-[120px] lg:px-[154px] space-y-7">
        <div class="w-full md:w-1/2 lg:w-3/5 flex flex-col justify-center items-center text-center space-y-4 mx-auto">
            <TextSection class="text-primary">Kenali Diri, Kembangkan Potensi, Wujudkan Mimpi!</TextSection>
            <TitleSection :text="'Kenali Potensi Diri Lewat Jatidiri.App'"></TitleSection>
            <div class="flex gap-4 lg:gap-6">
                <a href="https://cek.jatidiri.app/login" target="_blank">
                    <ButtonSection>Check Now</ButtonSection>
                </a>
                <ButtonSection bg-color="bg-transparent" bg-hover="bg-secondary" text-color="text-primary"
                    text-hover="text-white" border-color="border-primary" arrow-color="primary" arrow-hover="white">
                    Contact Us</ButtonSection>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <UspCard v-for="(item, index) in uspItems" :key="index" :title="item.title" :description="item.description"
                :icon="item.icon" :class="{ 'mt-0 md:mt-8 lg:mt-16': index === 1 }"></UspCard>
        </div>
    </div>
</template>