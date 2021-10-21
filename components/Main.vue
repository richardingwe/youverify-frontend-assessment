<template>
  <div class="pt-20">
    <div class="w-full h-12 bg-white" />

    <div class="w-full grid grid-cols-12">
      <div class="col-span-4">
        <!-- task -->
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
          <div class="border-b-2 border-black px-4 py-5">24 Unassigned</div>
          <div class="text-gray-500 px-4 py-5">12 assigned</div>
          <div class="text-gray-500 px-4 py-5">30 Completed</div>
        </div>
        <div>
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

      <div class="col-span-4 h-full">
        <img
          src="../assets/guyana-distance 1.png"
          class="h-full object-cover"
          alt=""
        />
      </div>

      <div class="col-span-4">
        <!-- agents -->
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

        <!-- assigned -->
        <div class="grid grid-cols-3 bg-gray-300 text-sm">
          <div class="border-b-2 border-black px-4 py-5">All</div>
          <div class="text-gray-500 px-4 py-5">Online</div>
          <div class="text-gray-500 px-4 py-5">Offline</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
