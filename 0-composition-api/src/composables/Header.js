import { ref, computed } from "vue"; //reactive effect

export default function () {
  const title = ref("Bu bir setup başlık");

  //tek satırlık bir kod için tanımlama
  const titleLengthMessage = computed(() => title.value.length + " adet karakter yazdınız");
  //birden fazla satır kod için tanımlama
  // const titleLengthMessage = computed(() => {
  //   return title.value.length + " adet karakter yazdınız";
  // });

  //console.log("titleLengthMessage", titleLengthMessage.value);

  return { title, titleLengthMessage };
}
