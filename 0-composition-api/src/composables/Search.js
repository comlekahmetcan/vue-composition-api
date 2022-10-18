import { ref, watchEffect } from "vue"; //reactive effect

export default function () {
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
  return { searchText, isTyping };
}
