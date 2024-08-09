<script setup lang="ts">
import Services from './Services.vue';
</script>

<template>

    <footer class=" mt-10 bg-[#343a40] dark:bg-gray-900">
        <div class="container px-6 py-12 mx-auto">
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                <div class="sm:col-span-2">
                    <h1
                        class="max-w-lg text-xl font-['ethnocentric_rg'] tracking-tight text-white xl:text-2xl dark:text-white">
                        To get our Services</h1>

                    <div class="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">


                        <button
                            class="relative text-center  px-3 py-2 mx-2 text-lg font-['ethnocentric_rg'] text-white transition ease-in-out  hover:-translate-y-2 duration-300 transform bg-gradient-to-b from-amber-500 to-orange-700 hover:from-white hover:to-white   hover:text-black rounded-sm">Book
                            an Appointmet</button>
                    </div>
                </div>

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
                        <router-link to=""
                            class="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-[#fb8500]">Services</router-link>

                        <a href="#"
                            class="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-[#fb8500]">
                            Why Choose Us</a>
                    </div>
                </div>

                <div>
                    <p class="font-['ethnocentric_rg'] text-white dark:text-white">Contacts</p>

                    <div class="flex flex-col items-start mt-5 space-y-2">
                        <a href="#"
                            class="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-[#fb8500]">info@socalexoticparts.com</a>
                        <a href="#"
                            class="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-[#fb8500]">1881
                            Long Beach Blvd, Long Beach, CA, 90806
                        </a>
                        <a href="#"
                            class="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-[#fb8500]">
                            phone</a>
                    </div>
                </div>
            </div>

            <!-- <hr class="my-6 border-gray-200 md:my-8 dark:border-gray-700"> -->

            <div class="flex items-center justify-between">
                <!-- <a href="#">
                    <img class="w-auto h-7" src="https://merakiui.com/images/full-logo.svg" alt="">
                </a> -->
                <nuxt-link to="/" class="justify-center hover:-translate-y-2 transition ease-in-out duration-300 ">
                    <img class=" scale-150 w-auto h-6 sm:h-40" src="/assets/imgs/logo2.png" alt="">
                </nuxt-link>

                <p class="mt-4 text-sm text-white sm:mt-0 dark:text-gray-300">© Copyright 2024. All Rights Reserved.
                </p>
            </div>
        </div>
    </footer>


</template>
