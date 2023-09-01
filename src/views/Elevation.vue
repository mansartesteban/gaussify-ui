<template>
    <div
        v-for="i in steps"
        :class="`m-5 p-5 elevation-${i}`"
    >Hello world !<br> (elevation {{ i }})</div>
</template>
<script setup>
import { computed } from "vue";
const steps = computed(() => parseInt(getComputedStyle(document.documentElement).getPropertyValue('--c-elevation-steps')));
</script>
<style lang="">

</style>