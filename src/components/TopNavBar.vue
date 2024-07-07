<template>
    <div class="card rounded-none bg-green-700">
        <MegaMenu :model="items" class="py-2 px-4 !rounded-none border-0">
            <template #start>

                <div class="mr-5 px-4 bg-inherit text-center">
                    <img src="../assets/images/logo.png" alt="byafric logo" width="50">

                </div>
            </template>
            <template #item="{ item }">
                <!-- as a319 22 c 46..20.22: -->
                <a v-if="item.root" v-ripple
                    class="flex items-center cursor-pointer px-4 py-2 overflow-hidden text-sm relative font-bold capitalize"
                    style="border-radius: 2rem">
                    <span :class="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                </a>
                <a v-else-if="!item.image" class="flex items-center p-4 cursor-pointer mb-2 gap-3">
                    <span
                        class="inline-flex items-center justify-center rounded-full bg-primary text-primary-contrast w-12 h-12">
                        <i :class="[item.icon, 'text-lg']"></i>
                    </span>
                    <span class="inline-flex flex-col gap-1">
                        <span class="font-bold text-lg">{{ item.label }}</span>
                        <span class="whitespace-nowrap">{{ item.subtext }}</span>
                    </span>
                </a>
                <div v-else class="flex flex-col items-start gap-4 p-2">
                    <img alt="megamenu-demo" :src="item.image" class="w-full" />
                    <span>{{ item.subtext }}</span>
                    <Button :label="item.label" outlined />
                </div>
            </template>
            <!-- </div> -->
            <template #end>
                <div class="flex justify-between gap-4">

                    <div>
                        <Button icon="pi pi-search" severity="success" rounded aria-label="Search" />

                    </div>
                    <div>
                        <Button icon="pi pi-shopping-cart" class="!bg-yellow-400 !border-none" severity="help" rounded
                            aria-label="Favorite" />
                    </div>
                    <div>
                        <Button icon="pi pi-heart" class="!bg-yellow-400 !border-none" severity="help" rounded
                            aria-label="Favorite" />

                    </div>
                    <div class="flex justify-center items-center font-bold">
                        $0.00
                    </div>
                    <div class="ml-12">
                        <Button icon="pi pi-user" severity="info" rounded aria-label="User" />

                    </div>
                </div>
                <!-- <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" /> -->
                <!-- <img src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" alt=""> -->
            </template>
        </MegaMenu>
    </div>
</template>

<script setup>
import { ref } from "vue";
import MegaMenu from 'primevue/megamenu';
import Button from 'primevue/button';

const items = ref([
    {
        label: 'Home',
        root: true
    },
    {
        label: 'Cateories',
        root: true,
        items: [
            [
                {
                    items: [
                        { label: 'Features', icon: 'pi pi-list', subtext: 'Subtext of item' },
                        { label: 'Customers', icon: 'pi pi-users', subtext: 'Subtext of item' },
                        { label: 'Case Studies', icon: 'pi pi-file', subtext: 'Subtext of item' }
                    ]
                }
            ],


        ]
    },
    {
        label: 'Shope',
        root: true
    },
    {
        label: 'Recipes',
        root: true
    }
]);
</script>
<style scope>
.p-megamenu-horizontal .p-megamenu-root-list {
    width: 50% !important;
    display: flex;
    justify-content: end;
}
</style>
