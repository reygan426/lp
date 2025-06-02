<script setup lang="ts">
import TextBody from '@/components/TextBody.vue';
import TitleSection from '@/components/TitleSection.vue';
import { ref } from 'vue';
import type { Identity } from '@/core/types/identity';

const props = defineProps<{
    identity: Identity[]
}>();

const formData = ref({
    name: '',
    email: '',
    issues: '',
    message: ''
});

const sendToWhatsApp = () => {
    if (!props.identity || props.identity.length === 0) return;
    
    const phone = props.identity[0].phone;
    const text = `Halo Jatidiri.App,\n\nSaya ${formData.value.name} ingin bergabung/mengajukan pertanyaan:\n\n` +
                 `Email: ${formData.value.email}\n` +
                 `Issues: ${formData.value.issues}\n` +
                 `Pesan: ${formData.value.message}\n\n` +
                 `Terima kasih.`;
    
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
    
    formData.value = {
        name: '',
        email: '',
        issues: '',
        message: ''
    };
};
</script>

<template>
    <div
        class="py-[32px] px-[20px] md:py-[64px] md:px-[40px] lg:px-0 lg:py-[32px] w-full flex justify-center items-center text-center">
        <div class="w-full md:w-1/2 space-y-8 md:space-y-12 lg:space-y-[60px]">
            <div class="w-full md:w-[60%] mx-auto space-y-4 md:space-y-6 lg:space-y-8">
                <TitleSection :text="'Ayo Jadi Bagian dari Jatidiri.App'" />
            </div>

            <div
                class="p-4 lg:p-14 bg-white rounded-[8px] md:rounded-[16px] lg:rounded-[24px] w-full text-left space-y-4 md:space-y-5 lg:space-y-6 font-sora">
                <div class="space-y-2 lg:space-y-4">
                    <TextBody class="text-black/40 uppercase" weight-text="font-medium">NAMA</TextBody>
                    <input v-model="formData.name" type="text"
                        class="w-full px-4 py-3 border border-black/40 rounded-[4px] md:rounded-[8px] lg:rounded-[16px] text-black">
                </div>
                <div class="space-y-2 lg:space-y-4">
                    <TextBody class="text-black/40 uppercase" weight-text="font-medium">EMAIL</TextBody>
                    <input v-model="formData.email" type="email"
                        class="w-full px-4 py-3 border border-black/40 rounded-[4px] md:rounded-[8px] lg:rounded-[16px] text-black">
                </div>
                <div class="space-y-2 lg:space-y-4">
                    <TextBody class="text-black/40 uppercase" weight-text="font-medium">ISSUES</TextBody>
                    <input v-model="formData.issues" type="text"
                        class="w-full px-4 py-3 border border-black/40 rounded-[4px] md:rounded-[8px] lg:rounded-[16px] text-black">
                </div>
                <div class="space-y-2 lg:space-y-4">
                    <TextBody class="text-black/40 uppercase" weight-text="font-medium">PESAN</TextBody>
                    <textarea v-model="formData.message" rows="8" cols="50"
                        class="w-full px-4 py-3 border border-black/40 rounded-[4px] md:rounded-[8px] lg:rounded-[16px] text-black"></textarea>
                </div>
                <div class="w-full">
                    <button @click="sendToWhatsApp"
                        class="w-full bg-primary hover:bg-secondary py-3 text-white text-[12px] md:text-[14px] lg:text-[18px] rounded-full">Kirim</button>
                </div>
            </div>
        </div>
    </div>
</template>