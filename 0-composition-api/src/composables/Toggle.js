import { ref } from "vue"; //reactive effect

export default function () {
  const show = ref(false); //ref bize bir obje döner
  //console.log("show", show.value);

  const toggleIt = () => {
    show.value = !show.value; //show değerine ulaşabilmek için objenin valuesine ulaşabilmemiz lazım
  };
  // function toogleIt(){}
  
  return { show, toggleIt };
}
