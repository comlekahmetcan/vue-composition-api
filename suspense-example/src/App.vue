<script setup>
import { defineAsyncComponent } from "@vue/runtime-core";
// import MyTodos from "./components/MyTodos.vue";
const MyTodos = defineAsyncComponent(() => import("./components/MyTodos.vue"));
// import MyUsers from "./components/MyUsers.vue";
</script>
<template>
  <suspense>
    <!-- asenkron istekler barındırıyor, işlemler bitince bunları ekrana göster -->
    <template #default>
      <MyTodos />
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </suspense>
</template>