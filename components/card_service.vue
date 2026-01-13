<script setup>

     defineProps(['name','description','imagen'])
</script>
<template>
    <div class="degrade3 flex flex-col rounded-md p-5 min-h-full w-full items-center">
       
         <img :src="imagen" alt="" class="w-full rounded-lg">
        <h3 class="text-white font-Merriweather text-2xl mt-5 sm:text-2xl font-black sm:text-center">{{ name }}</h3>
        <p class="text-white font-prueba mt-2 sm:text-md sm:text-center ">{{ description }} ... <span class="text-color-cafe-claro opacity-70"><NuxtLink to="/servicios">Ver más</NuxtLink></span> </p>

        <div class="flex justify-end items-end  h-full w-full">
           <button @click="navigateTo('/servicios')" class="min-w-full mt-6 flex justify-center">
        <div class="w-full h-15 p-1 border-2 border-color-cafe-osc rounded-full">

        <div class=" border-2 bg-color-cafe-claro rounded-full flex justify-center items-center">
          <span class=" text-color-cafe-osc text-center font-prueba p-2 sm:p-2">Conocer más</span>
        </div>
    
    </div>
        </button> 
        </div>
        
        
    
    
    </div>

</template>
<style>
.degrade3{
    background: #BF986D;
background: linear-gradient(45deg, rgb(21, 0, 62) 60%,rgb(21, 0, 62,0.6) 80%, rgba(45, 1, 120, 0.1) 100%);
}
</style>