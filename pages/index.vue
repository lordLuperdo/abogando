<script setup>
    
import Heads from '~/components/Heads.vue';
import orejocito from '~/assets/imgs/orejoncito.png'
import foot from '~/components/foot.vue';
import card_service from '~/components/card_service.vue';
import card_exito from '~/components/card_exito.vue'
import formulario from '~/components/formulario.vue';

import { useGeneralStore } from '~/store/general';


const {servicios,exitos} = useGeneralStore()
</script>

<template>
    <main class="bg-[url(~/assets/imgs/bgperro.png)] bg-cover   sm:h-[96vh] px-8  flex flex-col ">

        <heads></heads>

        <h1 class=" font-Merriweather text-center text-white   font-bold  text-5xl  sm:text-5xl mt-10 sm:mt-16">NUESTRA PASIÓN <br/> ES SERVIR </h1>
        <p class="font-prueba text-white text-center mt-4">Brindamos soluciones júridicas para cualquier animal </p>
     
        <button class=" mt-6 flex justify-center w-full mb-10 sm:mb-0">
   <div class="sm:w-[70%] p-2 border-2 w-full border-color-cafe-osc rounded-full">

       <div class=" p-1 border-2 bg-color-cafe-claro rounded-full flex justify-between items-center w-full">
          <span class=" text-color-cafe-osc text-center w-full">Escríbenos tu solicitud</span>
       </div>
    
    </div>
</button>





    </main>

<!--sección 1-->

    <div class="degrade1 sm:p-10 sm:pt-6  px-7 pt-7 m-7 relative rounded-tr-[5rem] rounded-bl-[3rem]">
        <div class="sm:w-[60%]">
            <h3 class="text-color-cafe-osc font-Merriweather text-3xl text-center sm:text-start font-extrabold">¿Qué hacemos?</h3>
            <p class="font-prueba text-white text-center sm:text-left">Somos una firma que busca prestar asesorías y direccionamiento legal a fundaciones, rescatistas y demás personas que se dedican a la protección y cuidado de animales.</p>
        </div>
        <div class="sm:absolute bottom-0 right-0 sm:w-[40%] md:w-[30%]">
            <img :src="orejocito" class="max-w-full" alt="">
        </div>
    </div>

    <!--Servicios-->
  
   <div class=" border-t-4 border-t-color-cafe-osc relative  mt-10 mb-10">

    <div class="bg-color-cafe-osc rounded-full px-4 absolute -translate-x-1/2 -translate-y-1/2  left-1/2">
        <h2 class="SERVICIOS text-white font-Merriweather text-2xl">SERVICIOS</h2>
    </div>

    <div class="flex flex-col sm:flex-row p-5 mt-7  w-full">
       
        <div class="flex flex-col md:flex-row sm:max-w-[50%] p-2">
         <card-service v-for="a in servicios.slice(0,1)" :key="a"
         :name="a.name"
         :description="a.description"
         ></card-service>
        </div>

        <div class="flex flex-col  w-full gap-4 p-2">
            <card-service v-for="a in servicios.slice(1,3)" :key="a"
            :name="a.name"
            :description="a.description.slice(0,30)"
            ></card-service>

        </div>
    </div>


   </div>

   <!--CASOS DE EXITO-->

  <div class="degrade2 flex flex-col justify-center items-center ">
    <div class="px-7 py-1 mt-5 bg-color-azul  rounded-full">
        <h2 class="text-white  text-2xl font-Merriweather">CASOS DE EXITO</h2>
    </div>
    
    <p class="font-prueba mt-4 text-center mx-10 text-white">Contamos con más de <span class="sm:bg-color-azul rounded-full sm:p-1 sm:px-4 text-white">30 casos</span> de exito en nuestra misión.</p>

    <div class=" justify-center items-center flex flex-wrap gap-3 p-5">
       <card_exito v-for="a in exitos" :key="a"
       :id="a.id"
       ></card_exito>

      
    </div>
  </div> 
  
  <!--contactate-->
  <formulario></formulario>
 
  
 
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
</style>