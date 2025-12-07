<script setup>

defineProps(['id'])
</script>

<template>
<div class="w-[30%] rounded-sm overflow-hidden">
    <img :src="`https://storage.googleapis.com/prod-images-lndl/taller_de_licores/${id}.JPG`" alt="">
</div>
</template>