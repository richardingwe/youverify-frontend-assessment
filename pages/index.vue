<template>
  <div class="">
    <Header @SideNav="showSideNav = !showSideNav" />
    <!-- side nav -->
    <div v-if="showSideNav">
      <SideNav />
    </div>
    <div class="flex">
      <div v-if="showSideNav" class="w-14 lg:w-64 lg:mr-10" />
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
