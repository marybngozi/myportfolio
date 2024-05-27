<template>
  <div class="w-full h-screen flex">
    <aside
      :class="`min-w-[250px] absolute lg:sticky top-0 left-0 bottom-0 ${
        navShow ? 'block' : 'hidden'
      } lg:block p-4 bg-navyBlue dark:bg-gray-900 z-50 shadow divide-y divide-gray-300 dark:divide-gray-700`"
    >
      <logo class="w-32 lg:w-44 mb-6" />

      <div class="pt-4">
        <admin-side-nav></admin-side-nav>
      </div>
    </aside>

    <main class="grow w-full flex flex-col h-full bg-navyGray text-white">
      <admin-dash-head :title="pageTitle" />

      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: "Home",
    };
  },

  computed: {
    navShow() {
      return this.$store.state.navShow;
    },
  },
};
</script>
