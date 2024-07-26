<!-- Require css -->
<template>

    <header>

        <div class="container px-6 mx-auto">
            <div class="box">

                <!-- <img id="three" class="background" src="/assets/imgs/heroimage3.jpg" alt=""> -->



            </div>



            <!-- <video autoplay loop muted playsinline class="background" src="/assets/video/backgroundvideo.mp4"></video> -->
            <nav class="flex flex-col py-6 sm:flex-row sm:justify-between sm:items-center">

                <nuxt-link to="#"
                    class="text-4xl font-bold text-rose-700 hover:-translate-y-2 transition ease-in-out duration-300 ">
                    <!-- <img class="w-auto h-6 sm:h-7" src="/assets/imgs/logo.png" alt=""> -->
                    Car Dealership
                </nuxt-link>

                <div class="flex items-center mt-2 -mx-2 sm:mt-0">
                    <nuxt-link to="#"
                        class="py-2 px-3 text-white hover:text-rose-700 transition duration-300 font-fontdidot md:block">Home</nuxt-link>
                    <nuxt-link to="#"
                        class="py-2 px-3 text-white hover:text-rose-700 transition duration-300 font-fontdidot md:block">About</nuxt-link>
                    <nuxt-link to="#"
                        class="py-2 px-3 text-white hover:text-rose-700 transition duration-300 font-fontdidot md:block">Invantory</nuxt-link>
                    <nuxt-link to="#"
                        class="py-2 px-3 text-white hover:text-rose-700 transition duration-300 font-fontdidot md:block">Finance</nuxt-link>

                </div>

                <div class="flex items-center mt-2 -mx-2 sm:mt-0">

                    <nuxt-link href="#"
                        class="px-3 py-2 mx-2 text-2xl font-fontdidot text-white transition ease-in-out  hover:-translate-y-2 duration-300 transform bg-rose-700  hover:bg-rose-100 hover:text-black rounded-sm">Contact
                        Us</nuxt-link>

                </div>
            </nav>

            <div class="flex flex-col items-center py-6 lg:h-[36rem] lg:flex-row">
                <!-- <div class="lg:w-1/2">
                    <h2 class="text-3xl font-bold text-gray-100 lg:text-4xl">Brand</h2>

                    <h3 class="mt-2 text-2xl font-semibold text-gray-100">
                        Hello <span class="text-blue-400">Guest</span>
                    </h3>

                    <blockquote class="text-2xl font-semibold italic text-center text-slate-100">
                        When you look
                        <span
                            class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                            <span class="relative text-white">annoyed</span>
                        </span>
                        all the time, people think that you're busy.
                    </blockquote>

                    <p class="mt-4 text-gray-100">Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit.
                        Ipsam, eum
                        modi incidunt adipisci quod porro et non exercitationem quasi, maxime culpa ut nemo ab delectus
                        saepe iste nostrum explicabo a?</p>
                </div> -->
                <div class="flex items-center justify-center -mb-60 md:justify-start">
                    <button @click="left" title="left arrow"
                        class="left p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-rose-700">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                        <img v-if="isopenleft" class="background transition ease-in-out delay-300 duration-300"
                            src="/assets/imgs/heroimage3.jpg" alt="">
                        <img v-else class="background1 transition ease-in-out delay-300 duration-300"
                            src="/assets/imgs/heroimage2.jpg" alt="">
                    </button>

                    <button @click="right" title="right arrow"
                        class="right p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 hover:bg-rose-700">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        <img v-if="isopenright" class="background transition ease-in-out delay-300 duration-300"
                            src="/assets/imgs/heroimage3.jpg" alt="">
                        <img v-else class="background1 transition ease-in-out delay-300 duration-300"
                            src="/assets/imgs/heroimage2.jpg" alt="">

                    </button>
                </div>

            </div>


            <!-- <svg class="-mt-80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#ffffffff" fill-opacity="1"
                    d="M0,256L0,320L360,320L360,160L720,160L720,288L1080,288L1080,96L1440,96L1440,320L1080,320L1080,320L720,320L720,320L360,320L360,320L0,320L0,320Z">
                </path>
            </svg> -->
            <svg class="-mt-80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#ffffff" fill-opacity="1" d="M0,256L720,256L1440,96L1440,320L720,320L0,320Z"></path>
            </svg>
        </div>
    </header>


</template>


<script setup>
import { ref } from 'vue';

const isopenleft = ref(false)
const left = () => {
    isopenleft.value = !isopenleft.value
    isopenright.value = false
}


const isopenright = ref(false)
const right = () => {
    isopenright.value = !isopenright.value
    isopenleft.value = false

}






</script>


<!-- 
<style>
.pattern {
    background-image: url(/assets/imgs/heroimage1.jpg);
    width: 100%;
    height: 100%;
    position: absolute;


}
</style> -->

<style>
.background {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -1;

}

.background1 {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -1;

}

.container {
    width: 100%;
    height: 100%;
    background-color: #0002;


}
</style>
