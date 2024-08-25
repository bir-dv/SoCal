<template>
    <div v-show="modalActive" class="relative flex justify-center ">
        <!-- <button @click="isOpen = true"
            class="px-6 py-2 mx-auto tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            Open Modal
        </button> -->

        <div v-if="modalActive" x-transition:enter="transition duration-300 ease-out"
            x-transition:enter-start="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
            x-transition:enter-end="translate-y-0 opacity-100 sm:scale-100"
            x-transition:leave="transition duration-150 ease-in"
            x-transition:leave-start="translate-y-0 opacity-100 sm:scale-100"
            x-transition:leave-end="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
            class="backdrop-blur-lg fixed inset-0 z-10 overflow-y-auto" aria-labelledby="modal-title" role="dialog"
            aria-modal="true">
            <div class=" flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">

                <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                <div
                    class=" relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:align-middle sm:max-w-md  sm:w-full sm:p-6">
                    <div>
                        <button @click="$emit('close-model')" type="button"
                            class="absolute top-1 end-2.5 text-gray-400 bg-transparent  hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-hide="static-modal">
                            <svg class=" w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span class="sr-only">Close modal</span>

                        </button>
                        <img class="object-cover w-full h-[70vh] rounded-md pt-4" src="/assets/imgs/image1.jpg" alt="">

                        <div class="text-center">


                            <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Aspernatur dolorum aliquam ea, ratione deleniti porro officia?
                                Explicabo
                                maiores suscipit.
                            </p>
                        </div>
                    </div>



                    <div class="mt-5 sm:flex sm:items-center sm:-mx-2">


                        <button
                            class="w-full px-4 py-2 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#fb8500] rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-[#fb8500]-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                            Inquire
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineEmits(["close-model"])

defineProps({
    modalActive: {
        type: Boolean,
        default: false
    }
})

</script>