<script setup>
    import abogando from '~/assets/imgs/abogandoporlosanimales.png'
</script>

<template>
    <header class="flex relative">


<div class="sm:flex hidden degrade w-full mx-8 rounded-full justify-between px-4 relative py-2 mt-10">
   <ul class="flex  gap-3">
       <li class="">
           <button class="text-white" @click="">Servicios</button>
       </li>
       <li class="">
           <button class="text-white" @click="">Aliados</button>
       </li>
   </ul>

   <button class="absolute -translate-x-1/2 -translate-y-1/2  left-1/2 w-24"><img :src="abogando" alt="" class="max-w-full"></button>

   <ul class="flex  gap-3">
       <li class="">
           <button class="text-white" @click="">Nosotros</button>
       </li>
       <li class="">
           <button class="text-white px-3 bg-color-azul rounded-full" @click="">Contacto</button>
       </li>
   </ul>


</div>


<div class="flex sm:hidden">


   <button class="absolute top-0"><img :src="abogando" alt="" class=""></button>

   

   <div class="">
       <ul class="">
           <li class="">
               <button class="text-color-azul" @click="">Servicios</button>
           </li>
           <li class="">
               <button class="text-color-azul" @click="">Aliados</button>
           </li>
           <li class="">
               <button class="text-color-azul" @click="">Contacto</button>
           </li>
       </ul>
   </div>
</div>
  
</header>

</template>

<style>
.degrade{
    background: #BF986D;
background: linear-gradient(90deg, rgb(177, 134, 60) 4%, rgba(87, 199, 133, 0) 40%,rgba(87, 199, 133, 0) 60%, rgba(177, 134, 60) 100%);
}
</style>