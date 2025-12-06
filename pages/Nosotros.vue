<script setup>
import { ref } from 'vue'

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
  <div class="space-y-4">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="border border-gray-300 rounded-lg"
    >
      <button
        @click="toggle(index)"
        class="w-full flex justify-between items-center p-4 font-semibold"
      >
        {{ item.title }}
        <span>{{ item.open ? '-' : '+' }}</span>
      </button>

      <transition name="accordion">
        <div v-if="item.open" class="p-4 pt-0 text-sm">
          {{ item.content }}
        </div>
      </transition>
    </div>
  </div>
</template>

<style>
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.2s ease;
}
.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  max-height: 0;
}
</style>