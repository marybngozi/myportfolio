<template>
  <div class="works">
    <button @click="menuClicked = !menuClicked" class="menuBtn">
      <Hamburger :clicked="menuClicked" />
    </button>

    <transition>
      <SideNav class="sidenav" />
    </transition>

    <main class="text-white flex justify-center items-center">
      <h1 class="text-lemon">My Works</h1>
    </main>
  </div>
</template>

<script>
export default {
  name: "Works",

  data() {
    return { menuClicked: false }
  },

  watch: {
    menuClicked() {
      document.querySelector(".sidenav").classList.toggle("show")
    },
  },
}
</script>
<style scoped>
.works {
  background: #001528 !important;
  height: 100vh;
  width: 100%;
  @apply font-lato block md:flex md:justify-between;
}
.sidenav {
  @apply hidden md:block absolute top-0 bottom-0 left-0 md:static;
  height: 100vh;
  width: 9.188rem;
}
.sidenav.show {
  @apply block;
}
.menuBtn {
  @apply block md:hidden absolute right-5 top-5;
}
main {
  width: 100vw;
  @apply pt-20;
}
h1 {
  @apply text-2xl sm:text-4xl md:text-7xl font-black;
}
@media (min-width: 768px) {
  main {
    width: calc(100vw - 9.2rem);
  }
}
</style>
