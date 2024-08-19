<template>
    <header class="bg-white dark:bg-gray-900 pattern ">
        <nav class="relative bg-transparent dark:bg-gray-900">
            <div class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                <div class="flex items-center justify-between">
                    <nuxt-link to="/" class="hover:-translate-y-2 transition ease-in-out duration-300 ">
                        <img class=" scale-150 w-auto h-20 sm:h-40" src="/assets/imgs/logo2.png" alt="">
                    </nuxt-link>

                    <!-- Mobile menu button -->
                    <div class="flex md:hidden">
                        <button @click="isOpen = !isOpen" type="button"
                            class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                            aria-label="toggle menu">
                            <svg @click="!isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                            </svg>

                            <!-- <svg @click="isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg> -->
                        </button>
                    </div>
                </div>

                <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
                <!-- <div :class="isOpen ? 'block' : 'hidden'"
                    class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
                    <div class="flex flex-col md:flex-row md:mx-6">
                        <nuxt-link to="#"
                            class="py-2 px-3 text-[#495057] hover:text-[#fb8500] transition duration-300 font-['ethnocentric_rg'] md:block">Home</nuxt-link>
                        <nuxt-link to="#"
                            class="py-2 px-3 text-[#495057] hover:text-[#fb8500] transition duration-300 font-['ethnocentric_rg'] md:block">About</nuxt-link>
                        <nuxt-link to="#"
                            class="py-2 px-3 text-[#495057] hover:text-[#fb8500] transition duration-300 font-['ethnocentric_rg'] md:block">Invantory</nuxt-link>
                        <nuxt-link to="#"
                            class="py-2 px-3 text-[#495057] hover:text-[#fb8500] transition duration-300 font-['ethnocentric_rg'] md:block">Finance</nuxt-link>
                    </div>

                    <div class="flex justify-center md:block">
                        <button
                            class="relative text-center  px-3 py-2 mx-2 text-lg font-['ethnocentric_rg'] text-white transition ease-in-out  hover:-translate-y-2 duration-300 transform bg-gradient-to-b from-amber-500 to-orange-700 hover:from-white hover:to-white   hover:text-black rounded-sm">
                            Schedule Appointmet</button>

                    </div>
                </div> -->
            </div>
        </nav>

        <div class="container px-6 py-8  mx-auto ">
            <div class="items-center lg:flex">
                <div class="w-full lg:w-1/2">
                    <div class="lg:max-w-xl">
                        <h1 class="text-3xl font-['ethnocentric_rg'] text-gray-800 dark:text-white lg:text-5xl">
                            Your High End Body Shop
                        </h1>



                        <button @click="toggleModal"
                            class="relative text-center mt-10  px-3 py-2 mx-2 text-lg font-['ethnocentric_rg'] text-white transition ease-in-out  hover:-translate-y-2 duration-300 transform bg-gradient-to-b from-amber-500 to-orange-700 hover:from-white hover:to-white   hover:text-black rounded-sm">Schedule
                            Appointmet</button>
                    </div>
                </div>

                <!-- <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">

                    <img class="w-full h-full lg:max-w-3xl motion-safe:animate-bounce" src="/assets/imgs/text.png"
                        alt="">

                </div> -->
            </div>
        </div>
        <appointmentmodal :modal-active="modalActive" @close-model="toggleModal"></appointmentmodal>
    </header>
</template>

<script setup>
const isOpen = ref(false);
import appointmentmodal from '../appointmentmodal.vue';
const modalActive = ref();
const toggleModal = () => {
    modalActive.value = !modalActive.value;
}

</script>

<style>
.pattern {
    height: 100vh;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-image: url('https://images.pexels.com/photos/5432071/pexels-photo-5432071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
}
</style>