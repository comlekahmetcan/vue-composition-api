<script setup>
import { ref, onErrorCaptured, defineAsyncComponent } from "@vue/runtime-core";
// import MyTodos from "./components/MyTodos.vue";
// import MyUsers from "./components/MyUsers.vue";
const err = ref(null);
const MyTodos = defineAsyncComponent(() => import("./components/MyTodos.vue"));
const MyUsers = defineAsyncComponent(() => import("./components/MyUsers.vue"));
onErrorCaptured((e) => {
  err.value = e;
  return true;
});
</script>
<template>
  <span v-if="err" class="error">{{ err }}</span>
  <suspense v-else>
    <!-- asenkron istekler barındırıyor, işlemler bitince bunları ekrana göster -->
    <template #default>
      <div>
        <MyUsers />
        <hr />
        <MyTodos />
      </div>
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </suspense>
  <!-- birden fazla suspense yazılabilir -->
</template>

<style scoped>
.error {
  color: red;
  font-size: 20px;
}
</style>