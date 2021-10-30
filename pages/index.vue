<template>
  <div class="transition duration-500 ease-in-out">
    <Header @SideNav="showSideNav = !showSideNav" />

    <div class="flex">
      <!-- side nav -->
      <transition name="side">
        <SideNav v-show="showSideNav" />
      </transition>
      <!-- side nav -->
      <div class="flex w-full">
        <div class="w-full">
          <Main />
        </div>
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
