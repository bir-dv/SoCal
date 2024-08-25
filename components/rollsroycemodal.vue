<template>
    <div v-show="modalActive" @click="$emit('close-model')" class="relative flex justify-center " style="z-index:999">

        <div v-if="modalActive" x-transition:enter="transition duration-300 ease-out"
            x-transition:enter-start="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
            x-transition:enter-end="translate-y-0 opacity-100 sm:scale-100"
            x-transition:leave="transition duration-150 ease-in"
            x-transition:leave-start="translate-y-0 opacity-100 sm:scale-100"
            x-transition:leave-end="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
            class="backdrop-blur-lg fixed inset-0 z-10 overflow-y-auto" aria-labelledby="modal-title" role="dialog"
            aria-modal="true">
            <UCarousel @click.stop v-slot="{ item }" :items="items" :ui="{
                item: 'basis-full',
                container: 'rounded-lg'
            }" :prev-button="{
                color: 'gray',
                icon: 'i-heroicons-arrow-left-20-solid',
                class: '-left-10'
            }" :next-button="{
                color: 'gray',
                icon: 'i-heroicons-arrow-right-20-solid',
                class: '-right-10'
            }" arrows draggable="false" class="lg:w-2/5 sm:w-80 mx-auto">
                <div class="flex items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0 mx-auto">
                    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                    <div
                        class="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:align-middle sm:max-w-md  sm:w-full sm:p-6">
                        <button style="z-index:999;" @click="$emit('close-model')" type="button"
                            class="absolute top-0 end-2.5 text-gray-400 bg-transparent  hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-hide="static-modal">
                            <svg class=" w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span class="sr-only">Close modal</span>

                        </button>
                        <img :src="item.url" class="w-full  mt-2" draggable="false" alt="">
                        <div style="background-color: white;">
                            <div class="text-center">
                                <p class="mt-0 text-sm text-gray-500 dark:text-gray-400">
                                    {{ item.text }}
                                </p>
                            </div>

                        </div>

                    </div>
                </div>

            </UCarousel>
        </div>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const items = [
    {
        url: 'https://images.pexels.com/photos/3894046/pexels-photo-3894046.jpeg?auto=compress&cs=tinysrgb&w=800',
        text: "Rolls-Royce is synonymous with opulence, craftsmanship, and unparalleled luxury. These vehicles are more than just transportation; they are rolling works of art"
    },
    {
        url: 'https://images.pexels.com/photos/5046305/pexels-photo-5046305.jpeg?auto=compress&cs=tinysrgb&w=800',
        text: "Rolls-Royce is synonymous with opulence, craftsmanship, and unparalleled luxury. These vehicles are more than just transportation; they are rolling works of art"
    },
    {
        url: 'https://images.pexels.com/photos/3894065/pexels-photo-3894065.jpeg?auto=compress&cs=tinysrgb&w=800',
        text: "Rolls-Royce is synonymous with opulence, craftsmanship, and unparalleled luxury. These vehicles are more than just transportation; they are rolling works of art"
    },
    {
        url: 'https://images.pexels.com/photos/5045949/pexels-photo-5045949.jpeg?auto=compress&cs=tinysrgb&w=800',
        text: "Rolls-Royce is synonymous with opulence, craftsmanship, and unparalleled luxury. These vehicles are more than just transportation; they are rolling works of art"
    },
    {
        url: 'https://images.pexels.com/photos/5804276/pexels-photo-5804276.jpeg?auto=compress&cs=tinysrgb&w=800',
        text: "Rolls-Royce is synonymous with opulence, craftsmanship, and unparalleled luxury. These vehicles are more than just transportation; they are rolling works of art"
    },
    {
        url: 'https://images.pexels.com/photos/5804278/pexels-photo-5804278.jpeg?auto=compress&cs=tinysrgb&w=800',
        text: "Rolls-Royce is synonymous with opulence, craftsmanship, and unparalleled luxury. These vehicles are more than just transportation; they are rolling works of art"
    }
]




defineEmits(["close-model"])

defineProps({
    modalActive: {
        type: Boolean,
        default: false
    }
})

</script>