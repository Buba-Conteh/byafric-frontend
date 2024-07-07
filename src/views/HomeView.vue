<script setup>
import HeroSection from '../components/HeroSection.vue'
import FeaturedProducts from '../components/FeaturedProducts.vue'
import ProductCard from '../components/ProductCard.vue'
import FeaturedBlog from '../components/FeaturedBlog.vue'
import Toolbar from 'primevue/toolbar';

</script>

<template>
  <main>
    <HeroSection />

    <div
      class="py-10 w-5/6 mb-5 m-auto rounded-sm relative flex justify-center flex-col items-center mt-[-100px] z-40 bg-gray-50 px-5">
      <!-- <FeaturedProducts /> -->
      <div class="text-center w-full p-2 pb-4 font-[Oswald] ">
        <h2 class="text uppercase tex-2xl tracking-widest bg-gradient-to-r py-4">
          Our Products</h2>
        <div class="flex justify-center">
          <!-- <Toolbar style="border-radius: 3rem" class="w-1/2">
            <template #start> -->
          <div class="flex justify-center items-center gap-2 bg-white w-1/3 rounded-full p-2">
            <!-- <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="..." fill="var(--p-text-color)" />
                  <path d="..." fill="transparent" />
                </svg> -->
            <Button label="Seasoning" class="!rounded-full !px-10" text plain />
            <Button label="Cereals" class="!rounded-full !px-10" text plain />
            <Button label="Top Sale" class="!rounded-full !px-7" text plain />
          </div>
          <!-- </template>
</Toolbar> -->
        </div>
      </div>
      <ProductCard />

    </div>

    <div class="p-5 pt-[100px] bg-yellow-100 mt-[-100px]">
      <FeaturedBlog />

    </div>
  </main>
</template>
