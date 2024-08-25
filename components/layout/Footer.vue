<template>

    <footer class=" mt-10 bg-[#343a40] dark:bg-gray-900">
        <div class="container px-6 py-12 mx-auto">
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3">
                <a href="#" class="justify-center hover:-translate-y-2 transition ease-in-out duration-300 ">
                    <img class=" scale-150 w-auto h-6 sm:h-40" src="/assets/imgs/logo2.png" alt="">
                </a>


                <div>
                    <p class="font-['ethnocentric_rg'] text-white dark:text-white">Quick Link</p>

                    <div class="flex flex-col items-start mt-5 space-y-2">
                        <a href="#"
                            class="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-[#fb8500]">Home</a>
                        <!-- <a href="/service/"
                            class="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-[#fb8500]">Services
                        </a> -->
                        <!-- <nuxt-link :to="{ path: '/', hash: '#service' }"
                            class="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-[#fb8500]">Services</nuxt-link> -->
                        <a href="#service"
                            class="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-[#fb8500]">Services</a>

                        <a href="#whyus"
                            class="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-[#fb8500]">
                            Why Choose Us</a>
                    </div>
                </div>

                <div>
                    <p class="font-['ethnocentric_rg'] text-white dark:text-white">Contacts</p>

                    <div class="flex flex-col items-start mt-5 space-y-2">
                        <a href="" onclick="return false;"
                            class="flex gap-4 text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-[#fb8500]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>

                            info@socalexoticparts.com</a>
                        <a href="" onclick="return false;"
                            class="flex gap-4 text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-[#fb8500]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-7">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>

                            1881
                            Long Beach Blvd, Long Beach, CA, 90806
                        </a>
                        <a href="" onclick="return false;"
                            class="flex gap-4 text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-[#fb8500]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>

                            phone</a>
                    </div>
                </div>
            </div>

            <!-- <hr class="my-6 border-gray-200 md:my-8 dark:border-gray-700"> -->

            <div class="flex items-center justify-between">
                <!-- <a href="#">
                    <img class="w-auto h-7" src="https://merakiui.com/images/full-logo.svg" alt="">
                </a> -->
                <div class="sm:col-span-2 pt-10">
                    <h1
                        class="max-w-lg text-xl font-['ethnocentric_rg'] tracking-tight text-white xl:text-2xl dark:text-white">
                        To get our Services</h1>

                    <div class="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">


                        <button @click="toggleModal"
                            class="relative text-center  px-3 py-2 mx-2 text-lg font-['ethnocentric_rg'] text-white transition ease-in-out  hover:-translate-y-2 duration-300 transform bg-gradient-to-b from-amber-500 to-orange-700 hover:from-white hover:to-white   hover:text-black rounded-sm">Schedule
                            Appointmet</button>
                    </div>
                </div>


            </div>
            <p class="mt-4 text-sm text-white sm:mt-0 dark:text-gray-300 text-center">© Copyright 2024. All Rights
                Reserved.
            </p>
        </div>
        <appointmentmodal :modal-active="modalActive" @close-model="toggleModal"></appointmentmodal>

    </footer>


</template>

<script setup>
const isOpen = ref(false);
import appointmentmodal from '../appointmentmodal.vue';
const modalActive = ref();
const toggleModal = () => {
    modalActive.value = !modalActive.value;
}
</script>
