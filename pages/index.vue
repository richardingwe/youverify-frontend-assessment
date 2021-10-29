<template>
  <div class="transition duration-500 ease-in-out">
    <Header @SideNav="showSideNav = !showSideNav" />
    <!-- side nav -->
    <transition name="side">
      <SideNav v-show="showSideNav" />
    </transition>
    <div class="flex">
      <!-- <transition name="side"> -->
      <div v-show="showSideNav" class="w-14 lg:w-64 lg:mr-10" />
      <!-- </transition> -->
      <div class="w-full">
        <Main />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
export default {
  components: { Header },
  data() {
    return {
      showSideNav: true,
    }
  },
}
</script>

<style>
.side-enter-active,
.side-leave-active {
  transition: 0.8s ease all;
}
.side-enter-from,
.side-leave-to {
  transform: translateX(-700px);
}
</style>
