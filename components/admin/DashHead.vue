<script>
export default {
  props: {
    title: String,
  },

  methods: {
    toggleNavShow(val = null) {
      this.$store.commit("setValue", {
        key: "navShow",
        val: val === null ? !this.$store.state.navShow : val,
      });
    },
  },
};
</script>

<template>
  <header
    class="flex justify-between items-end pb-3 pt-3 lg:py-5 px-3 lg:px-5 bg-navyBlue w-full"
    @click.capture="toggleNavShow(false)"
  >
    <h5 class="text-lg lg:text-xl font-semibold text-white">
      {{ title }}
    </h5>

    <div class="flex gap-5 items-end">
      <button
        @click="toggleNavShow(null)"
        class="flex items-center px-1.5 lg:hidden text-white"
      >
        <font-awesome-icon :icon="['fas', 'bars']" class="text-3xl" />
      </button>
    </div>
  </header>
</template>
