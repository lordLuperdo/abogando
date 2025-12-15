<script setup></script>
<template>

<form action="" class="bg-color-azul flex flex-col p-3 degrade3 rounded-xl mx-10 mt-5">

<div class="p-4 font-extrabold">
    <h2 class="text-2xl sm:text-3xl text-white text-center font-Merriweather">ENVIANOS TU CASO</h2>
    <img src="" alt="" class="">
</div>

<div class="flex flex-col w-full sm:flex-row gap-2">
 
     <div class="sm:w-[50%] h-36">
        <div class="p-1 border-2 rounded-xl h-full border-color-cafe-osc">
    <textarea placeholder="Déjanos un resumen de tu caso" name="" id="" class="bg-color-cafe-claro w-full h-full rounded-xl"> 

    </textarea>
    </div>

    </div>
    <div class="gap-2 flex flex-col sm:w-[50%]">

        <div class="p-1 border-2 rounded-full border-color-cafe-osc">
            <input
                type="text"
                required
                placeholder="Nombre de tu empresa"
                class="w-full  px-3 py-1 text-color-cafe-osc bg-color-cafe-claro outline-none border-2 focus:border-4 shadow-sm rounded-full"
             />
        </div>
        <div class="p-1 border-2 rounded-full border-color-cafe-osc">
            <input
                type="number"
                required
                placeholder="Número"
                class="w-full  px-3 py-1 text-color-cafe-osc bg-color-cafe-claro outline-none border-2 focus:border-4 shadow-sm rounded-full"
             />
        </div>
        <div class="p-1 border-2 rounded-full border-color-cafe-osc">
            <input
                type="email"
                required
                placeholder="Correo"
                class="w-full  px-3 py-1 text-color-cafe-osc bg-color-cafe-claro outline-none border-2 focus:border-4 shadow-sm rounded-full"
             />
        </div>
        
    </div>
</div>

<button class="mt-5" >
    <div class="p-1 border-2 rounded-full border-color-cafe-osc">
            <div class="w-full text-center py-1 text-white bg-color-cafe-osc outline-none b4 shadow-sm rounded-full">
               Enviar
             </div>
        </div>
</button>

</form>
</template>