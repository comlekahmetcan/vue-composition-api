<template>
  <h3>{{ title }}</h3>
  <input type="text" v-model="title" />
  <button @click="inc">{{ counter }}</button>
  <hr />
  <oddOrEven :counter="counter" @odd-event="alertMe" /><!--ilk gönderme buradan counter için-->

  <hr />

  <h1>User App</h1>
  <input type="text" v-model="state.personal.name" />
  <input type="text" v-model="state.personal.lname" />
  {{ state.personal }}
</template>
<script setup>
import { ref, reactive } from "vue";
//! ---------beforeCreate() created() ve data()
import oddOrEven from "./components/oddOrEven.vue";
import Utils from "./composables/Utils.js";
const { title, counter, inc, alertMe } = Utils();
//! ---------UserApp
// const name = ref("");          x
// const lname = ref(" ");        x
//reactive data(){} vb
const state = reactive({
  personal: {
    name: "AhmetCan",
    lname: null,
  },
  itemList: [],
});
// const itemList = ref([]);

console.log("state", state.personal.name);
</script>