<template>
    <div id="service" class="container px-4 pt-18 pb-20  mx-auto">
        <div class="mt-6">
            <h1 class="pt-6 text-2xl font-['ethnocentric_rg'] text-gray-800  uppercase lg:text-5xl dark:text-white">our
                services
            </h1>

        </div>
        <div class="grid grid-cols-1 gap-8 my-8 xl:mt-12 xl:gap-8 md:grid-cols-2 xl:grid-cols-3">
            <div class="group h-96 w-96 [perspective:1000px] cursor-pointer " @click="toggleModal">
                <div
                    class=" relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ">
                    <div class="absolute inset-0 ">
                        <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/80 "
                            src="https://images.pexels.com/photos/4489712/pexels-photo-4489712.jpeg?auto=compress&cs=tinysrgb&w=400">

                    </div>
                    <div
                        class=" absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] ">

                        <div class="flex min-h-full flex-col items-center justify-center">
                            <h1 class="text-5xl font-serif py-4">asdfghjk</h1>
                            <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- ///////////////// -->
            <div class="group h-96 w-96 [perspective:1000px] cursor-pointer " @click="toggleModal">
                <div
                    class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ">
                    <div class="absolute inset-0 ">
                        <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/80 "
                            src="https://images.pexels.com/photos/4488658/pexels-photo-4488658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">

                    </div>
                    <div
                        class=" absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] ">

                        <div class="flex min-h-full flex-col items-center justify-center">
                            <h1 class="text-5xl font-serif py-4">asdfghjk</h1>
                            <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- ///////////////////// -->
            <div class="group h-96 w-96 [perspective:1000px] cursor-pointer" @click="toggleModal">
                <div
                    class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ">
                    <div class="absolute inset-0 ">
                        <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/80 "
                            src="https://images.pexels.com/photos/4489767/pexels-photo-4489767.jpeg?auto=compress&cs=tinysrgb&w=400">

                    </div>
                    <div
                        class=" absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] ">

                        <div class="flex min-h-full flex-col items-center justify-center">
                            <h1 class="text-5xl font-serif py-4">asdfghjk</h1>
                            <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <dialguemodal :modal-active="modalActive" @close-model="toggleModal">

        </dialguemodal>

    </div>



</template>

<script setup lang="ts">
import { ref } from 'vue';

import dialguemodal from '../dialguemodal.vue';

const modalActive = ref();
const toggleModal = () => {
    modalActive.value = !modalActive.value;
}


</script>