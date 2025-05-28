<script setup lang="ts">
import { defineProps } from 'vue'
import TextBody from '@/components/TextBody.vue'
import TitleSection from '@/components/TitleSection.vue';
import ButtonSection from '@/components/ButtonSection.vue';

defineProps<{
  agenda: {
    title: string
    description?: string
    image: string
    start_date: string
    location: string
    contact: string
    event: string
  }
}>()

const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr)
  return isNaN(date.getTime())
    ? '-'
    : date.toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
}

// const getImageUrl = (path: string): string => {
//   if (path.startsWith('http://') || path.startsWith('https://')) return path
//   return path.startsWith('/') ? path : '/' + path
// }
</script>

<template>
  <div class="space-y-6 md:space-y-10 lg:space-y-12 px-8 py-8 w-full h-full">
    <div class="w-full h-[50vh] rounded-[16px] md:rounded-[24px] lg:rounded-[32px]">
      <img :src="agenda?.image || ''" alt="Event banner image"
        class="w-full h-full object-cover object-center rounded-[16px] md:rounded-[24px] lg:rounded-[32px]" />
    </div>

    <div class="w-full flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
      <div class="w-full space-y-4 md:space-y-6 lg:space-y-8">
        <TitleSection :text="agenda?.title"></TitleSection>
        <ButtonSection>Register</ButtonSection>
      </div>

      <div class="w-full space-y-4 md:space-y-6 lg:space-y-8">
        <div class="grid grid-cols-2 gap-4 md:gap-8 w-full">
          <div class="list_item flex flex-col items-start gap-1 md:gap-2">
            <h3 class="text-black text-lg md:text-xl font-bold">Tanggal</h3>
            <TextBody>{{ formatDate(agenda?.start_date || '') }}</TextBody>
          </div>
          <div class="list_item flex flex-col items-start gap-1 md:gap-2">
            <h3 class="text-black text-lg md:text-xl font-bold">Lokasi</h3>
            <TextBody>{{ agenda?.location }}</TextBody>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4 md:gap-8 w-full">
          <div class="list_item flex flex-col items-start gap-1 md:gap-2">
            <h3 class="text-black text-lg md:text-xl font-bold">Narahubung</h3>
            <TextBody>{{ agenda?.contact }}</TextBody>
          </div>
          <div class="list_item flex flex-col items-start gap-1 md:gap-2">
            <h3 class="text-black text-lg md:text-xl font-bold">Event</h3>
            <TextBody>{{ agenda?.event }}</TextBody>
          </div>
        </div>
      </div>
    </div>
    <!-- <div
      class="lg:h-[20vh] rounded-[16px] md:rounded-[24px] lg:rounded-[32px] overflow-hidden"
    >
      <img
        :src="agenda?.image || ''"
        alt="Event banner image"
        class="w-full h-full object-cover object-center"
      />
    </div> -->

    <!-- <div class="flex flex-col lg:flex-row items-start gap-10 md:gap-20 border">
      <div class="md:w-[60%] column flex flex-col items-start gap-6 md:gap-8 w-full order-1">
        <div class="flex flex-col items-start gap-4 md:gap-6 border">
          <TitleSection :text="agenda?.title"></TitleSection>
        </div>
        <div class="flex flex-row items-start gap-3 md:gap-4">
          <button :text="'Daftar'" />
          <button
            :bg-color="'bg-transparent'"
            :bg-hover="'bg-primary'"
            :border-color="'border-primary'"
            :text="'Lihat Acara'"
            :text-color="'text-primary'"
            :text-hover="'group-hover:text-white'"
          />
        </div>
      </div>

      <div
        class="flex flex-col items-start gap-6 md:gap-8 w-full lg:w-[464px] order-2 sm:order-3 lg:order-2"
      >
        <div class="grid grid-cols-2 gap-4 md:gap-8 w-full">
          <div class="list_item flex flex-col items-start gap-1 md:gap-2">
            <h3 class="text-black text-lg md:text-xl font-bold">Tanggal</h3>
            <TextBody>{{ formatDate(agenda?.start_date || '') }}</TextBody>
          </div>
          <div class="list_item flex flex-col items-start gap-1 md:gap-2">
            <h3 class="text-black text-lg md:text-xl font-bold">Lokasi</h3>
            <TextBody>{{ agenda?.location }}</TextBody>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4 md:gap-8 w-full">
          <div class="list_item flex flex-col items-start gap-1 md:gap-2">
            <h3 class="text-black text-lg md:text-xl font-bold">Narahubung</h3>
            <TextBody>{{ agenda?.contact }}</TextBody>
          </div>
          <div class="list_item flex flex-col items-start gap-1 md:gap-2">
            <h3 class="text-black text-lg md:text-xl font-bold">Event</h3>
            <TextBody>{{ agenda?.event }}</TextBody>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>
