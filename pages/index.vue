<template>
  <div class="">
    <Header />
    <!-- side nav -->
    <SideNav />
    <div class="flex">
      <div class="w-64 mr-10" />
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
