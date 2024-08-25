<template>

  <LayoutHero />

  <LayoutServices />
  <LayoutWhyus />

  <section>
    <div class="py-10 h-96  bg-cover rounded-lg cursor-pointer  ">

      <video class="justify-center  object-cover w-full h-96 " autoplay loop muted playsinline
        src="/assets/video/backgroundvideo.mp4"></video>
      <div class="justify-center  -mt-40">
        <h1 class="text-center text-4xl text-white font-['ethnocentric_rg'] uppercase ">Where Car Dreams Become <br>
          Reality</h1>
        <!-- <h1 class="text-center text-3xl text-white font-serif ">asdfghjklaqwer</h1> -->

      </div>


    </div>

  </section>
  <section class=" bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">

      <div class="flex pt-20">
        <div class=" max-w-80 mt-5  flex-grow h-1 rounded  bg-[#fb8500]"></div>
        <p class="text-2xl px-2  italic font-['ethnocentric_rg'] ">VEHICLES</p>
      </div>


      <h1 class="pt-6 text-2xl font-['ethnocentric_rg'] text-gray-800  uppercase lg:text-6xl dark:text-white">Explore
        our
      </h1>
      <h1 class="text-2xl font-['ethnocentric_rg']  text-gray-800 uppercase lg:text-6xl dark:text-white">pristine
        classics
      </h1>

      <!-- /////////// -->


      <div class="container px-6 py-18 mx-auto">

        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-8 md:grid-cols-2 xl:grid-cols-3">
          <div @click="togglerollsroyce"
            class="bg-[url('/assets/imgs/image1.jpg')] bg-center block overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group">
            <div
              class="flex flex-col justify-center w-full h-full px-8 pt-60 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100 ">
              <h2 class="mt-4 text-xl font-semibold text-white uppercase">Rolls-royce</h2>
              <p class="mt-2 text-lg tracking-wider text-white  ">exuding elegance</p>
              <div class="flex">
                <div class=" max-w-60 mt-5  flex-grow h-1 rounded  bg-[#fb8500]"></div>
                <p class="text-2xl px-2  italic font-extralight text-[#fb8500] ">View Car</p>
              </div>
            </div>
          </div>


          <!-- ///////////////// -->

          <div @click="togglemercedesActive"
            class="bg-[url('/assets/imgs/image2.jpg')] bg-center block overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group">
            <div
              class="flex flex-col justify-center w-full h-full px-8 pt-60 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100 ">
              <h2 class="mt-4 text-xl font-semibold text-white uppercase">mercedes-benz</h2>
              <p class="mt-2 text-lg tracking-wider text-white  ">elegant design</p>
              <div class="flex">
                <div class=" max-w-60 mt-5  flex-grow h-1 rounded  bg-[#fb8500]"></div>
                <p class="text-2xl px-2  italic font-extralight text-[#fb8500] ">View Car</p>
              </div>
            </div>
          </div>

          <div @click="togglelamborghiniActive"
            class="bg-[url('/assets/imgs/image3.jpg')] bg-center block overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group">
            <div
              class="flex flex-col justify-center w-full h-full px-8 pt-60 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100 ">
              <h2 class="mt-4 text-xl font-semibold text-white  uppercase">Lamborghini</h2>
              <p class="mt-2 text-lg tracking-wider text-white  ">unleash your inner beast</p>
              <div class="flex">
                <div class=" max-w-60 mt-5  flex-grow h-1 rounded  bg-[#fb8500]"></div>
                <p class="text-2xl px-2  italic font-extralight text-[#fb8500] ">View Car</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class=" container px-6 mx-auto">

        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-8 md:grid-cols-2 xl:grid-cols-3">
          <div @click="toggleferrariActive"
            class="bg-[url('/assets/imgs/image4.jpg')] bg-center block overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group">
            <div
              class="flex flex-col justify-center w-full h-full px-8 pt-60 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100 ">
              <h2 class="mt-4 text-xl font-semibold text-white uppercase">ferrari</h2>
              <p class="mt-2 text-lg tracking-wider text-white  ">legendary performance</p>
              <div class="flex">
                <div class=" max-w-60 mt-5  flex-grow h-1 rounded  bg-[#fb8500]"></div>
                <p class="text-2xl px-2  italic font-extralight text-[#fb8500] ">View Car</p>
              </div>
            </div>
          </div>

          <div @click="togglebentleyActive"
            class="bg-[url('/assets/imgs/image5.jpg')] bg-center block overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group">
            <div
              class="flex flex-col justify-center w-full h-full px-8 pt-60 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100 ">
              <h2 class="mt-4 text-xl font-semibold text-white uppercase">bentley</h2>
              <p class="mt-2 text-lg tracking-wider text-white  ">a legacy of excellence</p>
              <div class="flex">
                <div class=" max-w-60 mt-5  flex-grow h-1 rounded  bg-[#fb8500]"></div>
                <p class="text-2xl px-2  italic font-extralight text-[#fb8500] ">View Car</p>
              </div>
            </div>
          </div>

          <div @click="togglemclarenActive"
            class="bg-[url('/assets/imgs/image6.jpg')] bg-center block overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group">
            <div
              class="flex flex-col justify-center w-full h-full px-8 pt-60 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100 ">
              <h2 class="mt-4 text-xl font-semibold text-white uppercase">mclaren</h2>
              <p class="mt-2 text-lg tracking-wider text-white  ">cutting-edge performance</p>
              <div class="flex">
                <div class=" max-w-60 mt-5  flex-grow h-1 rounded  bg-[#fb8500]"></div>
                <p class="text-2xl px-2  italic font-extralight text-[#fb8500] ">View Car</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <!-- <dialguemodal :modal-active="modalActive" @close-model="toggleModal">

    </dialguemodal> -->

    <gallerydialoguemodal :modal-active="modalActive" @close-model="toggleModal"></gallerydialoguemodal>
    <gallerydialoguemodal1 :modal-active="modalActive1" @close-model="toggleModal1"></gallerydialoguemodal1>
    <rollsroycemodal :modal-active="rollsroyceActive" @close-model="togglerollsroyce"></rollsroycemodal>
    <mercedesemodal :modal-active="mercedesActive" @close-model="togglemercedesActive"></mercedesemodal>
    <lamborghinimodal :modal-active="lamborghiniActive" @close-model="togglelamborghiniActive"></lamborghinimodal>
    <ferrarimodel :modal-active="ferrariActive" @close-model="toggleferrariActive"></ferrarimodel>
    <bentleymodel :modal-active="bentleyActive" @close-model="togglebentleyActive"></bentleymodel>
    <mclarenmodal :modal-active="mclarenActive" @close-model="togglemclarenActive"></mclarenmodal>


  </section>


  <LayoutFooter />

  <section>

  </section>


