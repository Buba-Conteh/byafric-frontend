<template>
  <header class="max-h-screen  h-[700px] relative">
    <nav class="border-0 m-0">
      <TOPNAVBAR />

    </nav>
    <Carousel :value="products" :showNavigators="true" :numVisible="1" :numScroll="1"
      :responsiveOptions="responsiveOptions" class="border-0 m-o">
      <template #item="slotProps">
        <div class="border  border-x-0 top-0 bottom-0 relative">
          <div class="z-20  h-full w-full">
            <div class="h-[600px] relative bg-cover bg-center z-10 bg-blend-overlay bg-no-repeat">

              <div class="bg-gradient-to-t from-gray-200 z-20 h-full w-full inset-0 absolute bg-opacity-30 flex">
                <div class="flex h-full w-[25%] z-30 justify-center items-end">
                  <img src="../assets/images/product_1.png" class="h-96" alt="product image">
                </div>
                <div
                  class="text-lg pl-10 text-center z-30 flex justify-center flex-col align-middle items-center w-[45%] min-h-56 left-20 h-auto p-4 capitalize">

                  <div>
                    <h1 class="font-bold text-7xl font-[Ga Maamli] leading-tight text-gray-500">Home Of <span
                        class="text-green-400">African</span> made
                      products</h1>
                    <div class="bg-white p-4 rounded-sm">
                      <h2 class="text-1xl text-gray-500 w-full font-bold">Never Food Miss Home Again - savor the
                        familiar
                        flavors
                        of home
                        with our delicious meals.</h2>

                    </div>
                  </div>

                  <div class="flex justify-center p-2 gap-4 mt-10 w-full">
                    <Button class="!px-12 !py-4 !bg-yellow-400 !text-xl uppercase" label="Get One" />
                    <!-- <Button class="!px-12 !bg-white !text-green-700 uppercase" label="Contact Us" /> -->

                  </div>

                </div>
                <div class="flex h-auto w-[30%] z-30 justify-center">
                  <img src="../assets/images/product_1.png" class="h-96" alt="product image">
                </div>
              </div>
              <!-- <img :src="'../src/assets/images/' + slotProps.data.image" :alt="slotProps.data.name" -->
              <!-- class="w-full object-cover bg-blend-saturation bg-green-400" /> -->


            </div>
          </div>

        </div>
      </template>
    </Carousel>
  </header>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Carousel from 'primevue/carousel';
import Button from 'primevue/button';
import TOPNAVBAR from './TopNavBar.vue';

// onMounted(() => {
//   ProductService.getProductsSmall().then((data) => (products.value = data.slice(0, 9)));
// })

const products = ref([
  {
    image: 'image_1.jpg',
    name: 'image 1',
  },
  {
    image: 'image_2.jpg',
    name: 'image 2',
  },
  {
    image: 'image_3.jpg',
    name: 'image 3',
  },

]);
const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1
  }
]);

const getSeverity = (status) => {
  switch (status) {
    case 'INSTOCK':
      return 'success';

    case 'LOWSTOCK':
      return 'warn';

    case 'OUTOFSTOCK':
      return 'danger';

    default:
      return null;
  }
};

</script>
<style>
h1 {
  font-family: 'Oswald';
}

.p-button-text.p-button-secondary.p-carousel-prev-button {
  position: absolute !important;
  z-index: 40;
  left: 10px;
  /* background-color: rgba(220, 220, 220, 0.576) !important; */

}

.p-button-text.p-button-secondary.p-carousel-next-button {
  position: absolute !important;
  right: 10px;
  z-index: 40;
  /* background-color: rgba(220, 220, 220, 0.576) !important; */
}

/* svg.p-button-icon {
  width: 70px;
  height: 70px;
  padding: 5px;
} */
</style>