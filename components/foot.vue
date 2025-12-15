<template>
    <footer class="py-28 relative mt-10">
   <div class="relative z-10 max-w-screen-xl mx-auto px-4 justify-between items-center gap-12 md:px-8 md:flex">
       <div class="flex-1 max-w-lg">
           <h3 class="text-3xl font-bold font-Merriweather text-color-azul">
               Dejanos tu correo para poder contactarnos contigo
           </h3>
       </div>
       <div class="flex-1 mt-6 md:mt-0">
           <form class="flex items-center gap-x-3 md:justify-end">
               <div class="relative">
                   <svg class="w-6 h-6 text-color-cafe-osc absolute left-3 inset-y-0 my-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path>
                   </svg>
                   <input
                       type="email"
                       required
                       placeholder="Correo"
                       class="w-full pl-12 pr-3 py-2 text-color-cafe-osc bg-color-cafe-claro outline-none border focus:border-indigo-600 shadow-sm rounded-full"
                   />
               </div>
               <button class="block w-auto py-3 px-4 font-medium text-sm text-center text-white bg-color-cafe-osc hover:bg-color-azul  active:shadow-none rounded-full shadow">
                   Enviar
               </button>
           </form>
       </div>
   </div>
   <div class="absolute inset-0 w-full h-full" style="background: linear-gradient(137.92deg, rgba(21, 0, 62, 0) 20.43%, rgba(21, 0, 62, 0.26) 49.66%, rgba(21, 0, 62, 1) 92.38%)"></div>
 </footer>

</template>