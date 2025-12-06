<script setup>
     defineProps(['name','description'])
</script>
<template>
    <div class="degrade3 flex flex-col rounded-md p-5 h-full w-full items-center justify-center">
        <h3 class="text-white font-Merriweather text-2xl font-black">{{ name }}</h3>
        <p class="text-white font-prueba mt-2 ">{{ description }}</p>
         <button @click="navigateTo('/servicios')" class="min-w-full mt-6 flex justify-center">
        <div class="w-full p-1 border-2 border-color-cafe-osc rounded-full">

        <div class=" border-2 bg-color-cafe-claro rounded-full flex justify-center items-center">
          <span class=" text-color-cafe-osc text-center font-prueba">Conocer más</span>
        </div>
    
    </div>
</button>
    </div>
</template>
<style>
.degrade3{
    background: #BF986D;
background: linear-gradient(45deg, rgb(21, 0, 62) 60%,rgb(21, 0, 62,0.6) 80%, rgba(45, 1, 120, 0.1) 100%);
}
</style>