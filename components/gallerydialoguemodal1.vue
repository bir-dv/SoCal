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
            <button style="z-index:999;" @click="$emit('close-model')" type="button"
                class="absolute top-1 end-2.5 text-gray-400 bg-transparent  hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="static-modal">
                <svg class=" w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span class="sr-only">Close modal</span>

            </button>


            <!-- <section class="bg-transparent dark:bg-gray-900 ">
                <div class="container px-6 py-10 mx-auto ">


                    <div class="flex flex-col items-start max-w-lg mx-auto mt-16 max-h-lg">


                        <div>
                            <div class="flex items-center justify-center mx-auto">


                                <img class="h-full rounded-lg"
                                    src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                    alt="" />
                            </div>


                        </div>
                        <div class="flex gap-6 items-center justify-center mx-auto py-6">
                            <button @click="index--" title="left arrow"
                                class=" hidden p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:block hover:bg-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>

                            </button>
                            <button @click="index++" title="right arrow"
                                class=" hidden p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:block hover:bg-gray-100">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                        <button
                            class=" w-full px-4 py-2 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#fb8500] rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-[#fb8500]-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                            Inquire
                        </button>


                    </div>
                </div>
            </section> -->




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
