<script setup>
    import Heads from '~/components/Heads.vue';
    import {useGeneralStore} from '~/store/general';
    import formulario from '~/components/formulario.vue';
    import foot from '~/components/foot.vue';

    const General = useGeneralStore()
 
   

const toggle = (index) => {
  // estilo acordeón → solo uno abierto
  General.servicios.forEach((item, i) => {
    item.open = i === index ? !item.open : false
  })
}

</script>

<template>
<main class="bg-color-azul p-4 m-3 rounded-lg">
   <Heads></Heads>
   
   <div class="">
    <h1 class="font-Merriweather text-center text-white  text-5xl font-black sm:text-5xl mt-10 sm:mt-16">NUESTROS SERVIVIOS</h1>
            <p class="font-prueba text-white text-center mt-4 mb-10 ">Conoce lo que tenemos para tu empresa </p>
   
</div>
    

</main class=" ">

 <div class="space-y-4 px-5 flex flex-col">
    <div
      v-for="(item, index) in General.servicios"
      :key="index"
      class="border-2 border-color-cafe-osc bg-color- rounded-lg"
    >
      <button
        @click="toggle(index)"
        class="w-full flex justify-between items-center px-4 py-3 text-xl sm:text-3xl font-semibold font-Merriweather"
      >
        {{ item.name }}
        <span>{{ item.open ? '-' : '+' }}</span>
      </button>

      <transition name="accordion">
        <div v-if="item.open" class="p-4 pt-0 text-sm sm:text-xl font-prueba flex flex-col md:flex-row">
            <img :src="item.photo" alt="" class="w-full rounded-lg">
            
         <div class="flex flex-col sm:p-20 items-center justify-center">
          {{ item.description }}
          <div class=" p-1 mt-5 border-2 border-color-cafe-osc rounded-full w-full">
                      <button class=" flex justify-center w-full rounded-full p-3 text-white font-prueba font-semibold bg-color-cafe-osc">Solicitar</button>

          </div>
         </div>   
          
        </div>
      </transition>
    </div>
  </div>

  <foot></foot>

</template>

<style>
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.4s ease-in;
}
.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  max-height: 0;
}
</style>