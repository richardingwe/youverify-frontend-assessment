<template>
  <div>
    <Header />
    <div class="grid grid-cols-12">
      <!-- side nav -->
      <div class="col-span-2">
        <SideNav />
      </div>

      <!-- main -->
      <div class="col-span-10"></div>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
export default {
  components: { Header },
}
</script>
