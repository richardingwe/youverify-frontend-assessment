<template>
  <div class="w-96 bg-white">
    <!-- tasks -->
    <div
      class="
        w-100
        h-12
        bg-primary-200
        py-2
        px-3.5
        flex
        items-center
        text-white
        font-semibold
      "
    >
      Task
    </div>

    <div class="grid grid-cols-3 bg-white text-sm border-b border-gray-200">
      <div class="border-b-2 border-black pl-3 lg:px-4 py-5 cursor-pointer">
        24 Unassigned
      </div>
      <div class="text-gray-500 pl-3 lg:px-4 py-5 cursor-pointer">
        12 assigned
      </div>
      <div class="text-gray-500 pl-1 lg:px-4 py-5 cursor-pointer">
        30 Completed
      </div>
    </div>
    <div class="overflow-auto" style="height: 500px">
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
    </div>
  </div>
</template>
