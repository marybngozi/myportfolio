<template>
  <div class="home">
    <button @click="menuClicked = !menuClicked" class="menuBtn">
      <Hamburger :clicked="menuClicked" />
    </button>

    <transition>
      <SideNav class="sidenav" />
    </transition>

    <main>
      <HomeTop />

      <HomePortfolio class="" />

      <HomeAbout class="mt-16" />

      <HomeBlogs class="mt-16" />

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
.home {
  background: #001528 !important;
  height: 100vh;
  width: 100%;
  overflow-y: clip;
  @apply font-lato block lg:flex lg:justify-between pb-6;
}
.home::before {
  content: "";
  background-image: url("/bg.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right top;
  width: 100%;
  height: 90%;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  /* z-index: -1; */
  pointer-events: none;
  opacity: 0.5;
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
