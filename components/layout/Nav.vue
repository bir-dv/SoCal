<!-- Require css -->
<template>

    <header>

        <div class="container px-6 mx-auto">

            <!-- <video autoplay loop muted playsinline class="background" src="/assets/video/backgroundvideo.mp4"></video> -->
            <nav class=" lg:flex flex-col -my-6 sm:flex-row sm:justify-between sm:items-center">

                <nuxt-link to="/" class="hover:-translate-y-2 transition ease-in-out duration-300 ">
                    <img class=" scale-150 w-auto h-6 sm:h-40" src="/assets/imgs/logo2.png" alt="">
                    <!-- So<span class="text-white">Cal</span> -->


                </nuxt-link>



                <div class=" text-xl flex items-center mt-2 -mx-2 sm:mt-0">
                    <nuxt-link to="#"
                        class="py-2 px-3 text-white hover:text-[#fb8500] transition duration-300 font-fontdidot md:block">Home</nuxt-link>
                    <nuxt-link to="#"
                        class="py-2 px-3 text-white hover:text-[#fb8500] transition duration-300 font-fontdidot md:block">About</nuxt-link>
                    <nuxt-link to="#"
                        class="py-2 px-3 text-white hover:text-[#fb8500] transition duration-300 font-fontdidot md:block">Invantory</nuxt-link>
                    <nuxt-link to="#"
                        class="py-2 px-3 text-white hover:text-[#fb8500] transition duration-300 font-fontdidot md:block">Finance</nuxt-link>

                </div>

                <div class="flex items-center mt-2 -mx-2 sm:mt-0">

                    <nuxt-link to="#"
                        class="px-3 py-2 mx-2 text-2xl font-fontdidot text-white transition ease-in-out  hover:-translate-y-2 duration-300 transform bg-gradient-to-b from-amber-500 to-orange-700 hover:from-white hover:to-white  hover:text-black rounded-sm">Contact
                        Us</nuxt-link>

                </div>
            </nav>

            <div class="flex flex-col items-center py-6 lg:h-[36rem] lg:flex-row">
                <div class="flex -mt-10 lg:w-1/2">


                    <img class="-mt-20 motion-safe:animate-bounce" src="/assets/imgs/text.png" alt="">


                </div>
                <div class="flex items-center justify-center -mb-60 md:justify-start">
                    <button @click="left" title="left arrow"
                        class="hover:border-transparent left p-2 text-white transition-colors  border rounded-full rtl:-scale-x-100 hover:bg-[#fb8500]">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                        <img v-if="isopenleft" class="background transition ease-in-out delay-300 duration-300"
                            src="/assets/imgs/heroimage33.jpg" alt="">
                        <img v-else class="background1 transition ease-in-out delay-300 duration-300"
                            src="/assets/imgs/heroimage22.jpg" alt="">
                    </button>

                    <button @click="right" title="right arrow"
                        class="hover:border-transparent right p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 hover:bg-[#fb8500]">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        <img v-if="isopenright" class="background transition ease-in-out delay-300 duration-300"
                            src="/assets/imgs/heroimage33.jpg" alt="">
                        <img v-else class="background1 transition ease-in-out delay-300 duration-300"
                            src="/assets/imgs/heroimage22.jpg" alt="">

                    </button>
                </div>

            </div>


            <!-- <svg class="-mt-80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#ffffffff" fill-opacity="1"
                    d="M0,256L0,320L360,320L360,160L720,160L720,288L1080,288L1080,96L1440,96L1440,320L1080,320L1080,320L720,320L720,320L360,320L360,320L0,320L0,320Z">
                </path>
            </svg> -->
            <button
                class=" text-center min-h-20 px-3 -my-80 mx-2 text-2xl font-fontdidot text-white transition ease-in-out  hover:-translate-y-2 duration-300 transform bg-gradient-to-b from-amber-500 to-orange-700 hover:from-white hover:to-white  hover:text-black  rounded-sm">
                Book an Appointment
            </button>
            <svg class="-mt-80 h-auto w-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">

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
.temporary-bounce {
    -webkit-animation-iteration-count: 10;
    animation-iteration-count: 10;
}

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

.container1 {
    width: 100%;
    height: 100%;
    background-color: #0002;


}
</style>
