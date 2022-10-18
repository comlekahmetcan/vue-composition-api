<template>
  <h3>{{ title }}</h3>
  <input type="text" v-model="title" />
</template>
<script>
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
    const title = "Bu bir setup başlık";

    return {
      title,
    };
  },
};
</script>x