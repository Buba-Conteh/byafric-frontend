<template>
    <div class="card">
        <Carousel :value="products" :numVisible="4" :showNavigators="false" :numScroll="1"
            :responsiveOptions="responsiveOptions">
            <template #item="slotProps">
                <div class="group bg-gray-50 border border-surface-200 dark:border-surface-700 rounded m-2">
                    <div class="mb-2">
                        <div class=" relative mx-auto py-4">
                            <img :src="'../src/assets/images/' + slotProps.data.image" :alt="slotProps.data.name"
                                class="w-full rounded rounded-b-none h-[250px] object-cover transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 " />
                            <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity('INSTOCK')"
                                class="absolute" style="left:5px; top: 5px" />
                            <div class="absolute bottom-0 z-10 w-full">
                                <div class="flex justify-center gap-2 hidden group-hover:flex">

                                    <Button icon="pi pi-heart" severity="secondary" />
                                    <Button icon="pi pi-shopping-cart" />
                                    <Button icon="pi pi-eye" />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="mb-1 font-normal text-center mt-5">{{ slotProps.data.name }}</div>
                    <div class="flex flex-col justify-center items-center">
                        <div class="mt-0 font-semibold text-green-500 text-lg">${{ slotProps.data.price }}</div>
                        <hr class="bg-gray-500 w-14 my-4 group-hover:w-20 p-[0.5px]">
                        <span>
                            <!-- <Button icon="pi pi-heart" severity="secondary" outlined /> -->
                            <p class=" font-extrabold text-sm">ADD TO CART <span
                                    class="pi pi-angle-double-right"></span></p>
                            <!-- <Button icon="pi pi-shopping-cart" class="ml-2" /> -->
                        </span>
                    </div>
                </div>
            </template>
        </Carousel>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
// import { ProductService } from '@/service/ProductService';
import Carousel from 'primevue/carousel';

// onMounted(() => {
//     ProductService.getProductsSmall().then((data) => (products.value = data.slice(0, 9)));
// })

const products = ref([
    {
        image: 'product_3.png',
        name: 'Locust Beans',
        price: '200',
    },
    {
        image: 'product_4.png',
        name: 'Cassava Powder',
        price: '300',
    },
    {
        image: 'image_2.jpg',
        name: 'image 2',
        price: '300',
    },
    {
        image: 'image_3.jpg',
        name: 'image 3',
        price: '50',
    },

]);;
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
