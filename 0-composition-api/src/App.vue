<template>
  <h3>{{ title }}</h3>
  <input type="text" v-model="title" />
  {{ titleLengthMessage }}
  <button @click="toggleIt">Toogle</button>
  <p v-if="show">Lorem ipsum.......................</p>
</template>
<script>
import { ref, computed } from "vue"; //reactive effect
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
    const show = ref(false); //ref bize bir obje döner
    //console.log("show", show.value);

    const toggleIt = () => {
      show.value = !show.value; //show değerine ulaşabilmek için objenin valuesine ulaşabilmemiz lazım
    };
    // function toogleIt(){}

    //tek satırlık bir kod için tanımlama
    const titleLengthMessage = computed(() => title.value.length + " adet karakter yazdınız");
    //birden fazla satır kod için tanımlama
    // const titleLengthMessage = computed(() => {
    //   return title.value.length + " adet karakter yazdınız";
    // });

    //console.log("titleLengthMessage", titleLengthMessage.value);

    return {
      title,
      show,
      toggleIt,
      titleLengthMessage,
    };
  },
};
</script>x