<template>
  <div class="w-60 min-h-screen bg-primary-300 fixed left-0 bottom-0">
    <div class="h-20 mb-2"></div>
    <div class="py-4 px-8 h-28 text-white bg-primary-400">
      <div class="w-40 text-lg font-bold">Cheta And Daughters Limited</div>
      <div class="font-normal">RC123456789</div>
    </div>
    <nav class="pt-9 min-h-full bg-primary-300 flex flex-col text-white">
      <router-link
        to="/"
        class="py-3 pl-9 bg-primary-200 flex items-center hover:bg-primary-200"
      >
        <img src="../assets/Category.svg" class="mr-5" alt="" />
        Dashboard
      </router-link>
      <router-link
        to="/"
        class="py-3 pl-9 flex items-center hover:bg-primary-200"
      >
        <img src="../assets/people.svg" class="mr-5" alt="" />
        Agents
      </router-link>
      <router-link
        to="/"
        class="py-3 pl-9 flex items-center hover:bg-primary-200"
      >
        <img src="../assets/Document.svg" class="mr-5" alt="" />
        Task
      </router-link>
      <router-link
        to="/"
        class="py-3 pl-9 flex items-center hover:bg-primary-200"
      >
        <img src="../assets/Shield Done.svg" class="mr-5" alt="" />
        Teams
      </router-link>
      <router-link
        to="/"
        class="py-3 pl-9 flex items-center hover:bg-primary-200"
      >
        <img src="../assets/users.svg" class="mr-5" alt="" />
        Users
      </router-link>
      <router-link
        to="/"
        class="py-3 pl-9 flex items-center hover:bg-primary-200"
      >
        <img src="../assets/Setting.svg" class="mr-5" alt="" />
        Settings
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
