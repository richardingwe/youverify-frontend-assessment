<template>
  <div class="pt-20 min-h-screen overflow-hidden">
    <div class="lg:w-full lg:h-12 bg-white" />

    <div class="lg:hidden w-full text-sm text-center bg-white grid grid-cols-3">
      <span
        @click="show = 'tasks'"
        class="p-2"
        :class="{ 'bg-primary-300 text-white': show === 'tasks' }"
        >Task</span
      >
      <span
        @click="show = 'map'"
        class="p-2"
        :class="{ 'bg-primary-300 text-white': show === 'map' }"
        >Map</span
      >
      <span
        @click="show = 'agents'"
        class="p-2"
        :class="{ 'bg-primary-300 text-white': show === 'agents' }"
        >Agents</span
      >
    </div>

    <div class="lg:hidden w-full">
      <div v-if="show === 'tasks'">
        <Tasks />
      </div>
      <div v-if="show === 'map'" class="h-full">
        <Map />
      </div>
      <div v-if="show === 'agents'">
        <Agents />
      </div>
    </div>

    <div
      class="hidden w-full lg:flex lg:justify-between justify-between bg-map"
      style="height: calc(100vh - 129px)"
    >
      <!-- tasks area start -->
      <Tasks />
      <!-- tasks area end -->

      <!-- map area start -->
      <!-- <Map /> -->
      <!-- map area end -->

      <!-- agents area start -->
      <Agents />
      <!-- agents area end -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: 'tasks',
    }
  },
}
</script>

<style></style>
