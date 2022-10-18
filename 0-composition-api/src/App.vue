<template>
  <h3>{{ title }}</h3>
  <input type="text" v-model="title" />
  <button @click="show = !show">Toogle</button>
  <p v-if="show">Lorem ipsum.......................</p>
</template>
<script>
import { ref } from "vue"; //reactive effect
export default {
  // data() {
  //   return {
  //     title: "Bu bir başlıktır.",
  //   };
  // },
  // Çalışma sırası : S - BC - C
  // beforeCreate() {
  //   console.log("BC");
  // },
  // created() {
  //   console.log("C");
  // },
  setup() {
    //Datadaki reactivity oluşmadan önce çalışmak ve datayı ona göre ayarlamak
    const title = ref("Bu bir setup başlık");
    const show = ref(false);
    return {
      title,
      show,
    };
  },
};
</script>x