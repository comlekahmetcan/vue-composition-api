import { ref,computed,watch } from "vue"; //reactive effect

export default function () {
  //******************************************************************************************************************
  const counter = ref(0);
  const oddOrEven = computed(() => (counter.value % 2 == 0 ? "Çift" : "Tek"));

  //watch(counter,()=>{},{deep:true})
  watch([counter, oddOrEven], ([newC, newO], [oldC, oldO]) => {
    console.log(oldO, "=>", newO);
  });

  //******************************************************************************************************
  return { counter, oddOrEven };
}
