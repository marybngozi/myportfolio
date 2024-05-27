<template>
  <!-- v-if="loading" -->
  <div v-if="loading" class="load">
    <button @click="menuClicked = !menuClicked" class="menuBtn">
      <Hamburger :clicked="menuClicked" />
    </button>

    <transition>
      <SideNav class="sidenav" />
    </transition>

    <main class="text-white flex justify-center items-center">
      <div class="w-4/5 md:w-2/5 flex flex-col items-center">
        <Logo class="w-20 h-20" />
        <p class="my-3">MaryB is thinking...</p>
        <div class="w-full bg-dark h-1">
          <div class="bg-lemon h-1" style="width: 45%"></div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "loading",

  data() {
    return { loading: false, menuClicked: false };
  },

  watch: {
    menuClicked() {
      document.querySelector(".sidenav").classList.toggle("show");
    },
  },

  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      setTimeout(() => {
        this.loading = false;
      }, 500);

      try {
      } catch (error) {}
    },
  },
};
</script>
<style scoped>
.load {
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
  height: 80vh;
  @apply pt-20;
}
.logo {
  width: 3.563rem;
  height: 4.375rem;
}
.bg-dark {
  background: #020b13;
}
@media (min-width: 768px) {
  main {
    width: calc(100vw - 9.2rem);
  }
}
</style>