</template>

<script setup lang="ts">
import { ref } from 'vue';

import dialguemodal from './components/dialguemodal.vue';
import gallerydialoguemodal from './components/gallerydialoguemodal.vue';
import gallerydialoguemodal1 from './components/gallerydialoguemodal1.vue';
import rollsroycemodal from './components/rollsroycemodal.vue';
import mercedesemodal from './components/mercedesemodal.vue';
import lamborghinimodal from './components/lamborghinimodal.vue';
import ferrarimodel from './components/ferrarimodel.vue';
import bentleymodel from './components/bentleymodel.vue';
import mclarenmodal from './components/mclarenmodal.vue';

const modalActive = ref();
const toggleModal = () => {
  modalActive.value = !modalActive.value;
}


const modalActive1 = ref();
const toggleModal1 = () => {
  modalActive1.value = !modalActive1.value;
}

const rollsroyceActive = ref();
const togglerollsroyce = () => {
  rollsroyceActive.value = !rollsroyceActive.value;
}

const mercedesActive = ref()
const togglemercedesActive = () => {
  mercedesActive.value = !mercedesActive.value
}

const lamborghiniActive = ref();
const togglelamborghiniActive = () => {
  lamborghiniActive.value = !lamborghiniActive.value;
}

const ferrariActive = ref();
const toggleferrariActive = () => {
  ferrariActive.value = !ferrariActive.value;
}

const bentleyActive = ref();
const togglebentleyActive = () => {
  bentleyActive.value = !bentleyActive.value;
}

const mclarenActive = ref();
const togglemclarenActive = () => {
  mclarenActive.value = !mclarenActive.value;
}

</script>

<style>
@keyframes appear {
  from {
    opacity: 0;
    scale: 0.7;
  }

  to {
    opacity: 1;
    scale: 1;
  }

}

.block {
  animation: appear linear;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
}
</style>