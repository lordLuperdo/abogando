<script setup>
import Heads from '~/components/Heads.vue';
import foot from '~/components/foot.vue';

</script>

<template>
<main class="degrade2 p-4 m-3 rounded-lg">
   <Heads></Heads>
   
   <div class="">
    <h1 class="font-Merriweather text-center text-color-azul  text-4xl font-bold sm:text-5xl mt-10 sm:mt-16 sm:mb-10">CONOCENOS MÁS A FONDO</h1>
        
   
</div>
    

</main class=" ">

<section class="flex relative  flex-col md:px-16 px-4 mt-10 gap-6 sm:text-xl ">

        
        <div class="bg-blue-500  h-[70vh] sm:h-[60vh]  sticky top-10 z-0 rounded-lg overflow-hidden">
      
          <div class="relative  flex flex-col items-center justify-center p-5 w-full h-full sm:p-40">
                    <h2 class="text-center font-Merriweather font-bold text-3xl sm:text-7xl sm:mb-3 z-10 text-color-cafe-claro">NUESTRO PROPÓSITO</h2>
                    <p class="text-center z-10 text-white">
                              
                              Abogando por los animales es un proyecto de función social; que busca prestar asesorías y direccionamiento legal a fundaciones, rescatistas y demás personas que se dedican a la protección y cuidado de animales en Colombia.        
                    </p>
                    
                   <video
                          class="absolute top-0 left-0 min-h-full  sm:w-full sm:max-h-full object-cover  z-0"
    
                          src="/components/ui/videos/fondo.mp4"
                          autoplay
                          muted
                          loop
                          playsinline
                    ></video>

          </div>

         
        </div>
        <div class="bg-blue-500 h-[70vh] sm:h-[60vh]  sticky top-10 z-0 rounded-lg overflow-hidden">
      
          <div class="relative  flex flex-col items-center justify-center p-5 w-full h-full sm:p-40">
                    <h2 class="text-center font-Merriweather font-bold text-3xl sm:text-7xl sm:mb-3 z-10 text-color-cafe-claro">MISIÓN</h2>
                    <p class="text-center z-10 text-white">        
                       Realizar charlas para fundaciones y rescatistas sobre cómo actuar legalmente, elaboramos documentos oficiales y los acompañamos en cada proceso, buscando que la ley sancione a aquellos que maltratan animales.
                    </p>
                    
                   <video
                          class="absolute top-0 left-0 min-h-full  sm:w-full sm:max-h-full object-cover  z-0"
    
                          src="/components/ui/videos/proposito.mp4"
                          autoplay
                          muted
                          loop
                          playsinline
                    ></video>

          </div>

         
        </div>
        

        <div class=" p-5 sm:p-40 h-[70vh] sm:h-[60vh] rounded-lg flex flex-col items-center justify-center  sticky top-10 z-20  backdrop-blur-xl border-2 border-color-cafe-claro ">
      
          <div class="relative">

          </div>

          <h2 class="text-center font-Merriweather font-bold text-3xl sm:text-7xl text-color-cafe-claro" sm:mb-3>VISIÓN</h2>
          <p class="text-center text-white">
            Ser el aliado legal para el rescate animal en Colombia.
            <br>
            Visualizamos un futuro donde todas las fundaciones y rescatistas tengan el conocimiento y respaldo jurídico necesario para salvar vidas animales de forma segura y eficiente.

          </p>
        </div>

        
        
</section>


<foot></foot>

</template>

<style>

</style>