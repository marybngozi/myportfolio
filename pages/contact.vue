<template>
  <div class="contact">
    <button @click="menuClicked = !menuClicked" class="menuBtn">
      <Hamburger :clicked="menuClicked" />
    </button>

    <transition>
      <SideNav class="sidenav" />
    </transition>

    <main>
      <HomeBottom class="mt-16" />
    </main>
  </div>
</template>

<script>
export default {
  name: "IndexPage",

  data() {
    return {
      menuClicked: false,
    };
  },

  watch: {
    menuClicked() {
      document.querySelector(".sidenav").classList.toggle("show");
    },
  },
};
</script>
<style scoped>
.contact {
  background: #001528 !important;
  height: 100vh;
  width: 100%;
  overflow-y: clip;
  @apply font-lato block lg:flex lg:justify-between pb-6;
}
.sidenav {
  @apply hidden lg:block fixed top-0 bottom-0 left-0 lg:static;
  height: 100vh;
  width: 9.188rem;
  overflow-y: clip;
  z-index: 2000;
}
.sidenav.show {
  @apply block;
}
.menuBtn {
  background-color: rgba(8, 8, 8, 0.88);
  @apply block lg:hidden fixed right-5 top-5 px-3 pt-3 pb-2 z-9999;
}
main {
  width: 100vw;
  height: 100%;
  overflow-y: scroll;
}
@media (min-width: 1024px) {
  main {
    width: calc(100vw - 9.2rem);
  }
}
</style>
