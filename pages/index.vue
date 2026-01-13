<script setup>
    
import Heads from '~/components/Heads.vue';
import orejocito from '~/assets/imgs/orejoncito.png'
import foot from '~/components/foot.vue';
import card_service from '~/components/card_service.vue';
import card_exito from '~/components/card_exito.vue'
import formulario from '~/components/formulario.vue';

import { useGeneralStore } from '~/store/general';


const {servicios,exitos, scrollToS} = useGeneralStore()



const sform = "formulario"
const saliados = ""

</script>

<template>
    <main class="overflow-hidden bg-[url(~/assets/imgs/bgperro.png)] bg-cover relative   sm:h-[96vh] px-8   flex flex-col ">

        <heads class="z-10"
        ></heads>

        <div class="flex flex-col justify-center items-center z-10 h-full">

        <h1 class=" font-Merriweather text-center text-white   font-bold  text-5xl mt-10 sm:mt-0 sm:text-7xl  ">NUESTRA PASIÓN <br/> ES SERVIR </h1>
        <p class="font-prueba text-white sm:text-lg text-center 3xl:text-2xl xl:mx-36 mt-4  xl:mt-10">Abogando por los animales es un proyecto de función social; que busca prestar asesorías y direccionamiento legal a fundaciones, rescatistas y demás personas que se dedican a la protección y cuidado de animales en Colombia. </p>
     
        <div class=" flex flex-col w-full justify-center sm:flex-row  gap-4 md:gap-6 xl:w-full sm:px-[20%]">
           
           
           <button @click="scrollToS(sform)" class=" mt-7 flex justify-center w-full md:mb-10 sm:mb-0 xl:mt-10">
   <div class=" p-2 border-2 min-w-full border-color-cafe-osc rounded-full">

       <div class="  p-3   border-2 bg-color-cafe-claro rounded-full flex justify-between items-center ">
          <span class=" text-color-cafe-osc font-prueba sm:text-lg text-center  w-full">Escríbenos tu solicitud</span>
       </div>
    
    </div>
            </button>

       <button @click="navigateTo('/servicios')" class=" md:mt-7 flex justify-center mb-10 md:w-[50%] xl:mt-10 backdrop-blur-md rounded-full">
   <div class=" p-4 sm:p-2 border-2  border-color-cafe-claro w-full rounded-full flex justify-center items-center">

          <span class=" text-color-cafe-claro font-prueba sm:text-lg text-center  w-full ">Servicios</span>
       
    
    </div>
       </button>


        </div>

       </div>

        <video
    class="absolute top-0 left-0 w-full max-h-full object-cover  z-0"
    
    src="/components/ui/videos/fondo.mp4"
    autoplay
    muted
    loop
    playsinline
  ></video>

    </main>

<!--sección 1-->

    <div class=" degrade1 lg:p-10 sm:pt-6 3xl:mt-14 px-7 p-7 m-7 relative rounded-tr-[5rem] rounded-bl-[3rem] sm:mx-20 3xl:mx-60">
        <div class="sm:w-[60%]  3xl:p-10">
            <h3 class="text-color-cafe-osc font-Merriweather text-3xl text-center sm:text-start sm:text-3xl font-extrabold ">¿Qué hacemos?</h3>
            <p class="font-prueba sm:text-lg text-white text-center sm:text-left sm:mt-2 3xl:text-2xl">Somos una firma que busca prestar asesorías y direccionamiento legal a fundaciones, rescatistas y demás personas que se dedican a la protección y cuidado de animales.</p>
        </div>
        <div class="sm:absolute bottom-0  justify-center flex  w-full right-0 sm:w-[40%] sm:px-0  px-10 md:w-[30%] 3xl:w-[23%]">
            <img :src="orejocito" class=" exitos max-w-full sm:max-w-80 "   alt="">
        </div>
    </div>

    <!--Servicios-->
  
   <div class=" border-t-4 sm:border-t-8 border-t-color-cafe-osc relative sm:mt-16  mt-10 mb-10">

    <div class="bg-color-cafe-osc rounded-full px-10 py-2 absolute -translate-x-1/2 -translate-y-1/2  left-1/2">
        <h2 class="SERVICIOS text-white font-Merriweather text-2xl sm:text-4xl">SERVICIOS</h2>
    </div>

    <div class=" p-5 sm:px-16 mt-7  w-full">

        <div class="flex exitos flex-col lg:flex-row   w-full gap-4 p-2">
            <card-service class="exitos" v-for="a in servicios.slice(0,4)" :key="a"
            :name="a.name"
            :imagen="a.photo"
            :description="a.description.slice(0,70)"
            ></card-service>

        </div>
    </div>

    <button @click="navigateTo('/servicios')" class=" px-10 md:px-60  flex justify-center w-full md:mb-10 sm:mb-0">
   <div class=" p-1 border-2 min-w-full border-color-cafe-osc rounded-full">

       <div class="  p-3  sm:p-5 border-2 bg-color-cafe-osc rounded-full flex justify-between items-center ">
          <span class=" text-white font-prueba sm:text-lg text-center w-full">Conoce más servicios</span>
       </div>
    
    </div>
            </button>
   </div>
    
    <div id="exito" class="mb-4 h-1 w-hull"></div>

   <!--CASOS DE EXITO-->

  <div class="degrade2 flex flex-col justify-center items-center ">
    <div class="px-7 py-1 mt-5 bg-color-azul  rounded-full xl:mt-10">
        <h2 class="text-white   font-Merriweather text-2xl sm:text-4xl">NUESTROS CLIENTES</h2>
    </div>
    
    <p class="font-prueba mt-4 text-center mx-10 text-white xl:mt-7 ">Contamos con más de <span class="sm:bg-color-azul rounded-full sm:p-1 sm:px-4 text-white">10 casos</span> de exito en nuestra misión.</p>

    <div class=" exitos justify-center items-center flex flex-col lg:flex-row gap-3 sm:px-20 3xl:mb-20 p-5">
      <card_exito
      class="exitos"
      v-for="exito in exitos"
      :key="exito"
      :name="exito.name"
      :description="exito.description"
      :imagen="exito.photo"
      ></card_exito>

      
    </div>
  </div> 
  
  <div id="formulario" class="mb-4 h-1 w-hull"></div>

  <!--contactate-->
  <formulario ></formulario>
 
  
 
  <foot></foot>
 
</template>

<style>
body{
    background-color: #FAE9D5;
}
.degrade1{
    background: #BF986D;
background: linear-gradient(90deg, rgb(21, 0, 62) 40%,rgb(21, 0, 62,0.6) 70%, rgba(45, 1, 120, 0.1) 100%);
}

.degrade2{
    background: #BF986D;
background: linear-gradient(0deg, rgb(177, 134, 60,0) 0%, rgba(177, 134, 60));
}

.exitos{
    view-timeline: --space;
  animation-timeline: --space;
  animation-name: show;
  animation-range: entry 0% cover 30%;
}

@keyframes show {
    from{
        opacity: 0;
        scale: 25%;
    }
    to{
        opacity: 1;
        scale: 100%;
    }
}
</style>