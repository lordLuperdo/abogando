<script setup>
import emailjs from "@emailjs/browser"


const valor_boton = ref("Enviar")
const name = ref('')
const number = ref('')
const message = ref('')
const email = ref('')

emailjs.init('js3rmuSUWTGbaWTLv')

const send_email = () => {
const form = document.getElementById('myform')
valor_boton.value = "Enviando..."

const serviceID = 'service_hmko6kp';
const templateID = 'template_o7yczis';
emailjs.sendForm(serviceID,templateID,form)
.then(() => {
      valor_boton.value = 'Correo enviado';
    }, (err) => {
      valor_boton.value = 'Intentalo más tarde';
      alert(JSON.stringify(err));
    });
}

</script>
<template>

<form @submit.prevent="send_email" id="myform" action="" class="bg-color-azul exitos flex flex-col p-3 degrade3 rounded-xl mx-5 sm:mx-10  3xl:mx-36 3xl:px-20 3xl:py-10">

<div class="p-4 font-extrabold">
    <h2 class="text-2xl sm:text-3xl text-white text-center font-Merriweather 3xl:pb-7 3xl:text-6xl">ENVIANOS TU CASO</h2>
    <img src="" alt="" class="">
</div>

<div class="flex flex-col w-full sm:flex-row gap-2">
 
     <div class="sm:w-[50%]  sm:min-h-full ">
        <div class="p-1 border-2 rounded-xl h-36 sm:h-full border-color-cafe-osc">
    <textarea v-model="message" name="message" placeholder="Déjanos un resumen de tu caso"  id="" class="bg-color-cafe-claro flex items-start justify-start  w-full h-full rounded-xl p-3 text-lg"> 

    </textarea>
    </div>

    </div>
    <div class="gap-2 sm:gap-3 flex flex-col sm:w-[50%]">

        <div class="p-1 border-2 font-prueba text-md rounded-full border-color-cafe-osc">
            <input
                v-model="name"
                name="name"
                type="text"
                required
                placeholder="Nombre de tu empresa"
                class="w-full  px-3 py-1 sm:py-2  text-color-cafe-osc bg-color-cafe-claro outline-none border-2 focus:border-4 shadow-sm rounded-full"
             />
        </div>
        <div class="p-1 border-2 font-prueba text-md rounded-full border-color-cafe-osc">
            <input
                v-model="number"
                name="number"
                type="number"
                required
                placeholder="Número"
                class="w-full  px-3 py-1 sm:py-2  text-color-cafe-osc bg-color-cafe-claro outline-none border-2 focus:border-4 shadow-sm rounded-full"
             />
        </div>
        <div class="p-1 border-2 font-prueba text-md rounded-full border-color-cafe-osc">
            <input
                v-model="email"
                name="email"
                type="email"
                required
                placeholder="Correo"
                class="w-full  px-3 py-1 sm:py-2  text-color-cafe-osc bg-color-cafe-claro outline-none border-2 focus:border-4 shadow-sm rounded-full"
             />
        </div>
        
    </div>
</div>

<button type="submit" class="mt-5" >
    <div class="p-1 border-2 rounded-full border-color-cafe-osc">
            <div class="w-full text-center py-1 text-white bg-color-cafe-osc outline-none b4 shadow-sm rounded-full md:p-4 font-prueba sm:text-lg">
               {{ valor_boton }}
             </div>
        </div>
</button>



</form>
</template>