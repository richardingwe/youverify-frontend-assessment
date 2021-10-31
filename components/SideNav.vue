<template>
  <div class="w-12 lg:w-64 min-h-screen bg-primary-300 overflow-hidden">
    <div class="lg:h-20 mb-2"></div>
    <div class="hidden lg:block py-4 px-8 h-28 text-title bg-primary-400">
      <div class="w-40 text-lg font-bold">Cheta And Daughters Limited</div>
      <div class="font-normal">RC123456789</div>
    </div>
    <nav
      class="pt-20 lg:pt-9 min-h-full bg-primary-300 flex flex-col text-white"
    >
      <router-link
        to="/"
        class="
          pl-3
          py-3
          lg:pl-9
          bg-primary-200
          flex
          items-center
          border-l-4
          hover:bg-primary-200
        "
      >
        <img src="../assets/Category.svg" class="mr-5" alt="" />
        <span class="hidden lg:block">Dashboard</span>
      </router-link>
      <router-link
        to="/"
        class="
          pl-3
          py-3
          lg:pl-9
          flex
          items-center
          hover:bg-primary-200
          border-l-4 border-transparent
        "
      >
        <img src="../assets/people.svg" class="mr-5" alt="" />
        <span class="hidden lg:block">Agents</span>
      </router-link>
      <router-link
        to="/"
        class="
          pl-3
          py-3
          lg:pl-9
          flex
          items-center
          hover:bg-primary-200
          border-l-4 border-transparent
        "
      >
        <img src="../assets/Document.svg" class="mr-5" alt="" />
        <span class="hidden lg:block">Task</span>
      </router-link>
      <router-link
        to="/"
        class="
          pl-3
          py-3
          lg:pl-9
          flex
          items-center
          hover:bg-primary-200
          border-l-4 border-transparent
        "
      >
        <img src="../assets/Shield Done.svg" class="mr-5" alt="" />
        <span class="hidden lg:block">Teams</span>
      </router-link>
      <router-link
        to="/"
        class="
          pl-3
          py-3
          lg:pl-9
          flex
          items-center
          hover:bg-primary-200
          border-l-4 border-transparent
        "
      >
        <img src="../assets/users.svg" class="mr-5" alt="" />
        <span class="hidden lg:block">Users</span>
      </router-link>
      <router-link
        to="/"
        class="
          pl-3
          py-3
          lg:pl-9
          flex
          items-center
          hover:bg-primary-200
          border-l-4 border-transparent
        "
      >
        <img src="../assets/Setting.svg" class="mr-5" alt="" />
        <span class="hidden lg:block">Settings</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
