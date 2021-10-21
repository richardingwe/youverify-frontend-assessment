<template>
  <div class="">
    <Header />
    <!-- side nav -->
    <SideNav />
    <div class="flex">
      <div class="w-14 md:w-64 md:mr-10" />
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
}
</script>
