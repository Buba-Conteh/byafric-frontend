<template>
    <Card style="width: 25rem; overflow: hidden">
        <template #header>
            <!-- <div class="h-[100px] ">

            </div> -->
            <img alt="user header" class="object-cover w-full h-[300px]" src="../assets/images/blog_1.jpg" />
        </template>
        <template #title>A perfect Chereh</template>
        <template #subtitle>how to prepare Chereh</template>
        <template #content>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis
                esse, cupiditate neque
                quas!....
            </p>
            <a href="#" class="text-bold font-bold">Read more <span class="pi pi-arrow-right pt-1"></span> </a>
        </template>
    </Card>
</template>

<script setup>

import Card from 'primevue/card';

</script>
