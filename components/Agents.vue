<template>
  <div class="col-span-3">
    <!-- agent -->
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
      Agents
    </div>

    <div class="grid grid-cols-3 text-sm border-b border-gray-200">
      <div class="border-b-2 border-black px-4 py-5 cursor-pointer">All</div>
      <div class="text-gray-500 px-4 py-5 flex items-center cursor-pointer">
        <svg
          class="mr-2"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="5" cy="5" r="5" fill="#2EB255" />
        </svg>
        Online
      </div>
      <div class="text-gray-500 px-4 py-5 flex items-center cursor-pointer">
        <svg
          class="mr-2"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="5" cy="5" r="5" fill="#D14349" />
        </svg>
        Offline
      </div>
    </div>
    <Agent />
    <Agent />
    <Agent />
    <Agent />
    <Agent />
    <Agent />
    <Agent />
    <Agent />
    <Agent />
    <Agent />
    <Agent />
    <Agent />
    <Agent />
  </div>
</template>
