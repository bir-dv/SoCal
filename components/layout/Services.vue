<template>
    <div id="service" class="container px-4 py-18  mx-auto">
        <div class="mt-6">
            <h1 class="pt-6 text-2xl font-['ethnocentric_rg'] text-gray-800  uppercase lg:text-5xl dark:text-white">our
                services
            </h1>

        </div>
        <div class="grid grid-cols-1 gap-8 my-8 xl:mt-12 xl:gap-8 md:grid-cols-2 xl:grid-cols-3">
            <div class="group h-96 w-96 [perspective:1000px] cursor-pointer ">
                <div
                    class=" relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ">
                    <div class="absolute inset-0 ">
                        <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/80 "
                            src="https://images.pexels.com/photos/4489712/pexels-photo-4489712.jpeg?auto=compress&cs=tinysrgb&w=400">
                        <h1 class="-mt-20 mx-6 text-xl font-['ethnocentric_rg'] text-white ">Collision Insurance Claims
                        </h1>
                    </div>
                    <div
                        class=" absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] ">

                        <div class="flex min-h-full flex-col items-center justify-center">
                            <h1 class="text-3xl font-['ethnocentric_rg'] py-4">Collision Insurance Claims</h1>
                            <p class="text-xs font-['ethnocentric_rg']">replace or repair your car after a car accident.
                            </p>
                            <div class="mt-5">
                                <button @click="toggleModal"
                                    class=" px-4 py-2 mt-10 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#fb8500]  rounded-md  sm:mt-0 hover:bg-[#fb8500] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 font-['ethnocentric_rg']">
                                    Inquire
                                </button>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <!-- ///////////////// -->
            <div class="group h-96 w-96 [perspective:1000px] cursor-pointer ">
                <div
                    class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ">
                    <div class="absolute inset-0 ">
                        <img class="h-full w-full rounded-xl object-cover shadow-lg shadow-black/80 "
                            src="https://images.pexels.com/photos/4488658/pexels-photo-4488658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
                        <h1 class="-mt-20 mx-6 text-xl font-['ethnocentric_rg'] text-white ">Classic Car Restorations
                        </h1>

                    </div>
                    <div
                        class=" absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] ">

                        <div class="flex min-h-full flex-col items-center justify-center">
                            <h1 class="text-3xl  py-4 font-['ethnocentric_rg']">Classic Car Restorations</h1>
                            <p class="text-xs  font-['ethnocentric_rg']">car restorations involve returning the vehicle
                                to its original
                                factory
                                condition or better.</p>
                            <div class="mt-5">
                                <button @click="toggleModal"
                                    class=" px-4 py-2 mt-10 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#fb8500]  rounded-md  sm:mt-0 hover:bg-[#fb8500] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 font-['ethnocentric_rg']">
                                    Inquire
                                </button>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <!-- ///////////////////// -->
            <div class="group h-96 w-96 [perspective:1000px] cursor-pointer">
                <div
                    class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ">
                    <div class="absolute inset-0 ">
                        <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/80 "
                            src="https://images.pexels.com/photos/1729993/pexels-photo-1729993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
                        <h1 class="-mt-20 mx-6 text-xl font-['ethnocentric_rg'] text-white ">Buy Your Dream Car
                        </h1>
                    </div>
                    <div
                        class=" absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] ">

                        <div class="flex min-h-full flex-col items-center justify-center">
                            <h1 class="text-3xl font-['ethnocentric_rg'] py-4">Buy Your Dream Car </h1>
                            <p class="text-xs font-['ethnocentric_rg']">buy your dream car and drive in style.</p>
                            <div class="mt-5">
                                <button @click="toggleModal"
                                    class=" px-4 py-2 mt-10 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#fb8500]  rounded-md  sm:mt-0 hover:bg-[#fb8500] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 font-['ethnocentric_rg']">
                                    Inquire
                                </button>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
        <servicemodal :modal-active="modalActive" @close-model="toggleModal">

        </servicemodal>

    </div>



</template>

<script setup lang="ts">
import { ref } from 'vue';

import dialguemodal from '../dialguemodal.vue';
import servicemodal from '../servicemodal.vue';

const modalActive = ref();
const toggleModal = () => {
    modalActive.value = !modalActive.value;
}


</script>