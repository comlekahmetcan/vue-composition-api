<template>
  <h1>aa</h1>
  <h3>{{ props.counter }}</h3>
</template>
<script setup>
const props = defineProps({ counter: Number });
</script>