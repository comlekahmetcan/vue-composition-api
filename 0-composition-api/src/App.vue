<template>
  <h3>{{ title }}</h3>
  <input type="text" v-model="title" />
  {{ titleLengthMessage }}
  <button @click="toggleIt">Toogle</button>
  <p v-if="show">Lorem ipsum.......................</p>
  <hr />
  <button @click="counter++">{{ counter }} {{ oddOrEven }}</button>
  <hr />
  <input type="text" v-model="searchText" />
  <p v-if="isTyping">Şu an yazıyor.....</p>
</template>
<script>
import { ref, computed, watch, watchEffect } from "vue"; //reactive effect
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

    //******************************************************************************************************************
    const counter = ref(0);
    const oddOrEven = computed(() => (counter.value % 2 == 0 ? "Çift" : "Tek"));

    //watch(counter,()=>{},{deep:true})
    watch([counter, oddOrEven], ([newC, newO], [oldC, oldO]) => {
      console.log(oldO, "=>", newO);
    });

    //******************************************************************************************************************

    const searchText = ref("");
    const isTyping = ref(false);

    // watch(searchText, () => {
    //   if (searchText.value.length > 0) {
    //     isTyping.value = true;

    //     setTimeout(() => {
    //       isTyping.value = false;
    //     }, 1500);
    //   }
    // });

    watchEffect((onInvalidate) => {
      //const stop = watchEffect((onInvalidate) => {
      if (searchText.value.length > 0) {
        isTyping.value = true;

        const typing = setTimeout(() => {
          isTyping.value = false;
          //stop();
        }, 1500);
        //asenkron istek atılacağı zaman bu şekilde yapılabilir sürekli istek atmak yerine timeout kullanarak
        onInvalidate(() => clearTimeout(typing));
      }
    });

    return {
      title,
      show,
      toggleIt,
      titleLengthMessage,
      counter,
      oddOrEven,
      searchText,
      isTyping,
    };
  },
};
</script>x