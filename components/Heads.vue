<script setup>
    import abogando from '~/assets/imgs/abogandoporlosanimales.png'
    import { useGeneralStore } from '~/store/general';
    import { useRoute } from 'vue-router';
    import { useRouter } from 'vue-router';

    const route = useRoute()
    const router = useRouter()

    const General = useGeneralStore()  

    const active = ref(false)

    defineProps(["s"])

    const scrollSection = (f) => {
        if(route.path === '/'){
            General.scrollToS(f)
        }else{
            router.push(`/#${f}`) 
        }
    }
    
   
    
</script>

<template>
    <header class="flex relative z-50">


<div class="sm:flex hidden degrade w-full mx-8  rounded-full justify-between   relative  mt-14 font-prueba ">
   <ul class="flex items-center  justify-center gap-7 p-2">
       <li class="">
           <button class="text-white px-3 py-2 " @click="navigateTo('/servicios')">Servicios</button>
       </li>
       <li class="">
           <button class="text-white px-3 py-2 " @click="scrollSection('exito')">Casos</button>
       </li>
   </ul>

   <button class="absolute  -translate-x-1/2 -translate-y-1/2 top-1/2  left-1/2 w-36" @click="navigateTo('/')"><img :src="abogando" alt="" class="max-w-full"></button>

   <ul class="flex items-center  justify-center gap-7 p-2">
       <li class="">
           <button class="text-white px-3 py-2 " @click="navigateTo('/nosotros')">Nosotros</button>
       </li>
       <li class="">
           <button class="text-white px-3 py-2  bg-color-azul rounded-full " @click="scrollSection('formulario')">Contacto</button>
       </li>
   </ul>


</div>


<div class="flex gap-4 sm:hidden items-center w-full justify-b justify-between relative mt-5 ">


   <button class=" top-0 w-28 " @click="navigateTo('')"><img :src="abogando" alt="" class=""></button>

   <button class="w-20 h-10 rounded-full degrade2 flex justify-center items-center" @click="active ? active = false : active = true">
   
        <svg class="text-color-cafe-claro text-3xl" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><!-- Icon from Tabler Icons by Paweł Kuna - https://github.com/tabler/tabler-icons/blob/master/LICENSE --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16m-10 6h10M6 18h14" /></svg>
      
   </button>

   <Transition name="aside">
<div v-if="active" class=" degrade2 absolute p-2 py-6 rounded-lg  top-[110%] z-10 w-full ">
       <ul class="flex flex-col gap-3 justify-around px-2">
           <li class="w-full">
               <button class="text-color-azul w-full py-2  font-Merriweather font-semibold  bg-color-cafe-claro px-2 border-2 border-color-cafe-osc rounded-full" @click="navigateTo('servicios')">Servicios</button>
           </li>
           <li class="w-full">
               <button class="text-color-azul w-full py-2  font-Merriweather font-semibold  bg-color-cafe-claro px-2 border-2 border-color-cafe-osc rounded-full" @click="navigateTo('Nosotros')">Nosotros</button>
           </li>
           <li class="w-full">
               <button class="text-color-azul w-full py-2  font-Merriweather font-semibold  bg-color-cafe-claro px-2 border-2 border-color-cafe-osc rounded-full" @click="scrollSection(s)">Contacto</button>
           </li>
       </ul>
   </div>

   </Transition>

   
</div>
  
</header>

</template>

<style>
.degrade{
    background: #BF986D;
background: linear-gradient(90deg, rgb(177, 134, 60) 4%, rgba(87, 199, 133, 0) 40%,rgba(87, 199, 133, 0) 60%, rgba(177, 134, 60) 100%);
}

.aside-enter-from{
    opacity: 0;
    transform: translateY(-50px);
}
.aside-enter-to{
    opacity: 1;
    transform: translateY(0px);
}

.aside-leave-from{
    opacity: 1;
    transform: translateY(0px);
}
.aside-leave-to{
    opacity: 0;
    transform: translateY(-50px);
}

.aside-enter-active{
     transition: opacity 0.7s ease, transform 0.2s ease;
}

.aside-leave-active{
     transition: opacity 0.2s ease, transform 0.2s ease;
}
</style>