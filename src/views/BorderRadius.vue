<template>
    <div
        v-for="i in steps"
        :class="`m-5 p-5 elevation-5 border-radius-${i}`"
    >Border radius !<br> (border-radius {{ i }})</div>
</template>
<script setup>
import { computed } from "vue";
const steps = computed(() => parseInt(getComputedStyle(document.documentElement).getPropertyValue('--c-borderRadius-steps')));
</script>
<style lang="">
    
</style>