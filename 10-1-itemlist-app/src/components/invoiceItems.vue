<template>
  <div class="table-header flex">
    <span class="text-left p-1 w-[200px] mr-2">Ürün Adı</span>
    <span class="text-left p-1 w-[50px] mr-2">Adet</span>
    <span class="text-left p-1 w-[100px] mr-2">Fiyat</span>
    <span class="p-1 w-[100px]">Toplam</span>
  </div>
  <div class="table-body">
    <div v-for="i in 5" :key="i" class="table-body-item group">
      <input autocomplete="off" type="text" class="input w-[200px] mr-2" />
      <input autocomplete="off" type="text" class="input w-[50px] mr-2" />
      <input autocomplete="off" type="text" class="input w-[100px] mr-2" />
      <span class="p-1 text-center text-gray-400">$1500</span>
      <div class="text-right flex-grow">
        <button class="delete-button">
          <svg xmlns="http://www.w3.org/2000/svg" class="fill-current" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z" />
          </svg>
        </button>
      </div>
    </div>
    <button class="mt-4 add-item-button">
      <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
      </svg>
      <span class="text-gray-400">Ekle</span>
    </button>
  </div>
</template>