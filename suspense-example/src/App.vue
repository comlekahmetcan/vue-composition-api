<script setup>
import { ref, onErrorCaptured, defineAsyncComponent } from "@vue/runtime-core";
// import MyTodos from "./components/MyTodos.vue";
const err = ref(null);
const MyTodos = defineAsyncComponent(() => import("./components/MyTodos.vue"));
onErrorCaptured((e) => {
  err.value = e;
  return true;
});
// import MyUsers from "./components/MyUsers.vue";
</script>
<template>
  <span v-if="err" class="error">{{ err }}</span>
  <suspense v-else>
    <!-- asenkron istekler barındırıyor, işlemler bitince bunları ekrana göster -->
    <template #default>
      <MyTodos />
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </suspense>
</template>

<style scoped>
.error {
  color: red;
  font-size: 20px;
}
</style>