<template>
  <div class="w-screen h-screen bg-gray-400 pt-10">
    <div class="bg-gray-700 rounded-md shadow-md text-white w-1/3 mx-auto p-3">
      <h3 class="text-center text-2xl">TodoList</h3>

      <section>
        <input placeholder="Nedir?" type="text" class="w-full p-2 bg-gray-700 border-[1px] border-gray-400 rounded-md olutline-none" />
      </section>

      <section class="mt-4">
        <div class="flex justify-between items-center even:bg-gray-600 px-2 p-1">
          <label for="completed">
            <input type="checkbox" id="completed" class="mr-2" />
            <span class="text-lg">Todo1</span>
          </label>
          <button class="bg-indigo-500 px-2 py-1 rounted-md active:bg-indigo-800">Sil</button>
        </div>

        <div class="text-green-300">Tamamlanmışlar</div>
        <div class="text-red-400">Tamamlanmamışlar</div>
      </section>
    </div>
  </div>
</template>