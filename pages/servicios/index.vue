<script setup>
    import Heads from '~/components/Heads.vue';
 
    const items = ref([
  {
    title: "How do I create an account?",
    content: `Click the "Sign Up" button in the top right corner and follow the registration process.`,
    open: true
  },
  {
    title: "I forgot my password. What should I do?",
    content: `Click on "Forgot Password" on the login page and follow the instructions sent to your email.`,
    open: false
  },
  {
    title: "How do I update my profile information?",
    content: `Go to "My Account" settings and select "Edit Profile" to make changes.`,
    open: false
  }
])

const toggle = (index) => {
  // estilo acordeón → solo uno abierto
  items.value.forEach((item, i) => {
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

 <div class="space-y-4 px-5">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="border-2 border-color-cafe-osc bg-color- rounded-lg"
    >
      <button
        @click="toggle(index)"
        class="w-full flex justify-between items-center px-4 py-3 text-xl font-semibold font-Merriweather"
      >
        {{ item.title }}
        <span>{{ item.open ? '-' : '+' }}</span>
      </button>

      <transition name="accordion">
        <div v-if="item.open" class="p-4 pt-0 text-sm font-prueba flex flex-col">
          {{ item.content }}
          <div class=" p-1 mt-2 border-2 border-color-cafe-osc rounded-full">
                      <button class=" flex justify-center w-full rounded-full p-3 text-white font-prueba font-semibold bg-color-cafe-osc">Solicitar</button>

          </div>
        </div>
      </transition>
    </div>
  </div>

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